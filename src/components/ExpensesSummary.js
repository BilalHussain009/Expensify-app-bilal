import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  let formattedExpensesTotal;
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  if(expensesTotal>0){
    formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  }
  else{
     formattedExpensesTotal = 0
  }
  
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
      <div className='page-header__actions'>
        <Link to='/create' className='button'>Add Expense</Link>
      </div>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
