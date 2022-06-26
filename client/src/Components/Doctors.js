import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
import SearchInput from './SubComponents/Inputs/SearchInput';
import Profile from './SubComponents/UI/Profile';
import Patientoverview from './SubComponents/UI/Patientoverview';
import { FaStethoscope, FaBookMedical, FaUser, FaTrashAlt } from "react-icons/fa";
import Staff from './SubComponents/UI/Staff';
import Chatroom from './SubComponents/UI/Chatroom';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import Navigation from './SubComponents/UI/Navigation';
import Primarybtn from './SubComponents/Buttons/PrimaryBtn';
import axios from 'axios';
import moment from 'moment';
import image from "../Components/Assets/default.jpeg";
import { ConfirmationModal } from './SubComponents/modals/ConfirmationModal';
import { FaTimesCircle, FaUserMd } from "react-icons/fa";
import { DoctorEditModal } from './SubComponents/modals/DoctorEditModal';


const socket = io.connect("http://localhost:3001");

const Doctors = () => {
    const room = 1;
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ activeUser: sessionStorage.getItem("activeUser") });
    const [allDoctors, setAllDoctors] = useState([]);
    const date = moment().clone().format("YYYY");
    const [click, setClick] = useState({ counter: 1 });
    const [modalOpen, setModalOpen] = useState(false);
  


    useEffect(() => {
        const userLogged = sessionStorage.getItem("activeUser");
        if (userLogged === "" || userLogged === null || userLogged === false) {
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

    const deleteStaff = (e) => {
        setClick((prev) => ({ ...prev, counter: prev.counter + 1 }));
        console.log(click)
        if (click.counter == 1) {
            e.target.innerText = "Delete?"

        } else if (click.counter == 2) {
            let member = e.target.id;
            console.log(member)
            setModalOpen(true)
            axios.post('http://localhost:8888/MedAPI/deleteDoctors.php', member)
                .then(res => {
                    let data = res.data;
                    console.log(data);
                    setModalOpen(true)
                })
                .catch(err => {
                    console.log(err);
                    alert("There was an issue deleting the Doctor")
                })
        }
    }

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
                        allDoctors.map((e) => (<Staff
                            id={e.id}
                            key={e.index}
                            img={!e.profileImage ? image : "http://localhost:8888/MedAPI/images/" + e.profileImage}
                            name={e.name + " " + e.surname}
                            gender={e.gender}
                            age={date - e.dateOfBirth.split(" ").splice(2)}
                            room={e.room}
                            unique={"Consultation Fee: R" + e.consultFee}
                            mail={e.email}
                            number={e.phoneNumber}
                            role={e.specialisation}
                            btn={<Col md={{ span: 6, offset: 3 }} className="button" id={e.id}><Primarybtn function={deleteStaff} id={e.id} > <FaTrashAlt color={"white"} size={13} /> Remove</Primarybtn></Col>}
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


            {modalOpen &&
                <ConfirmationModal
                    content={"Doctor has been removed from the system"}
                    button={<Primarybtn
                    function={() => { return setModalOpen(false) }}><FaTimesCircle size={25} /> Close  </Primarybtn>} />}
        </>
    );
};

export default Doctors;