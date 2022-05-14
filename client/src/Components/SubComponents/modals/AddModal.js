import React from 'react';
import { Col } from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaUserPlus } from "react-icons/fa";

const AddModal = ({props, setAddModal}) => {
    return (
        <>
        <Col md={12} className='backdrop' onClick={ () => setAddModal(false)}> </Col>
        <Col md={{span:6}} className="Modal">
           <Col md={12}>
        
            <Col md={2} className="logo" onClick={ () => setAddModal(false)}> </Col>

                <Col md={{span:3, offset:4}} className="mt-5" onClick={ () => setAddModal(false)}><Primarybtn ><FaUserPlus size ={25} className="me-3 " /> Add patient </Primarybtn></Col>
           </Col>
        </Col>
        </>
    );
};

export default AddModal;