import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React, { useState } from "react";
import {
  ExButton,
  ExContainer,
  ExHyperText,
  ExLoading,
  ExText,
  ExTextInput,
} from "../components";
import { collection, getDocs, doc, deleteDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const HomePage = () => {
  const [data, setData] = useState([]);
  console.log('sended');

  // send data
  const sendData = async (title, content) => {
    try {
      const decRef = await addDoc(collection(db, "notifies"), {
        title: title,
        content: content,
        date: Date.now(),
      });
      console.log('sended');
    } catch (error) {
      console.error(error);
    }
  };

  // get data
  const getData = async () => {
    const allData = []
    try {
      
      const querySnapshot = await getDocs(collection(db, "notifies"));
      querySnapshot.forEach((doc) => {
        //setData([...data, doc.data()]);
        allData.push(doc)
        return allData
      });
      console.log('recieved');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // delete data
  const deleteData = async () => {
    try {
      await deleteDoc(doc(db, 'notifies', 'FVJgWF5NfZkECGHeUjfR'))
      console.log('deleted');
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // update data
  const updateData = async () => {
    try {
      const notifiesData = doc(db, 'notifies', '4A291uOlkFmgpzk36F6m')
      await updateDoc(notifiesData, {
        content: 'changed test',
      })
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <ExContainer>
      <View>
        <ExText exText="Notify" />
        <ExText
          exText={`${data[0]?.title}: ${data[0]?.content} Date: ${new Date(
            data[0]?.date
          ).toLocaleString("tr-TR")}`}
        />
        <ExText
          exText={`${data[1]?.title}: ${data[1]?.content} Date: ${new Date(
            data[1]?.date
          ).toLocaleString("tr-TR")}`}
        />
      </View>

      <ExButton
        exTitle="Save Data"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => sendData("test", "test notify")}
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

    </ExContainer>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
