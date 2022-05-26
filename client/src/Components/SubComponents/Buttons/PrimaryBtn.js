import React from 'react';


const Primarybtn = (props) => {
    return (
       <div className='btn' id={props.id}>
           <p>{props.children}</p>
       </div>
    );
};

export default Primarybtn;