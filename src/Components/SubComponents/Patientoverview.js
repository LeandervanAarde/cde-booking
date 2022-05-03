import React from 'react';
// import { Col } from 'react-bootstrap';

const Patientoverview = (props) => {
    return (
       <div className='infoContainer mt-3'>
           <div className='iconCon'>
             {props.icon}
           </div>
           <h4 className='text-center mt-2'>{props.title}</h4>
           <h2 className='text-center mt-4'>{props.number}</h2>
       </div>
    );
};

export default Patientoverview;