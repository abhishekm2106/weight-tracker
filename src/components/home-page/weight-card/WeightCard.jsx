import React from 'react'
import './weight-card.scss'

function WeightCard({ content }) {
    return (
        <div className='weight-card'>
            <p>{content.text} kg </p>
            <p>{content.created}</p>
        </div>
    )
}

export default WeightCard
