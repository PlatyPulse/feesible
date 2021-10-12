import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../card/Card'
import './GasPrice.scss'
import { colors } from '../../colors'
import { UsdContext } from '../../App'

export default function GasPrice({ gasprice = 55, time = 0.5, type = '', gascost = 21000 }) {
    const usdRate = useContext(UsdContext)
    



    const formatTime = (x) => {
        const minute = 60;
        const secs = x * minute
        if (secs < 60) {
            return Math.round(secs) + "s"
        } else {
            return Math.round(x + 1) + "m"
        }

    }

    const selectColor = () => {
        let perc = Math.min((gasprice - 20) / 2, 100) / 100
        //value from 0 to 1
        var hue = ((1 - perc) * 160).toString(10);
        return ["hsla(", hue, ",100%,50%, 0.6)"].join("");
    }

    const colorLeft = selectColor();

    time = formatTime(time)
  


    const ethCost = Math.round(gasprice * gascost * 0.000000001 * 10000000) / 10000000;
    const dollarsCost = Math.round(ethCost * usdRate * 1000) / 1000;
    
    return (
        <div className="gas-price-card">
            <Card  bg={colors.backgroundcard} noPadding={true} height={120}>
                <Container >
                    <Row>
                        <Col xs={3} className="bordered-right" style={{ backgroundColor: colorLeft }}>
                         

                                <div className="gasprice-left">
                                    <h2>{gasprice}</h2>
                                    <span> {'<' + time}</span>
                                </div>
                            
                            {/* {type === 'custom' && (
                                <div className="gasprice-left">
                                    <h1>??</h1>
                                </div>
                            )} */}
                        </Col>
                        <Col>
                           
                                <div  className="gasprice-card-title">
                                    <span>{type.toUpperCase()}</span>
                                    <div className="gasprice-right">
                                        <span>{ethCost} ETH</span>
                                        <span>{dollarsCost}$</span>

                                    </div>
                                </div>
                            {/* 
                            {type === 'custom' && (
                                <div className="gasprice-right">
                                    Custom gas amount coming soon !
                                </div>
                            )} */}
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}
