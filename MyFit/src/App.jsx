import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
