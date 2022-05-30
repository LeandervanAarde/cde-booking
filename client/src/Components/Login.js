import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Primarybtn from './SubComponents/Buttons/PrimaryBtn';
import { FaKey } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <>
            <Col md={7} className='background'></Col>

            <Col md={5} className='formCon'>
                <Col md={{ span: 6, offset: 3 }} className="logoBg"></Col>
                <h1 className='logInTxt'><strong>LOG IN</strong></h1>

                <form>

                    <input name="RecepID" type="username" className='RecepID' />
                    <label className='recepLabel'>Receptionist ID</label>
                    <br></br>

                    <input name="Password" type="password" className='Pass' />
                    <label className='passLabel'>Password</label>
                </form>

                <Col md={{ span: 8, offset: 2 }} className="buttonCon"><NavLink to="/"><Primarybtn ><FaKey className='key' color='white' size={25} /><strong>LOG IN</strong></Primarybtn></NavLink>  </Col>
            </Col>
        </>
    );
};

export default Login;