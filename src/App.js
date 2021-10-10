
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Main from './container/main/Main';

export const GasContext = React.createContext(null);

export const UsdContext = React.createContext(null);

function App() {
  const [gasObj, setGasObj] = useState(null)
  const [usdObj, setUsdObj] = useState(null)

  useEffect(() => {
    getGasCost();
    getUsdRate();
  }, [])


  const getGasCost = async () => {
    await axios.get('https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=a186469b3e0c22cf3369d57e40a561ff1c874134c297385bfaf2066f4af7').then(res => {
      const obj = res.data;
      obj.safeLow = obj.safeLow / 10
      obj.average = obj.average / 10
      obj.fast = obj.fast / 10
      obj.fastest = obj.fastest / 10
      console.log(`obj`, obj)
      setGasObj(obj)
    })
  }

  const getUsdRate = async () => {
    await axios.get('https://data-api.defipulse.com/api/v1/dexag/markets?api-key=a186469b3e0c22cf3369d57e40a561ff1c874134c297385bfaf2066f4af7').then(res => {
      const obj = res.data;
      const ethUsdc = (Number(obj.AG['ETH-USDC'].ask) + Number(obj.AG['ETH-USDC'].bid)) / 2
      setUsdObj(ethUsdc)
    })
  }

  return (
    <GasContext.Provider value={gasObj}>
      <UsdContext.Provider value={usdObj}>
        <div className="App">
          <Main />
        </div>
      </UsdContext.Provider>
    </GasContext.Provider>
  );
}

export default App;
