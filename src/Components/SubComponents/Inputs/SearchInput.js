import React from 'react';
import { Col } from 'react-bootstrap';
import "../../../index.scss";
import { FaSearch } from "react-icons/fa";
//FaSearch
const SearchInput = (props) => {
    return (
        <Col md={12} className="inputCon">
<input className='input' placeholder={props.children} />
<div className='submit'>
    <p className='search'>Search</p>
    <FaSearch size={25} color={"white"} className='icon mt-1 ms-2' />
</div>
        </Col>
    );
};

export default SearchInput;

