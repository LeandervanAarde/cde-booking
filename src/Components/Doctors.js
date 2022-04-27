import React from 'react';
import { Col, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/appointments.scss';
import Input from './Subcomponents/Input';
import '../index.scss';

const Doctors = () => {
    return (
      <Col md={{span:9, offset: 2}}className="contentContainer">
      <Input >
          Search Patient...
      </Input>
      <Col md={3} className="profile"></Col>
  </Col>
    );
};

export default Doctors;