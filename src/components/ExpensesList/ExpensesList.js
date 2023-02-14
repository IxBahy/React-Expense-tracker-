import React from 'react'
import { ExpenseItem } from '../ExpenseItem/ExpenseItem'
import './ExpensesList.css'
export const ExpensesList = ({ expenses }) => {
    if (expenses.length === 0) {
        return <h2 className='expenses-list__fallback'> no expenses were found</h2>
    } else {
        return (
            <>
                <ul className='expenses-list'>
                    {expenses.map(({ title, amount, date }, index) =>
                        <ExpenseItem key={index} title={title} price={amount} date={date} />
                    )}
                </ul>
            </>
        )
    }
}
