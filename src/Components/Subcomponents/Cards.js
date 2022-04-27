import React from 'react';
import { Col, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cards = (props) => {
    return (
       <Col md={3} lg={3} className="Card">
           {props.children}
       </Col>
    );
};

export default Cards;