import React from 'react'
import './ExpensesFilter.css';
export const ExpensesFilter = ({ filterHandler, selectedYear }) => {
    const filterYears = [2019, 2020, 2021, 2022, 'all'].reverse()
    const filterOptions = filterYears.map((item, index) => <option value={item} key={index}>{item}</option>)
    const filterChangeHandler = (e) => {
        let selectedYear = e.target.value;
        filterHandler(selectedYear);

    }
    return (
        <>
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select onChange={filterChangeHandler} value={selectedYear}>
                        {filterOptions}
                    </select>
                </div>
            </div>
        </>
    )
}
