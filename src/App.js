
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Main from './container/main/Main';

export const GasContext = React.createContext(null);

export const UsdContext = React.createContext(null);
export const CustomGasContext = React.createContext(null);

function App() {
  const [gasObj, setGasObj] = useState(null)
  const [usdObj, setUsdObj] = useState(null)
  const [customGas, setCustomGas] = useState(30)

  useEffect(() => {
    setInterval(() => {
      getGasCost();
      getUsdRate();
    }, 30000)
    getGasCost();
    getUsdRate();
  }, [])


  const getGasCost = async () => {
    await axios.get('https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=b6254c15e4612077a1c6cccb9a5cf6be56bdbd8e62ec7dd2ee0c99b5c077').then(res => {
      const obj = res.data;
      obj.safeLow = obj.safeLow / 10
      obj.average = obj.average / 10
      obj.fast = obj.fast / 10
      obj.fastest = obj.fastest / 10
      setGasObj(obj);
      document.title = `Low : ${obj.safeLow} | Avg : ${obj.average} | Fast : ${obj.fast} `;
    })
  }

  const getUsdRate = async () => {
    await axios.get('https://data-api.defipulse.com/api/v1/dexag/markets?api-key=b6254c15e4612077a1c6cccb9a5cf6be56bdbd8e62ec7dd2ee0c99b5c077').then(res => {
      const obj = res.data;
      const ethUsdc = (Number(obj.AG['ETH-USDC'].ask) + Number(obj.AG['ETH-USDC'].bid)) / 2
      setUsdObj(ethUsdc);
    })
  }

  return (
    <GasContext.Provider value={gasObj}>
      <UsdContext.Provider value={usdObj}>
        <CustomGasContext.Provider value={{customGas, setCustomGas}}>
          <div className="App">
            <Main />
          </div>
        </CustomGasContext.Provider>
      </UsdContext.Provider>
    </GasContext.Provider >
  );
}

export default App;
