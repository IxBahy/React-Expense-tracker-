import React from 'react'
import './ExpenseDate.css'
export const ExpenseDate = ({ day, month, year }) => {
    return (
        <>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
        </>
    )
}
