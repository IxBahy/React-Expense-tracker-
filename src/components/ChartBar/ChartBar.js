import React from 'react'
import './ChartBar.css'
export const ChartBar = ({ maxValue, value, label }) => {

    let barFillHeight = (maxValue > 0 ? Math.round((value / maxValue) * 100) + '%' : '')
    return (
        <>
            <div className='chart-bar'>
                <div className='chart-bar__inner'>
                    <div
                        className='chart-bar__fill'
                        style={{ height: barFillHeight }}
                    ></div>
                </div>
                <div className='chart-bar__label'>{label}</div>
            </div>
        </>
    )
}
