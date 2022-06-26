import React, { useState } from 'react';
import axios from "axios";
const TableRow = (props) => {
    const [click, setClick] = useState({ counter: 1 });

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
            console.log(app)
            axios.post('http://localhost:8888/MedAPI/cancelAppointment.php', app)
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
        <tr className="dataRow" >
            <td>{props.Information1}</td>
            <td>{props.Information2}</td>
            <td>{props.Information3}</td>
            <td className="remove" id={props.id} onClick={deletApp}> {props.tIcon} {props.btnTxt} </td>
        </tr>
    );
};

export default TableRow;