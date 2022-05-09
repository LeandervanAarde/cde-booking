import React from 'react';
import { Col} from 'react-bootstrap';
import Primarybtn from './PrimaryBtn';


const ViewModal = ({props, setModalOpen}) => {
    return (
        <>
        <Col md={12} className='backdrop' onClick={ () => setModalOpen(false)}> </Col>
       <Col md={{span:6}} className="Modal">
           <Col md={12}>
            <Col md={2} className="logo" onClick={ () => setModalOpen(false)}> </Col>
          <h2>Header</h2>
           <hr></hr>
                <Col md={{span:3, offset:4}} className="mt-5" onClick={ () => setModalOpen(false)}><Primarybtn > Close</Primarybtn></Col>
           </Col>
       </Col>
       </>
    );
};

export default ViewModal;