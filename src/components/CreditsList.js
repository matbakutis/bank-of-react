import React from'react'
import Credit from './Credit'

const CreditsList = (props) => {

    const creditsList = props.credits.map((credit, i)=>{
        return (<Credit key={i} amount={credit.amount} date={credit.date} tId={credit.id} description={credit.description} />)
    });

    return (
        <div>
            {creditsList}
        </div>
    );
};

export default CreditsList