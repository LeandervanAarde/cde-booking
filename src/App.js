
import { Container } from "react-bootstrap";
import React from "react";
import { Row } from "react-bootstrap";
import {Routes, Route} from 'react-router-dom';
import './index.scss';
import Navigation from "./Components/SubComponents/UI/Navigation";
import Appointments from "./Components/Appointments";
import Doctors from "./Components/Doctors";
import Patients from "./Components/Patients"
import Receptionists from "./Components/Receptionists";


function App() {

  return (
    <Container fluid className="content">
      <Row>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Appointments/>}></Route>
          <Route path="/Patients" element={<Patients/>}></Route>
          <Route path="Doctors" element={<Doctors/>}></Route>
          <Route path="/Receptionists" element={<Receptionists/>}></Route>
        </Routes>

  
      </Row>
    </Container>
  );
}

export default App;
