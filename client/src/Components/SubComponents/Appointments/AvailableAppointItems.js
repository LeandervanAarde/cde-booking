import React, {useRef, useState} from 'react';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaRegCalendarCheck } from "react-icons/fa";
import Modal from '../modals/Modal';
import { EditAppointment } from '../modals/EditAppointment';

const AvailableAppointItems = (props) => {
    const [editModal, setEditModal] = useState(false);
    const Day = useRef(props.date.split(' ').splice(0,1));

    const testing = (e) =>{
        let value =  e.target.id;
       console.log(value)
        setEditModal(true)
        console.log(e.target)
        console.log(props.date.split(' ').splice(2))
    }

    return (
        <>

            <tr id={props.date}>
             
                <td>{props.time} - {props.timeEnd}</td>
                <td>{props.Dr}</td>
                <td>{props.special}</td>
                <td className="remove" id={props.id}  >{props.btn} </td>
                <td className="remove" id={props.id} onClick={testing} >{props.edit} </td>
                <td></td>
            </tr>
           
            {editModal &&
                <EditAppointment
                    func={() => setEditModal(false)}
                    day = {props.date}
                />
            }
        </>

    );


};

// btn = { <td className="remove" onClick={() => {setModalOpen(true)}} ><Primarybtn > <FaRegCalendarCheck size={20} /> Book appointment</Primarybtn> </td>

export default AvailableAppointItems;