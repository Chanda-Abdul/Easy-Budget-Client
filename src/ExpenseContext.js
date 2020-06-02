import React from 'react'

const ExpenseContext = React.createContext({
    expenses: [],
    expenseUpdate: () => {},
})

export default ExpenseContext