import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  useDisclosure,
} from "@chakra-ui/react";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import NavBar from "./UI/navbar";
import FavDrawer from "./UI/drawer";

export default function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <NavBar openDrawer={onOpen} />
      <FavDrawer isOpen={isOpen} onClose={onClose} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </div>
  );
}


