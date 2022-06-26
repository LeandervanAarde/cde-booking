
import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Navigation from "./Components/SubComponents/UI/Navigation";
import Appointments from "./Components/Appointments";
import Doctors from "./Components/Doctors";
import Patients from "./Components/Patients"
import Receptionists from "./Components/Receptionists";
import Login from "./Components/Login";
import { io } from "socket.io-client";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const socket = io.connect("http://localhost:3001");

  return (
    <Container fluid className="content">
      {isLoggedIn ? (<Login />) : (<Row>
        <Routes>
          <Route path="/Appointments" element={<Appointments />}></Route>
          <Route path="/Patients" element={<Patients />}></Route>
          <Route path="Doctors" element={<Doctors />}></Route>
          <Route path="/Receptionists" element={<Receptionists />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Row>)}
    </Container>
  );
}

export default App;
