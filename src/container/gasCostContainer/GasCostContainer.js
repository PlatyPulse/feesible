import React, { useContext } from 'react'
import { GasContext } from '../../App'
import GasCost from '../../components/gasCost/GasCost'
import './GasCostContainer.scss'

export default function GasCostContainer() {

    const gasObj = useContext(GasContext)
    const gas = {
        fast: gasObj.fast,
        slow: gasObj.safeLow,
        average: gasObj.average
    }

    return (
        <div>
            {gas && (
                <div className="gas-cost-container">
                    <GasCost gas={gas.slow} slow={true} />
                    <GasCost gas={gas.average} average={true} />
                    <GasCost gas={gas.fast} fast={true} />
                </div>
            )}
        </div>
    )
}
