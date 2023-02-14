import React from 'react'
import { ChartBar } from '../ChartBar/ChartBar'
import './Chart.css'
export const Chart = ({ dataPoints }) => {
    let expensesValues = dataPoints.map(point => point.value)
    let maxValue = Math.max(...expensesValues)
    return (
        <>
            <div className='chart'>
                {dataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue}
                        label={dataPoint.label}
                    />
                ))}
            </div>
        </>
    )
}
