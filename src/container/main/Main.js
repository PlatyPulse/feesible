import React, { useContext } from 'react'
import Slider, { Range } from 'rc-slider';
import { Container, Row } from 'react-bootstrap'
import { CustomGasContext, GasContext, UsdContext } from '../../App'
import Header from '../../components/header/Header'
import TxTypeContainer from '../txTypeContainer/TxTypeContainer'
import './Main.scss'
import 'rc-slider/assets/index.css';

export default function Main() {
    const usdRates = useContext(UsdContext)
    const gasContext = useContext(GasContext)
    const customGas = useContext(CustomGasContext)
    console.log(`gasContext`, gasContext)
    console.log(`usdRates`, usdRates)
    const marks = {

        30: <strong>30 (NGMI)</strong>,
        1000: '1000',
        2000: '2000',
        3500: '3500',
        6000: '6000',
        8000: <strong> 8000 Are you that rich ?</strong>,
        10000: '10000'
    };
    return (
        <Container className="main-container">
            {(usdRates && gasContext) && (
                <Row>
                    <div>
                        <Header></Header>
                    </div>
                    <div className="explanations">
                        Never get surprised by network fees again ! With feesible you can calculate the cost of your fees for most of DEFI's actions !
                    </div>
                    <div className="slider-container">
                        <p>Selected Gas : {customGas.customGas}</p>
                        <Slider min={30} max={10000} marks={marks} included={false} onChange={(a) => customGas.setCustomGas(a)} defaultValue={customGas.customGas} />
                    </div>
                    <div>
                        <TxTypeContainer name={"ETH transfer"} gascost={21000} />
                        <TxTypeContainer name={"ERC20 transfer"} gascost={85000} />
                        <TxTypeContainer name={"Approve contract"} gascost={60000} />
                        <TxTypeContainer name={"Uniswap Swap"} gascost={200000} />
                        <TxTypeContainer name={"Add LP Uniswap"} gascost={175000} />
                        <TxTypeContainer name={"Opensea buy now"} gascost={350000} />
                    </div>
                </Row>
            )}
            {(!usdRates || !gasContext) && (
                <Row>Loading...</Row>
            )}
        </Container>
    )
}
