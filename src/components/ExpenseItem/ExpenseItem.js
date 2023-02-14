import React from 'react'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import { Card } from "../Card/Card";
export const ExpenseItem = ({ title, price, date }) => {
    const language = window.navigator.language
    const day = date.toLocaleString(language, { day: '2-digit' })
    const month = date.toLocaleString(language, { month: 'long' })
    const year = date.getFullYear()
    return (
        <>
            <li>
                <Card className='expense-item '>
                    <ExpenseDate day={day} month={month} year={year} />
                    <div className='expense-item__description '>
                        <h2>{title}</h2>
                        <div className='expense-item__price'>{price}</div>
                    </div>

                </Card>
            </li>
        </>
    )
}
