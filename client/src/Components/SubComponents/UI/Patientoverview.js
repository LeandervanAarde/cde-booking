import React from 'react';
// import { Col } from 'react-bootstrap';

const Patientoverview = (props) => {
    return (
       <div className='infoContainer mt-3 text-center'>
             {props.icon}
           <h4 className='text-center mt-4'><strong>{props.title}</strong></h4>
           <h2 className='text-center mt-1'>{props.number}</h2>
       </div>
    );
};

export default Patientoverview;