import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GasCostContainer from '../../container/gasCostContainer/GasCostContainer';
import Card from '../card/Card';
import './Header.scss'

export default function Header() {
    return (
        <div  className="header">
           <Card height={240}>
               <div className="headerTitle">
                    <h1>FEESIBLE</h1>
                    <div className="gascost-container">
                        <GasCostContainer />
                    </div>
               </div>
           </Card>
        </div>
    )
}
