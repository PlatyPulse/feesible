import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { GasContext, UsdContext } from '../../App'
import Header from '../../components/header/Header'
import TxTypeContainer from '../txTypeContainer/TxTypeContainer'
import './Main.scss'

export default function Main() {
    const usdRates = useContext(UsdContext)
    const gasContext = useContext(GasContext)
    console.log(`gasContext`, gasContext)
    console.log(`usdRates`, usdRates)
    return (
        <Container className="main-container">
            {(usdRates && gasContext) && (
                <Row>
                    <div>
                        <Header></Header>
                    </div>
                    <div>
                        <TxTypeContainer name={"ETH transfer"} gascost={21000}/>
                        <TxTypeContainer name={"ERC20 transfer"} gascost={85000}/>
                        <TxTypeContainer name={"Uniswap Swap"}  gascost={200000}/>
                        <TxTypeContainer name={"Add LP Uniswap"}  gascost={175000}/>
                        <TxTypeContainer name={"Opensea buy now"}  gascost={350000}/>
                        <TxTypeContainer name={"Approve contract"}  gascost={60000}/>
                    </div>
                </Row>
            )}
            {(!usdRates || !gasContext) && (
                <Row>Loading...</Row>
            )}
        </Container>
    )
}
