import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GasPrice from '../../components/gasPrice/GasPrice'
import Card from '../../components/card/Card'
import { formatWithSpaces } from '../../utils/formatters'
import './TxTypeContainer.scss'
import { GasContext } from '../../App'

export default function TxTypeContainer({ name = 'Title', gascost = 21000 }) {
    const gascostFormatted = formatWithSpaces(gascost)
    const gas = useContext(GasContext)
    console.log(`gas`, gas)
    
    return (
        <div className="tx-type-container">
            {gas && (
                <Card height={'auto'}>
                    <Container>
                        <Row>
                            <Col lg={3} md={12} >
                                <div className="container-title">
                                    <h2>{name}</h2>
                                    <p>Gas Cost: {gascostFormatted} </p>
                                </div>
                            </Col>
                            <Col>
                                <Row style={{ alignItems: 'center'}}>

                                    <Col md={12} lg={6}>
                                        <GasPrice gascost={gascost} gasprice={gas.safeLow} time={gas.safeLowWait} type={'slow'}></GasPrice>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <GasPrice gascost={gascost} gasprice={gas.average} time = { gas.avgWait } type={'average'}></GasPrice>
                                    </Col>
                                    <Col md={12} lg={6} >
                                        <GasPrice gascost={gascost} gasprice={gas.fast} time={gas.fastWait} type={'fast'}></GasPrice>
                                    </Col>
                                    <Col md={12} lg={6} >
                                        <GasPrice gascost={gascost} type={'custom'}></GasPrice>
                                    </Col>


                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            )}
        </div>
    )
}
