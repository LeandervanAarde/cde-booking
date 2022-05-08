import React from 'react';
import { Col} from 'react-bootstrap';
import Primarybtn from './PrimaryBtn';
import { FaEye } from "react-icons/fa";


const People = (props) => {
    return (

        <>
   
          <Col md={12} className='infoCon'>
          <Col md={1} className="text-center picture"></Col>
                     <Col md={2} className='text-center id'><p>{props.id}</p></Col>
                     <Col md={2} className='text-center name'><p>{props.name}</p></Col>
                     <Col md={2} className='text-center title'><p>{props.children}</p></Col>
                     <Col md={1} className='text-center age'><p>{props.age}</p></Col>
                     <Col md={2} className='text-center gender'><p>{props.gender}</p></Col>
                     <Col md={2} className='viewBtn' onClick = { props.function} ><Primarybtn><FaEye/> View profile </Primarybtn></Col>

          </Col>

                   
              
   

      </>
    );
};

export default People;




//<table id='information'>
//<thead>
//    <tr className='tr'>
//        {/* <th className='image'><Col md={11} className="picture"></Col></th>
//        <th className='id'>{props.id}</th> */}
//        <th className='name'>{props.name}</th>
//        <th className='title'>{props.children}</th>
//        <th className='age'>{props.age}</th>
//        <th className='age'>{props.gender}</th>
//        <th className='button'><Primarybtn><FaEye/> View profile </Primarybtn></th>
//    </tr>
//</thead>
//</table>