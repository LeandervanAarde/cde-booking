import React from 'react';
import bootstrap from 'bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navigation.scss'
import { FaRegListAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GiStethoscope } from "react-icons/gi";
import {TiPhoneOutline} from "react-icons/ti";
import Primarybtn from './Subcomponents/Primarybtn';


const Navigation = () => {
    return (
        <Col md={2} lg={2} xl={2} className="navCon ps-3">
            {/* Logo placed in css */}
            <Col md={12} className="logo-container"></Col> 
            {/* Navigation */}
            <Link to="/Appointments">
                <Col md={12} className="nav-Item  " id="item-1">
                    <FaRegListAlt size={30} color={"black"}/>
                    <h6 className='nav-text text-center'>Appointments</h6>
                </Col>
            </Link>

            <Link to="/Patients">
                <Col md={12} className="nav-Item ">
                    <FaRegUser size={35} color={"black"}/>
                    <h6 className='nav-text text-center'>Patients</h6>
                </Col>
            </Link>

            <Link to="/Doctors">
                <Col md={12} className="nav-Item ">
                <GiStethoscope size={35} color={"black"}/>
                    <h6 className='nav-text text-center'>Doctors</h6>
                </Col>
            </Link>

            <Link to="/Receptionists">
                <Col md={12} className="nav-Item ">
                <TiPhoneOutline size={35} color={"black"}/>
                    <h6 className='nav-text text-center'>Receptionists</h6>
                </Col>
            </Link>
            <Primarybtn>
                Sign Out
            </Primarybtn>
        </Col>
    );
};

export default Navigation;