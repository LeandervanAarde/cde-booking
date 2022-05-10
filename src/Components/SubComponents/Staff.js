import React from 'react';
import Primarybtn from './PrimaryBtn';

// import Primarybtn from './PrimaryBtn';



const Staff = (props) => {
  return (

    <div className="staffInfo ">
      <div>
        <div className='staffPhoto'></div>
        <p className='memberName'>Shooter McGavin</p>
        <div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className='name info'>{props.name} <span className='content'>{props.nameContent}</span></p>
        <p className='dateOfBirth info'>{props.Age} <span className='content'>{props.ageContent}</span></p>
        <p className='Gender info'>{props.sex} <span className='content'>{props.sexContent}</span></p>
        <p className='phone info'>{props.cell} <span className='content'>{props.cellContent}</span></p>
        <p className='email info'>{props.mail} <span className='content'>{props.mailContent}</span></p>
        <p className='Room info'>{props.unique} <span className='content'>{props.uniqueContent}</span></p>
        <p className='title info'>{props.title} <span className='content'>{props.titleContent}</span></p>
        <p className='fee info'>{props.pay} <span className='content'>{props.payContent}</span></p>
        <div className='removebtn'><Primarybtn id="removeStaff">- Remove</Primarybtn></div>
      </div>

    </div>
  );
};

export default Staff;