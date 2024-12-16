import React from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import MainScreen from "../components/MainScreen";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      <Navbar />
      <div className="flex flex-1">

        <Sidebar />
        <div className="flex-1">
          <MainScreen />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

