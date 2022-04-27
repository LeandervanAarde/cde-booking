import React from 'react';
import bootstrap from 'bootstrap';
import { Col } from 'react-bootstrap';
import { BiSearchAlt } from "react-icons/bi";
//BiSearchAlt
const Input = (props) => {
    // const today = new Date;
    // const current = today;
    // const thing = current.toString()
    // const newThiig = thing.split(" ")
    // const FinalThing = newThiig.splice(1,3);
    // const DisplayThing = FinalThing.join(' ');
    // console.log(DisplayThing);

    return (
       <Col md={10} className="input">
       <input placeholder={props.children}/> 
        <div className='submit'>
            <BiSearchAlt size={35} color={"white"} className='icon mt-1 ms-2'/>
            <p className='search'>Search</p>
        </div>
       </Col>
    );
};

export default Input;