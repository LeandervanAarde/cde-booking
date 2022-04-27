
import bootstrap from "bootstrap";
import { Container } from "react-bootstrap";
import React from "react";
import { Row } from "react-bootstrap";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./Components/Navigation";
import Appointments from "./Components/Appointments";
import Patients from "./Components/Patients";
import Doctors from "./Components/Doctors"
import Receotionists from "./Components/Receptionists"
function App() {
  return (
    <Container fluid className="content">
      <Row>
        <Navigation/>
      <Routes>
        <Route path="/Appointments" element={<Appointments/>}></Route>
        <Route path="/Patients" element={<Patients/>}></Route>
        <Route path="/Doctors" element={<Doctors/>}></Route>
        <Route path="/" element={<Receotionists/>}></Route>
      </Routes>
      </Row>
    </Container>
  );
}

export default App;
