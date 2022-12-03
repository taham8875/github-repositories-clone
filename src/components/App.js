import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Repositories from "./Repositories";

function App() {
  return (
    <>
      <Navbar />
      <MainContent>
        <SideBar />
        <Repositories />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
