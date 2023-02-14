import React, { useState } from 'react'
import { ExpensesForm } from '../ExpensesForm/ExpensesForm'
import './NewExpense.css'
export const NewExpense = ({ onSubmitHandler }) => {
    const [showForm, setShowForm] = useState(false);
    const ShowFormButtonHandler = () => {
        setShowForm((prevState) => !prevState)
    }
    return (
        <div className='new-expense'>
            {showForm ? <ExpensesForm onSubmitHandler={onSubmitHandler} ShowFormButtonHandler={ShowFormButtonHandler} /> : <button onClick={ShowFormButtonHandler}>Add new</button>}

        </div>
    )
}
