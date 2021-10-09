import React from 'react'
import './GasCost.scss';
import { GiSnail, GiSpeedometer, GiDrop } from "react-icons/gi";
import { Col, Row } from 'react-bootstrap';

export default function GasCost({ gas = 96, slow, average, fast }) {
    const color = 'white'
    return (
        <Row>
            <Col>
                {slow && (
                    <span><GiSnail size={20} /></span>
                )}
                {average && (
                    <span><GiDrop size={20} /></span>
                )}
                {fast && (
                    <span><GiSpeedometer size={20} /></span>
                )}

            </Col>
            <Col>
                <div className="gas-cost">
                    <span>{gas}</span>
                    
                </div>
                
            </Col>
          {/*   <Col>
            <div className="colored-dot" style={{ backgroundColor: color }}></div>
            </Col> */}
        </Row>
    )
}
