import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import {
  ExButton,
  ExContainer,
  ExHyperText,
  ExLoading,
  ExText,
  ExTextInput,
  ExAdSoyadList,
  ExTest,
} from "../components";
import { Provider as PaperProvider } from "react-native-paper";
import { sendAdSoyadRequest } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AdSoyadPage = () => {
  const [data, setData] = useState([]);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [il, setil] = useState("");
  const [ilce, setilce] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.exUser);

  const handleSearchRequest = async (
    ad = null,
    soyad = null,
    il = null,
    ilce = null
  ) => {
    try {
      const response = await dispatch(
        sendAdSoyadRequest({ ad, soyad, il, ilce })
      ).unwrap();
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
        exText="Ad Soyad"
        exSize={30}
        exMarginBottom={10}
        exFontWidth="bold"
      />

      <ExTextInput
        exMarginVertical={0}
        exPlaceholder="ADI"
        exValue={ad}
        exOnChangeText={(text) => {
          setAd(text);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExTextInput
        exMarginVertical={0}
        exPlaceholder="SOYADI"
        exValue={soyad}
        exOnChangeText={(text) => {
          setSoyad(text);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExTextInput
        exMarginVertical={0}
        exPlaceholder="IL"
        exValue={il}
        exOnChangeText={(text) => {
          setil(text);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExTextInput
        exMarginVertical={0}
        exPlaceholder="ILCE"
        exValue={ilce}
        exOnChangeText={(text) => {
          setilce(text);
        }}
        exWidth="60%"
        exMaxWidth={300}
      />

      <ExButton
        exTitle="Search"
        exColor="#003566"
        exPressedColor="#001D3D"
        exOnPress={() => handleSearchRequest(ad, soyad, il, ilce)}
        exWidth="60%"
        exMaxWidth={300}
      />

      <PaperProvider>
        <ExAdSoyadList items={data} />
      </PaperProvider>

      {isLoading ? (
        <ExLoading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </ExContainer>
  );
};

export default AdSoyadPage;

const styles = StyleSheet.create({});
