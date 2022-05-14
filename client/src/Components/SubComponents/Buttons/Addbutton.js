import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { Col } from 'react-bootstrap';

const Addbutton = (props) => {
    return (
        <Col md={4} className="button text-center" onClick={props.function}>
            <IoMdAdd color='white' size={"auto"} onClick={props.function}/>
        </Col>
    );
};

export default Addbutton;