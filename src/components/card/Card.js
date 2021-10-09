import React from 'react'
import './Card.scss'

export default function Card({borderRadius = 25, height = 90, width = '100%', children}) {
    const cardStyle = {
        borderRadius: borderRadius,
        height: height,
        width: width
    }
    return (
        <div className="card" style={cardStyle}>
            {children}
        </div>
    )
}
