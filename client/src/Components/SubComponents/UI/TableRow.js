import React from 'react';

const TableRow = (props) => {
    return (
        <tr className="dataRow">
            <td>{props.Information1}</td>
            <td>{props.Information2}</td>
            <td>{props.Information3}</td>
            <td className="remove" id={props.id} onClick={props.function}> {props.tIcon} {props.btnTxt} </td>
        </tr>
    );
};

export default TableRow;