import React, { useRef, useState } from 'react';
import axios from 'axios';
import {  Col } from 'react-bootstrap';
import Primarybtn from './SubComponents/Buttons/PrimaryBtn';
import { FaKey } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    // const { pathname } = location;
    // const splitLocation = pathname.split("/");

    //This is going to redirect us after we have logged in
    const navigate = useNavigate();

    //State to capture the user details
    const [userInputs, setUserInputs] = useState({
        user:'',
        password: ''
    });
    const userName= useRef();
    const password = useRef();

    const captureInputs = () =>{
        let name = userName.current.value;
        let pass = password.current.value;

        setUserInputs({...userInputs, user: name, password:pass})
  
    };


    const getData = (e) =>{
        console.log(userInputs);
        axios.post('http://localhost:8888/MedAPI/userLogin.php', userInputs)
        .then((res) =>{
            console.log(res);
            if(res.data === true){
                sessionStorage.setItem("activeUser", userInputs.user);
                
                navigate("/");
            } else{
                console.log("Data is not retrieved");
                //Give an error message that wil be a modal.
            }
        })

        .catch((err) =>{
            console.log(err)
        })
    }

    return (
        <>
            <Col md={7} className='background'></Col>

            <Col md={5} className='formCon'>
                <Col md={{ span: 6, offset: 3 }} className="logoBg"></Col>
                <h1 className='logInTxt'><strong>LOG IN</strong></h1>

                <form>

                    <input name="RecepID" onChange={captureInputs} ref={userName} type="email" className='RecepID' />
                    <label className='recepLabel'>Receptionist ID</label>
                    <br></br>

                    <input name="Password" onChange={captureInputs} ref={password} type="password" className='Pass' />
                    <label className='passLabel'>Password</label>
                </form>

                <Col md={{ span: 8, offset: 2 }} className="buttonCon"><Primarybtn function={getData} ><FaKey className='key' color='white' size={25} /><strong>LOG IN</strong></Primarybtn></Col>
            </Col>
        </>
    );
};

export default Login;