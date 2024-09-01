import React from "react";
import RootNavigation from "./src/navigation/rootNavigation";
import { Provider } from "react-redux";
import { exStore } from "./src/redux/exStore";

const App = () => {
  return (
    <Provider store={exStore}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
