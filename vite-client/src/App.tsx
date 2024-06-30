// import { useState } from "react";
import "@mantine/core/styles.css";
import { HeaderSimple } from "./components/HeaderSimple";
import DashboardContainer from "./components/DashboardContainer";
import "./App.css";

import { MantineProvider } from "@mantine/core";

function App() {

  return (
    <MantineProvider>
      <HeaderSimple></HeaderSimple>
      <DashboardContainer></DashboardContainer>
    </MantineProvider>
  );
}

export default App;
