// import { useState } from "react";
import "@mantine/core/styles.css";
import { HeaderSimple } from "./components/HeaderSimple";
import DashboardContainer from "./components/DashboardContainer";
import "./App.css";

import { MantineProvider } from "@mantine/core";
import { Router, Route } from "wouter";
// import ChatInterface from "./components/ChatInterface";

function App() {
  return (
    <MantineProvider>
      <HeaderSimple></HeaderSimple>
      <Router>
        {/* <Route path="/chat" component={ChatInterface} /> */}
        <Route path="/" component={DashboardContainer} />
        {/* <Route path="/dataroom" component={DashboardContainer} /> */}
        <Route path="/dashboard" component={DashboardContainer} />
      </Router>
    </MantineProvider>
  );
}

export default App;
