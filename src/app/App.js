import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "../components/home/Home"
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import MyPets from "../components/myPets/MyPets";
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://0.0.0.0:9292/users/all')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypets" element={<MyPets users={users}/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
