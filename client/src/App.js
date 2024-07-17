import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/child_components/Navbar";
import Dashboard from "./components/Dashboard";
import Workout from "./components/Workout"
import Login from "./components/Login"
import Signup from "./components/Signup"
import About from "./components/About"
import Home from "./components/Home";
import Footer from "./components/child_components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/workout" element={<Workout/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
