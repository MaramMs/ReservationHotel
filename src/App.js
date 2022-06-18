import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,List,Hotel }  from "./pages";
import './App.css'


const App = () => {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
