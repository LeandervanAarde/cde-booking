import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Col } from 'react-bootstrap';
import "../index.scss";
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
import Addbutton from './SubComponents/Buttons/Addbutton';
import { ConfirmationModal } from './SubComponents/modals/ConfirmationModal';
import { FaTimesCircle, FaUserMd } from "react-icons/fa";
import { DoctorEditModal } from './SubComponents/modals/DoctorEditModal';
import AddDoctor from './SubComponents/UI/addDoctor/AddDoctor';
import { HeadRecepModal } from './SubComponents/modals/HeadRecepModal';


const socket = io.connect("http://localhost:3001");

const Doctors = () => {
    const room = 1;
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({ activeUser: sessionStorage.getItem("activeUser") });
    const [allDoctors, setAllDoctors] = useState([]);
    const [headModal, setHeadModal] = useState(false);
    const date = moment().clone().format("YYYY");
    const [click, setClick] = useState({ counter: 1 });
    const [clicked, setClicked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [role, setRole] = useState(false);
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState(false)

    useEffect(() => {
        const userLogged = sessionStorage.getItem("activeUser");
        if (userLogged === "" || userLogged === null || userLogged === false) {
            navigate('/');
        }
    }, [currentUser])

    useEffect(() => {
        const useRole = sessionStorage.getItem("UserRank");
        if (useRole === "Head Receptionist") {
            setRole(true);
        } else {
            setRole(false);
        }
    })

    useEffect(() => {
        axios.get('http://localhost:8888/MedAPI/getAllDoctors.php')
            .then((res) => {
                let data = res.data;
                setAllDoctors(data);
            })
    }, []);

    const deleteStaff = (e) => {
        setClick((prev) => ({ ...prev, counter: prev.counter + 1 }));
        if (click.counter == 1) {
            e.target.innerText = "Delete?"

        } else if (click.counter == 2) {
            let member = e.target.id;
            setModalOpen(true)
            axios.post('http://localhost:8888/MedAPI/deleteDoctors.php', member)
                .then(res => {
                    let data = res.data;
                    setModalOpen(true)
                })
                .catch(err => {
                    console.log(err);
                    alert("There was an issue deleting the Doctor")
                })
        }
    }

    const confirmHead = () => {
        if (role === false) {
            setHeadModal(true);
        }
    }

    // //() => {
    //     return setClicked(true);
    // }

    const confirmUse = () => {
        let mail = email.current.value;
        let pass = password.current.value;
        let arr = {
            em: mail.trim(),
            pas: pass.trim()
        }
        if (mail === "" || pass === "") {
            setHeadModal(false);
        } else {
            axios.post("http://localhost:8888/MedAPI/confirmHead.php", arr)
                .then(res => {
                    let data = res.data;
                    console.log(data);

                    if (data === true) {
                        setHeadModal(false);
                        setClicked(true)
                    } else {
                        setHeadModal(true);
                        document.getElementById("message").innerText = "Wrong details provided, try again.";

                    }

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <>
            <Navigation />
            <Col md={{ span: 8, offset: 1 }} className="workingCon"  >

                <h2 className='headingTwo'> CDE Program Doctors</h2>

                <Patientoverview
                    title="Total Staff members"
                    number={"50"}
                    icon={<FaUser color={"#2663d4"} size={56} />} />

                <Patientoverview
                    title="Total Appointments"
                    number="60"
                    icon={<FaBookMedical color={"#2663d4"} size={56} />} />

                <Patientoverview
                    title="Total Doctors"
                    number={allDoctors.length}
                    icon={<FaStethoscope color={"#2663d4"} size={56} />} />

                <h2 className='allPatients ms-2 mt-4'>All Doctors</h2>

                <Col md={{ span: 12, }} className='staffWrapper '>
                    <Col md={{ span: 2, offset: 10 }} className="addPatient mb-5">
                        {
                            !role ?
                                <Addbutton
                                    function={confirmHead} />
                                :
                                <Addbutton
                                    function={() => {
                                        return setClicked(true);
                                    }}
                                />
                        }


                        <p className='buttonText'>Add Doctor</p>
                    </Col>
                    {
                        !clicked
                            ?
                            allDoctors.map((e) => (<Staff
                                id={e.id}
                                key={e.index}
                                img={!e.profileImage ? image : "http://localhost:8888/MedAPI/Images/" + e.profileImage}
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
                            :
                            <AddDoctor
                                cancel={() => { return setClicked(false) }}
                            />
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

            {
                headModal && <HeadRecepModal
                    cancel={() => { return setHeadModal(false) }}
                    mail={email}
                    password={password}
                    confirm={confirmUse}
                    message={"Enter Head receptionist details"}
                />
            }


            {modalOpen &&
                <ConfirmationModal
                    content={"Doctor has been removed from the system"}
                    button={<Primarybtn
                        function={() => { return setModalOpen(false) }}><FaTimesCircle size={25} /> Close  </Primarybtn>} />}
        </>
    );
};

export default Doctors;