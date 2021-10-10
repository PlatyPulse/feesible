import React from 'react'
import './Card.scss'
import {colors} from '../../colors.js'


export default function Card({borderRadius = 25, height = 90, width = '100%', children, noPadding, bg}) {
    const cardStyle = {
        borderRadius: borderRadius,
        height: height,
        width: width,
        padding: noPadding ? 0 : '2rem 3rem',
        backgroundColor: bg ? bg : colors.backgroundcard
    }
    return (
        <div className="card" style={cardStyle}>
            {children}
        </div>
    )
}
