import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Profile from './SubComponents/UI/Profile';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaStethoscope, FaBookMedical, FaUser } from "react-icons/fa";
import Staff from './SubComponents/UI/Staff';
import Chatroom from './SubComponents/UI/Chatroom';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import Navigation from './SubComponents/UI/Navigation';
import axios from 'axios';
import moment from 'moment';
import image from "../Components/Assets/default.jpeg";

const socket = io.connect("http://localhost:3001");


const Doctors = () => {

    const room = 1;
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({activeUser: sessionStorage.getItem("activeUser")});
    const [allDoctors, setAllDoctors] = useState([]);
    const date = moment().clone().format("YYYY");

    useEffect(() =>{
        const userLogged = sessionStorage.getItem("activeUser");
        if(userLogged === "" || userLogged === null || userLogged === false){
            navigate('/');
        }
    }, [currentUser])

    useEffect(() => {
        axios.get('http://localhost:8888/MedAPI/getAllDoctors.php')
            .then((res) => {
                let data = res.data;
                setAllDoctors(data);
            })
    }, []);


    

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
                    number={allDoctors.length}
                    icon={<FaStethoscope color={"#2663d4"} size={70} />} />

                <h2 className='allPatients ms-2 mt-4'>All Doctors</h2>

                <Col md={{ span: 12, }} className='staffWrapper '>
                    {
                        allDoctors.map((e) =>( <Staff
                            key= {e.index}
                            img={!e.profileImage ? image : "http://localhost:8888/MedAPI/images/"+e.profileImage}
                            name={e.name +" "+ e.surname}
                            gender={e.gender}
                            age={date - e.dateOfBirth.split(" ").splice(2)}
                            room={e.room}
                            unique={"Consultation Fee: R"+ e.consultFee}
                            mail={e.email}
                            number={e.phoneNumber}
                            role={e.specialisation}
                        />))
                    }
                </Col>
            </Col>

            <Col md={3} className="work" >
                <Profile

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