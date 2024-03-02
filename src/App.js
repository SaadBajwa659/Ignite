import React from "react";
import { Routes, Route } from "react-router-dom";
// Components and pages
import Home from './pages/Home'
import GlobalStyles from "./components/GlobalStyles";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
