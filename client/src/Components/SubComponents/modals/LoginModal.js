import React from 'react';
import { Col} from 'react-bootstrap';
import Primarybtn from '../Buttons/PrimaryBtn';

const LoginModal = (setOpen, props) => {
    return (
        <>
        <Col md={12} className='backdrop' onClick={ () => (setOpen(false), props.function)}> </Col>
       <Col md={{span:6}} className="ModalBod" >
          <h4  onClick={ () => setOpen(false)}>Username or password is incorrect, please try again.</h4>
       </Col>
       </>
    );
};

export default LoginModal;