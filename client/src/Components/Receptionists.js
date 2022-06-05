import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Profile from './SubComponents/UI/Profile';
import Chatroom from './SubComponents/UI/Chatroom';
import io from 'socket.io-client';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaTty, FaBookMedical, FaUser } from "react-icons/fa";
import Staff from './SubComponents/UI/Staff';
import Navigation from './SubComponents/UI/Navigation';
import Receptionist from "../Components/Assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
import { useNavigate } from 'react-router-dom';
const socket = io.connect("http://localhost:3001");

const Receptionists = () => {
    const [username, setUsername] = useState("Leander");
    const room = 1;
    const joinRoom = () => {
        if (room !== null) {
            socket.emit("joinRoom", room);
        }
    }

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({activeUser: sessionStorage.getItem("activeUser")});

    useEffect(() =>{
        const userLogged = sessionStorage.getItem("activeUser");
        if(userLogged === "" || userLogged === null || userLogged === false){
            navigate('/');
        }
    }, [currentUser])

    return (
        <>
            <Navigation />
            <Col md={{ span: 8, offset: 1 }} className="workingCon">
                <SearchInput>
                    Search Receptionists...
                </SearchInput>
                <h2 className='headingTwo ms-2'> RECEPTIONISTS </h2>

                <Patientoverview
                    title="Total Staff members"
                    number={"50"}
                    icon={<FaUser color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total Appointments"
                    number="60"
                    icon={<FaBookMedical color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total Receptionists"
                    number={"16"}
                    icon={<FaTty color={"#2663d4"} size={70} />} />

                <h2 className='allPatients ms-2 mt-4'>All Receptionists</h2>

                <Col md={{ span: 12 }} className='staffWrapper'>
                    <Staff
                        img={Receptionist}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="Active"
                        unique="Monthly In: R24 000"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Receptionist"
                    />

                    <Staff
                        img={Receptionist}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="Active"
                        unique="Monthly In: R24 000"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Receptionist"
                    />

                    <Staff
                        img={Receptionist}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="Active"
                        unique="Monthly In: R24 000"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Head Receptionist"
                    />

                    <Staff
                        img={Receptionist}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="Active"
                        unique="Monthly In: R24 000"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Receptionist"
                    />

                </Col>
            </Col>

            <Col md={3} className="work">
                <Profile
                    Auth={"Cindy Stacy"}
                />
                <Chatroom
                    socket={socket}
                    room={room}
                    onClick={joinRoom}
                />
            </Col>
        </>
    );
};

export default Receptionists;