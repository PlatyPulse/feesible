
import axios from 'axios';

import React , {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/header/Header';
import Main from './container/main/Main';

export const GasContext = React.createContext(null);

function App() {
  const [gasObj, setGasObj] = useState({})

  useEffect(() => {
    getGasCost();
  }, [])


  const getGasCost = async () => {
    await axios.get('https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=a186469b3e0c22cf3369d57e40a561ff1c874134c297385bfaf2066f4af7').then(res => {
      setGasObj(res.data)
    })
  }

  return (
    <GasContext.Provider value={gasObj}>
      <div className="App">
        <Main />
      </div>
    </GasContext.Provider>
  );
}

export default App;
