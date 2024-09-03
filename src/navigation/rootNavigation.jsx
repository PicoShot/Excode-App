import { NavigationContainer } from "@react-navigation/native";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import app from "../config/firebaseConfig";

const RootNavigation = () => {
  const { isAuth } = useSelector((state) => state.exUser);
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
