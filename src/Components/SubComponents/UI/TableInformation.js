import React from 'react';
import { Col} from 'react-bootstrap';
const TableInformation = (props) => {

    const removeAppointment = (e) =>{
        e.currentTarget.parentElement.remove();
    }

    return (
       <Col md={12} className="WAppointmentCon">
           <Col md={12} className="Header"> <h2 className='text-center'>{props.children}</h2></Col>
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
                        <tr className="dataRow">
                            <td>{props.Information1}</td>
                            <td>{props.Information2}</td>
                            <td>{props.Information3}</td>
                            <td className="remove" onClick={removeAppointment}> {props.tIcon} {props.btnTxt} </td>
                        </tr>
                    </tbody>
                </table>
           </Col>
       </Col>
    );
};

export default TableInformation;