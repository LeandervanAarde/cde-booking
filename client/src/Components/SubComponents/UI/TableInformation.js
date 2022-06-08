import React from 'react';
import { Col} from 'react-bootstrap';
import axios from 'axios';
const TableInformation = (props) => {

    const removeAppointment = (e) =>{
        e.currentTarget.parentElement.remove();
    }

    return (
       <Col md={12} className="WAppointmentCon">
           <Col md={12} className="Header"> <h4 className='text-center'>{props.children}</h4></Col>
           <Col md={12} className="Wbody">
           <table id='upComingAppointments'>
                    <thead>
                        <tr>
                            <th>{props.headerOne}</th>
                            <th>{props.headerTwo}</th>
                            <th >{props.headerThree}</th>
                            <th >{props.headerFour}</th>
                        </tr>
                    </thead>
                    <tbody>
                            {props.row}
                            
                    </tbody>
                </table>
           </Col>
       </Col>
    );
};

export default TableInformation;