import React from 'react';
import { Col, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Circle = (props) => {
    return (
      <>
         <Col md={{span: 5, offset: 3}} className="photo">
           {props.children}
         </Col>
      </>
    );
};

export default Circle;