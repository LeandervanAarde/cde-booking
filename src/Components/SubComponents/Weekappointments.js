import React from 'react';
import { Col} from 'react-bootstrap';
const Weekappointments = (props) => {

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
                            <th>Date</th>
                            <th>Patient</th>
                            <th >Doctor</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. R van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>
                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. B van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>
                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. C van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. G van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow"> 
                            <td>09 May 2022</td>
                            <td>Mr. O van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. L van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. L van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. L van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. L van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>

                        <tr className="dataRow">
                            <td>09 May 2022</td>
                            <td>Mr. L van Aarde</td>
                            <td>Dr. G Makan</td>
                            <td className="remove" onClick={removeAppointment}> -REMOVE</td>
                        </tr>
                    </tbody>
                </table>
           </Col>
       </Col>
    );
};

export default Weekappointments;