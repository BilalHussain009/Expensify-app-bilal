import React from 'react';

const ExpenseListitem=({description,amount,createdAt}={})=>{//destructured the props
    return(
        <div>
        <h3>{description}</h3>
        <p>{amount}-{createdAt}</p>
        </div>
    )
}
export default ExpenseListitem;