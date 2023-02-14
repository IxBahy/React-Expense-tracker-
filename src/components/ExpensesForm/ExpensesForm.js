import React, { useState } from 'react'
import './ExpensesForm.css'
export const ExpensesForm = ({ onSubmitHandler, ShowFormButtonHandler }) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setDate(new Date(e.target.value))
    }
    const addExpenseHandler = (e) => {
        e.preventDefault()
        const expense = {
            id: Math.random(), title: title, amount: +amount, date: date
        }
        onSubmitHandler(expense);
        setDate('')
        setAmount('')
        setTitle('')
        ShowFormButtonHandler()

    }
    return (
        <>
            <form>
                <div >
                    <div className='new-expense__controls'>
                        <label>Title</label>
                        <input className='control_input' type="text" value={title} onChange={titleChangeHandler} required />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Amount</label>
                        <input className='control_input' type="number" min='1' step='0.1' value={amount} onChange={amountChangeHandler} required />
                    </div>
                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input className='control_input' type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} required />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={ShowFormButtonHandler}>cancle</button>
                    <button onClick={addExpenseHandler}>add expense</button>
                </div>
            </form>
        </>
    )
}
