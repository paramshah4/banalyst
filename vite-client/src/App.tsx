import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@mantine/core/styles.css";
import { HeaderSimple } from "./components/HeaderSimple";
import DashboardContainer from "./components/DashboardContainer";
import { Flex } from "@mantine/core";
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
