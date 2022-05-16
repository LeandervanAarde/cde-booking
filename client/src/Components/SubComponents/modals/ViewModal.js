import React from 'react';
import { Col} from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';


const ViewModal = ({props, setModalOpen}) => {
    return (
        <>
        <Col md={12} className='backdrop' onClick={ () => setModalOpen(false)}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>
            <Col md={2} className="logo" onClick={ () => setModalOpen(false)}> </Col>
          <h2>Patient Name Information</h2>
           <hr></hr>
            <Col md={12} className="con">
                <Col md={{span: 2, offset: 5}} className="patPhoto"></Col>
                <Col md={{span: 12}} className="Name">
                     <h2>Person Name</h2>
                     <p><strong>Age</strong></p>
                     <p><strong>Birth Date</strong></p>
                     <p><strong>Condition</strong></p>
                     <p><strong>Something</strong></p>
                     <p><strong>Last Appointment</strong></p>
                </Col>
          
            </Col>

                <Col md={{span:4, offset:4}} className="mt-5" onClick={ () => setModalOpen(false)}><Primarybtn > Close</Primarybtn></Col>
           </Col>
       </Col>
       </>
    );
};

export default ViewModal;