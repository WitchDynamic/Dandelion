import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Landing from "./components/Landing/Landing";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default App;
