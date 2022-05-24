import React from 'react';
import { Col } from 'react-bootstrap';
import "../../../index.scss";
import { NavLink, useLocation  } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import Primarybtn from '../Buttons/PrimaryBtn';


const Navigation = () => {
   
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <Col md={1} className="navCon">
            {/* Logo */}
            <Col md={12} className="logoCon"></Col>
            {/* Links */}
            <NavLink to="/" activeClassName="active">
                <Col md={{span: 9, offset:1}} className={splitLocation[1] === "" ? "active" : "navItem"} id="item1" >
                    <FaHome color={"white"} size={25} />
                    <p className='navText'>Home</p>
                </Col>
            </NavLink>

            <NavLink to="/Patients" className={'text'}>
                <Col md={{span: 9, offset:1}} className={splitLocation[1] === "Patients" ? "active" : "navItem"}>
                    <FaUser color={"white"} size={25} />
                    <p className='navText'>Patients</p>
                </Col>
            </NavLink>

            <NavLink to="/Doctors" className={'text'}>
                <Col md={{span: 9, offset:1}} className={splitLocation[1] === "Doctors" ? "active" : "navItem"} >
                    <FaStethoscope color={"white"} size={25} />
                    <p className='navText'>Doctors</p>
                </Col>
            </NavLink>

            <NavLink to="/Receptionists" className={'text'}>
                <Col md={{span: 9, offset:1}} className={splitLocation[1] === "Receptionists" ? "active" : "navItem"} id="last" >
                    <FaBookMedical color={"white"} size={25} />
                    <p className='navText'>Recept</p>
                </Col>
            </NavLink>

            <Primarybtn >
                <FaDoorOpen size={15} id="logOut" />
                Sign Out
            </Primarybtn>
        </Col>
    );
};

export default Navigation;

