import React from 'react'
import './Card.scss'
import {colors} from '../../colors.js'


export default function Card({borderRadius = 25, height = 90, width = '100%', children, noPadding, bg, glassMorphism = false, shadowed = false}) {
    const cardStyle = {
        borderRadius: borderRadius,
        height: height,
        width: width,
        padding: noPadding ? 0 : '2rem 3rem',
        backgroundColor: bg ? bg : colors.backgroundcard,
        backdropFilter: glassMorphism ? 'blur(16px) saturate(180%)' : '',
        boxShadow: shadowed ? '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )': '',
    }
    return (
        <div className="card" style={cardStyle}>
            {children}
        </div>
    )
}
