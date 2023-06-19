import React, { useState } from 'react';
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import OldPrintful from './Components/OldPrintful/OldPrintful';
import printfulPhoto from '../public/Printful.png';
import NewPrintful from './Components/NewPrintful/NewPrintful';

const App = () => {
  const [status, setStatus] = useState<string>('new');

  return (
    <div className="BigBigContainer">
      <img className="imagino" src={printfulPhoto} alt="" />
      {
        status === 'checkout' && (<Checkout />)
      }
      {
        status === 'old' && (<OldPrintful action={() => setStatus('new')} />)
      }
      {
        status === 'new' && (<NewPrintful action={() => setStatus('checkout')} />)
      }
    </div>
  );
};

export default App;
