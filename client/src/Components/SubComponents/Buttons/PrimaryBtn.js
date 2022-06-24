import React from 'react';


const Primarybtn = (props) => {
    return (
       <div className={'btn'} id={props.id} onClick={props.function} onKeyPress={props.keyPress}>
           <p id={props.id}>{props.children}</p>
       </div>
    );
};

export default Primarybtn;