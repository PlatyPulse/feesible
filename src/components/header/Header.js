import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import GasCostContainer from '../../container/gasCostContainer/GasCostContainer';
import Card from '../card/Card';
import './Header.scss'

export default function Header() {
    return (
        <div  className="header">
           <Card shadowed={true} bg={"rgba( 32, 21, 31, 0.88 )"} glassMorphism={true} height={240}>
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
