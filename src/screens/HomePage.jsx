import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import {
  ExButton,
  ExContainer,
  ExHyperText,
  ExLoading,
  ExText,
  ExTextInput,
} from "../components";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    getData();
  }, [isSaved]);

  const dispatch = useDispatch();

  // send data
  const sendData = async (title, content) => {
    try {
      const decRef = await addDoc(collection(db, "notifies"), {
        title: title,
        content: content,
        date: Date.now(),
      });
      console.log("sended");
    } catch (error) {
      console.error(error);
    }
  };

  // get data
  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "notifies"));
      querySnapshot.forEach((doc) => {
        //setData([...data, doc.data()]);
        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // delete data
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "notifies", value));
      console.log("deleted");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // update data
  const updateData = async () => {
    try {
      const notifiesData = doc(db, "notifies", "4A291uOlkFmgpzk36F6m");
      await updateDoc(notifiesData, {
        content: "changed23 test",
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ExContainer>
      {data.map((value, index) => {
        return (
          <Pressable
          onPress={() => {
            deleteData(value.id);
            setTimeout(() => {
              setIsSaved(isSaved === false ? true : false);
            }, 50);
          }}
            key={index}
          >
            <ExText exText={"id: " + value.id} />
            <ExText exText={"title: " + value.title} />
            <ExText exText={"content: " + value.content} />
            <ExText exText={"date: " + new Date(value.date).getFullYear()} />
          </Pressable>
        );
      })}

      <ExButton
        exTitle="Save Data"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => {
          sendData("test", "test notify"),
            setIsSaved(isSaved === false ? true : false);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="Get Data"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => getData()}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="Delete Data"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => deleteData()}
        exWidth="60%"
        exMaxWidth={300}
      />
      <ExButton
        exTitle="Update Data"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => updateData()}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="Logout"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => handleLogout()}
        exWidth="60%"
        exMaxWidth={300}
      />
    </ExContainer>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
