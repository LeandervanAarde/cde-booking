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
import axios from 'axios';
import moment from 'moment';
import image from "../Components/Assets/default.jpeg";
const socket = io.connect("http://localhost:3001");

const Receptionists = () => {
    const [receptionists, setReceptionists] = useState([]);
    const Doctors = sessionStorage.getItem("doctors");
    const recep = sessionStorage.getItem("reception");
    const room = 1;
    const date = moment().clone().format("YYYY");
    const joinRoom = () => {
        if (room !== null) {
            socket.emit("joinRoom", room);
        }
    }
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({activeUser: sessionStorage.getItem("activeUser")});

    console.log(recep)

    useEffect(() =>{
        const userLogged = sessionStorage.getItem("activeUser");
        if(userLogged === "" || userLogged === null || userLogged === false){
            navigate('/');
        }
    }, [currentUser]);

    useEffect(() => {
        axios.get('http://localhost:8888/MedAPI/getAllReceptionists.php')
            .then((res) => {
                let data = res.data;
             setReceptionists(data);
            })
    }, []);

    // const map = 
    //     Receptionists.map((e) =>(<Staff
    //     img={!e.profileImage ? image : "http://localhost:8888/MedAPI/images/"+e.profileImage}
    //     name={e.name +" "+ e.surname}
    //     gender={e.gender}
    //     age={date - e.dateOfBirth.split(" ").splice(2)}
    //     room={e.room}
    //     unique={"Consultation Fee: R"+ e.consultFee}
    //     mail={e.email}
    //     number={e.phoneNumber}
    //     role={e.specialisation}
    // />));

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

                    { receptionists.map((e) =>(<Staff
                        key={e.id}
                      img={!e.ProfileImage ? image : "http://localhost:8888/MedAPI/images/"+ e.ProfileImage}
                      name={e.name +" "+ e.surname}
                      gender={e.gender}
                      age={date - e.dateOfBirth.split(" ").splice(2)}
                      room={e.Status}
                      unique={"Monthly Income:"+ e.monthInc}
                      mail={e.email}
                      number={e.phoneNumber}
                      role={e.rank}
                      
                    />))}
                   

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