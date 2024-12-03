import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./Components/SignInPage";
// import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Reset from "./Components/Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/sign-in"} replace />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//         <Route path="/home" element={<Home />} />
