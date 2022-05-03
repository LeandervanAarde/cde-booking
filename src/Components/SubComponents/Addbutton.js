import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { Col } from 'react-bootstrap';

const Addbutton = () => {
    return (
        <Col md={4} className="button">
            <IoMdAdd color='white' size={47}/>
        </Col>
    );
};

export default Addbutton;