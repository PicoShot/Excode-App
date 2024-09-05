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
import { logout, sendAuthenticatedRequest } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    getData();
  }, [isSaved]);

  const dispatch = useDispatch();

  const handleSendRequest = () => {
    dispatch(sendAuthenticatedRequest());
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
        exTitle="Send Request"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => handleSendRequest()}
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
