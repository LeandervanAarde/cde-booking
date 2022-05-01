import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Placeholder } from 'react-bootstrap';
import "../../index.scss";

const Appointmentcard = () => {

    return (
    <Col md={3} className="card">
        <Col md={{span:6, offset: 3}} className="photo"></Col>
        <h5 className=" cardText text-center mt-4">Doctor Name </h5>
        <h5 className=" cardText text-center">Patient name</h5>
        <h5 className=" cardText text-center">Time slot</h5>
    </Col>
    );
};

export default Appointmentcard;