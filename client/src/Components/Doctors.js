import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Profile from './SubComponents/UI/Profile';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaStethoscope, FaBookMedical, FaUser } from "react-icons/fa";
import Staff from './SubComponents/UI/Staff';
import Chatroom from './SubComponents/UI/Chatroom';
import io from 'socket.io-client';
import Navigation from './SubComponents/UI/Navigation';
import Doctor from "../Components/Assets/usman-yousaf-pTrhfmj2jDA-unsplash.jpg";
const socket = io.connect("http://localhost:3001");


const Doctors = () => {
    const [username, setUsername] = useState("Leander");
    const room = 1;


    return (
        <>
            <Navigation />
            <Col md={{ span: 8, offset: 1 }} className="workingCon"  >
                <SearchInput>
                    Search Doctor...
                </SearchInput>
                <h2 className='headingTwo'> CDE Program patients</h2>

                <Patientoverview
                    title="Total Staff members"
                    number={"50"}
                    icon={<FaUser color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total Appointments"
                    number="60"
                    icon={<FaBookMedical color={"#2663d4"} size={70} />} />

                <Patientoverview
                    title="Total Doctors"
                    number={"12"}
                    icon={<FaStethoscope color={"#2663d4"} size={70} />} />

                <h2 className='allPatients ms-2 mt-4'>All Doctors</h2>

                <Col md={{ span: 12, }} className='staffWrapper '>

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />

                    <Staff
                        img={Doctor}
                        name="Shooter McGavin"
                        gender="Male"
                        age="45"
                        room="D1"
                        unique="Consult fee: R650"
                        mail="DavidS@gmail.com"
                        number="0768115662"
                        role="Endocronology"
                    />
                </Col>


            </Col>

            <Col md={3} className="work" >
                <Profile
                    Auth={"Cindy Stacy"}
                />
                <Chatroom
                    socket={socket}
                    room={room}

                />
            </Col>

        </>
    );
};

export default Doctors;