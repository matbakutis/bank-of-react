import React from'react'

const Credit = (props) => {
    return (
        <div>
            <h3>Amount: {props.amount}</h3>
            <h4>Description: {props.description}</h4>
            <h4>Date: {props.date}</h4>
            <h4>Transaction ID: {props.tId}</h4>
            <hr />
        </div>
    );
};

export default Credit