import React from 'react';
import { Col, Placeholder } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Primarybtn = (props) => {
    return (
        <Col md={{span:10, offset: 1}} className='primaryBtn'>
            <p className='text-center'>{props.children}</p>
        </Col>
    );
};

export default Primarybtn;