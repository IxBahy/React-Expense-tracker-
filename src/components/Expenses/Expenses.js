import React, { useState } from 'react'
import { Card } from '../Card/Card';
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { NewExpense } from '../NewExpense/NewExpense';
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css'
import { ExpensesList } from '../ExpensesList/ExpensesList';
import { ExpensesChart } from '../ExpensesChart/ExpensesChart';

export const Expenses = () => {
    const [expenses, setExpenses] = useState([
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2021, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2022, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2019, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);
    const [selectedYear, setSelectedYear] = useState('all');
    const filteredExpenses = selectedYear === 'all' ? expenses : expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)
    const submitHandler = (expense) => {
        setExpenses(prevState => [expense, ...prevState])
    }
    const filterHandler = (year) => {
        setSelectedYear(year)
    }
    return (
        <>
            <NewExpense onSubmitHandler={submitHandler} />
            <Card className='expenses'>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesFilter filterHandler={filterHandler} selectedYear={selectedYear} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </>
    )
}
