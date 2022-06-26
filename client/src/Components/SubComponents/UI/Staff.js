import React, { useState, useEffect } from 'react';
import Primarybtn from '../Buttons/PrimaryBtn';
import { Col } from 'react-bootstrap';
import { FaCalendarAlt, FaDoorClosed, FaUser, FaRegEnvelope, FaTty, FaBookMedical, FaTrashAlt } from "react-icons/fa";
import { FaTimesCircle, FaUserMd } from "react-icons/fa";
import { DoctorEditModal } from '../modals/DoctorEditModal';
// import Primarybtn from './PrimaryBtn';



const Staff = (props) => {
    const [role, setRole] = useState();
    const [click, setClick] = useState({ counter: 1 });
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem("UserRank") === "Head Receptionist") {
            setRole(true)
        } else {
            setRole(false)
        }
    }, [])

    return (
        <>
            <div className='staffInfo' id={props.id}>
                <div className='staffPhoto'><img src={props.img} /></div>
                <h4 className='docName' ref={props.ref} id={props.name}>{props.name}</h4>
                <Col md={4} className="doctorinfo"><FaUser color={"#2663d4"} size={20} /><h6>{props.gender}</h6></Col>
                <Col md={4} className="doctorinfo"><FaCalendarAlt color={"#2663d4"} size={20} /><h6>{props.age}</h6></Col>
                <Col md={4} className="doctorinfo"><FaDoorClosed color={"#2663d4"} size={20} /><h6>{props.room}</h6></Col>
                <p>{props.unique}</p>
                <Col md={12} className="doctordetail"><FaRegEnvelope className='Info' color={"#2663d4"} size={20} /><p>{props.mail}</p></Col>
                <Col md={12} className="doctordetail"><FaTty className='Info' color={"#2663d4"} size={20} /><p>{props.number}</p></Col>
                <Col md={12} className="doctordetail"><FaBookMedical className='Info' color={"#2663d4"} size={20} /><p>{props.role}</p></Col>

                {
                    role ?
                        <>
                            {props.btn}
                            <Col md={{ span: 6, offset: 3 }} className="mt-3 edit" id={props.id}><Primarybtn function={() => {return setEdit(true)}} id={props.id} > <FaUserMd color={"white"} size={13} /> Edit </Primarybtn></Col>
                        </>
                        :
                        <></>
                }
            </div>
            {
                edit && <DoctorEditModal
                {...props}
                closeButt={() =>{ return setEdit(false)}}
                func={() =>{ return setEdit(false)}}
                />
            }
        </>
    );
};

export default Staff;
