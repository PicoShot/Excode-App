import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import {
  ExButton,
  ExContainer,
  ExHyperText,
  ExLoading,
  ExText,
  ExTextInput,
  ExAileList,
  ExTest,
} from "../components";
import { Provider as PaperProvider } from "react-native-paper";
import { sendAileRequest } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AilePage = () => {
  const [data, setData] = useState([]);
  const [tc, setTC] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.exUser);

  const handleSearchRequest = async (tc = null) => {
    try {
      const response = await dispatch(sendAileRequest({ tc })).unwrap();
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
        exText="Aile"
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
        <ExAileList items={data} />
      </PaperProvider>

      {isLoading ? (
        <ExLoading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </ExContainer>
  );
};

export default AilePage;

const styles = StyleSheet.create({});
