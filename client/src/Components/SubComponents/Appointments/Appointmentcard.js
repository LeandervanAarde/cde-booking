import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import "../../../index.scss";

const Appointmentcard = (props) => {

    return (
    <Col md={2} className="card">
        <Col md={{span:6, offset: 3}} className="photo"></Col>
        <h5 className=" cardText text-center mt-4">{props.Doctor}</h5>
        <h5 className=" cardText text-center">{props.patient}</h5>
        <h5 className=" cardText text-center">{props.time}</h5>
    </Col>
    );
};

export default Appointmentcard;