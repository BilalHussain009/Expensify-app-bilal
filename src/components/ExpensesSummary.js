import React from 'react';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import {connect} from 'react-redux';

const ExpensesSummary=({expenseCount,expensesTotal})=>{
    const expenseWord=expenseCount===1?'expense' :'expenses';
    const formatedExpensesTotal=numeral(expensesTotal/100).format('$0,0.00');   
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formatedExpensesTotal}</h1>
        </div>
    )
}
const mapSatateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters);
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:expensesTotal(visibleExpenses)
    }
}
export default connect(mapSatateToProps)(ExpensesSummary);