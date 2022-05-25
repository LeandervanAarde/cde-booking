import React, { useState } from 'react';
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
const socket = io.connect("http://localhost:3001");

const Receptionists = () => {
    const [username, setUsername] = useState("Leander");
    const room = 1;
    const joinRoom = () => {
        if (room !== null) {
            socket.emit("joinRoom", room);
        }
    }

    return (
        <>
        <Navigation/>
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
                        name="name:"
                        nameContent="Abby Wiseman"
                        Age="Age:"
                        ageContent="26"
                        sex="Sex:"
                        sexContent="Female"
                        cell="Cell:"
                        cellContent="060 775 6643"
                        mail="Mail:"
                        mailContent="Abby.Recep@CDE.com"
                        unique="Status"
                        uniqueContent="Registered"
                        title="Title"
                        titleContent="Head Receptionist"
                        pay="Monthly Income"
                        payContent="R 18 000.00"
                    />

                    <Staff
                        name="name:"
                        nameContent="Graham van Staden"
                        Age="Age:"
                        ageContent="40"
                        sex="Sex:"
                        sexContent="Male"
                        cell="Cell:"
                        cellContent="087 658 0172"
                        mail="Mail:"
                        mailContent="Graham.Recep@CDE.com"
                        unique="Status"
                        uniqueContent="Unregistered"
                        title="Title"
                        titleContent=" Receptionist"
                        pay="Monthly Income"
                        payContent="R 15 000.00"
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