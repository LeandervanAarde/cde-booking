import React, {useState} from 'react';
import Primarybtn from '../Buttons/PrimaryBtn';
import { FaRegCalendarCheck } from "react-icons/fa";
import Modal from '../modals/Modal';
import { EditAppointment } from '../modals/EditAppointment';
import { ConfirmationModal } from '../modals/ConfirmationModal';
import axios from "axios";

const AvailableAppointItems = (props) => {
    const [editModal, setEditModal] = useState(false);
    const [id, setID] = useState();
    const [click, setClick] = useState({ counter: 1 });


    const testing = (e) =>{
        let value =  e.target.id;
        console.log(value);
        setEditModal(true);
        console.log(e.target);
        console.log(props.date);
        setID(value);
    }

    const deletApp = (e) =>{
        let value =  e.target.id;
        console.log(e.target.id)
        setClick((prev) => ({ ...prev, counter: prev.counter + 1 }));
        console.log(click)
        if (click.counter == 1) {
            let change = e.target.innerHTML = "Confirm?";
        } else if (click.counter == 2) {
            let app = e.target.id;
            console.log(app)
            axios.post('http://localhost:8888/MedAPI/deleteAppointment.php', app)
                .then(res => {
                    let data = res.data;
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                    alert("There was an issue deleting the Appointment");
                })
        }
    }



    return (
        <>
            <tr id={props.id}>
                <td>{props.time} - {props.timeEnd}</td>
                <td>{props.Dr}</td>
                <td>{props.special}</td>
                <td className="remove" id={props.id}  >{props.btn} </td>
                <td className="remove" id={props.id} onClick={testing} > {props.edit}</td>
                <td className="remove del" id={props.id} onClick={deletApp} > {props.delete}</td>
            </tr>
           
            {editModal &&
                <EditAppointment
                    func={() => setEditModal(false)}
                    {...props}
                    day = {props.date.split(' ').splice(0,1)}
                    month = {props.date.split(' ').splice(1,1)}
                    year ={props.date.split(' ').splice(2)}
                    id={id}
                />
            }  
        </>

    );
};

export default AvailableAppointItems;