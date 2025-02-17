import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AIInterface from "./AIInterface";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ai" element={<AIInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
