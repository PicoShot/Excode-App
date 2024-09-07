import React, { useState, useEffect } from "react";
import {
  ExButton,
  ExContainer,
  ExLoading,
  ExText,
  ExTextInput,
  ExSulaleList,
} from "../components";
import { Provider as PaperProvider } from "react-native-paper";
import { sendSulaleRequest } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SulalePage = () => {
  const [data, setData] = useState([]);
  const [tc, setTC] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.exUser);

  const handleSearchRequest = async (tc = null) => {
    try {
      const response = await dispatch(sendSulaleRequest({ tc })).unwrap();
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
        exText="Sülale"
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
        <ExSulaleList items={data} />
      </PaperProvider>

      {isLoading ? (
        <ExLoading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </ExContainer>
  );
};

export default SulalePage;

