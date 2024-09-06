import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import {
  ExButton,
  ExContainer,
  ExLoading,
  ExText,
  ExTextInput,
  ExTCList,
} from "../components";
import { Provider as PaperProvider } from "react-native-paper";
import { sendTCRequest } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const TCPage = () => {
  const [data, setData] = useState([]);
  const [tc, setTC] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.exUser);

  const handleSearchRequest = async (tc = null) => {
    try {
      const response = await dispatch(sendTCRequest({ tc })).unwrap();
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ExContainer>

      <ExText
        exText="TC"
        exSize={30}
        exMarginBottom={10}
        exFontWidth="bold"
      />
      <ExTextInput
        exMarginVertical={10}
        exPlaceholder="TC"
        exValue={tc}
        exOnChangeText={(text) => {
          setTC(text);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="Search"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => handleSearchRequest(tc)}
        exValue={tc}
        exWidth="60%"
        exMaxWidth={300}
      />

      <PaperProvider>
        <ExTCList items={data} />
      </PaperProvider>

      {isLoading ? (
        <ExLoading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </ExContainer>
  );
};

export default TCPage;

const styles = StyleSheet.create({});
