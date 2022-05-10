import React from 'react';
import {Col} from 'react-bootstrap';
import "../../../index.scss";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import Primarybtn from '../Buttons/PrimaryBtn';


const Navigation = () => {

    return (
        <Col md={1} className="navCon">
            {/* Logo */}
            <Col md={12} className="logoCon"></Col>
            {/* Links */}
            <Link to="/">
                <Col md={12} className="text-center navItem" id="item1">
                    <FaHome color={"white"} size={35} />
                    <h6 className='navText'>Home</h6>
                </Col>
            </Link>

            <Link to="/Patients">
                <Col md={12} className="text-center navItem" >
                    <FaUser color={"white"} size={35} />
                    <h6 className='navText'>Patients</h6>
                </Col>
            </Link>

            <Link to="/Doctors">
                <Col md={12} className="text-center navItem" >
                    <FaStethoscope color={"white"} size={35} />
                    <h6 className='navText'>Doctors</h6>
                </Col>
            </Link>

            <Link to="/Receptionists">
                <Col md={12} className="text-center navItem" >
                    <FaBookMedical color={"white"} size={35} />
                    <h6 className='navText'>Receptionists</h6>
                </Col>
            </Link>

            <Primarybtn>

                <FaDoorOpen size={15} id="logOut"/>
                 Sign Out
            </Primarybtn>
        </Col>
    );
};

export default Navigation;

// import { IconName } from "react-icons/fa";