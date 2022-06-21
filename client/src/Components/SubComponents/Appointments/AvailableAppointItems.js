import React from 'react';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaRegCalendarCheck } from "react-icons/fa";
import Modal from '../modals/Modal';

const AvailableAppointItems = (props) => {
    return (
        <tr>
            <td>{props.time}</td>
            <td>{props.Dr}</td>
            <td>{props.special}</td>
            <td className="remove" id={props.id}  >{props.btn} </td>
            <td></td>
        </tr>
    );
};

 // btn = { <td className="remove" onClick={() => {setModalOpen(true)}} ><Primarybtn > <FaRegCalendarCheck size={20} /> Book appointment</Primarybtn> </td>

export default AvailableAppointItems;