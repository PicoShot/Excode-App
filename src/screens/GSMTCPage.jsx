import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  ExButton,
  ExContainer,
  ExLoading,
  ExText,
  ExTextInput,
  ExTCGSMList,
} from "../components";
import { Provider as PaperProvider } from "react-native-paper";
import { sendGSMTCRequest } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const GSMTCPage = () => {
  const [data, setData] = useState([]);
  const [gsm, setGSM] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.exUser);

  const handleSearchRequest = async (gsm = null) => {
    try {
      const response = await dispatch(sendGSMTCRequest({ gsm })).unwrap();
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
        exText="GSM TC"
        exSize={30}
        exMarginBottom={10}
        exFontWidth="bold"
      />
      <ExTextInput
        exMarginVertical={10}
        exPlaceholder="GSM"
        exValue={gsm}
        exOnChangeText={(text) => {
          setGSM(text);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="Search"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => handleSearchRequest(gsm)}
        exValue={gsm}
        exWidth="60%"
        exMaxWidth={300}
      />

      <PaperProvider>
        <ExTCGSMList items={data} />
      </PaperProvider>

      {isLoading ? (
        <ExLoading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </ExContainer>
  );
};

export default GSMTCPage;

const styles = StyleSheet.create({});
