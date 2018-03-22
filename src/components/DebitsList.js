import React from'react'
import Debit from './Debit'

const DebitsList = (props) => {

    const debitsList = props.debits.map((debit, i)=>{
        return (<Debit key={i} amount={debit.amount} date={debit.date} tId={debit.id} description={debit.description} />)
    });

    return (
        <div>
            {debitsList}
        </div>
    );
};

export default DebitsList