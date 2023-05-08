import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";


import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Board from "./Board";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    
    <div className="App">
      <Board />
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  
  
  );
}

export default App;
