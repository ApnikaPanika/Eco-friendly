import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="Checkout">
      <div className="GreenBox">
        <div className="bigCircle" onClick={() => setIsVisible(!isVisible)}>
          <div className="smallCircle" hidden={isVisible} />
        </div>
        <span className="text" onClick={() => setIsVisible(!isVisible)}>Eco-friendly packaging</span>
        <div className="leaf">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" /></svg>
        </div>

      </div>
      <div className="box1">
        <h1>asdas</h1>
      </div>
      <div className="box1">
        <div className="price">
          <span>
            Subtotal
          </span>
          <span>
            20.00
          </span>
        </div>
        <div className="price">
          <span className="ecoText">
            Eco-friendly packaging
          </span>
          <span>
            0.40
          </span>
        </div>
        <div className="price">
          <span>
            Total
          </span>
          <span>
            20.40
          </span>
        </div>
        <button type="button" className="submit">Continue to shipping</button>
      </div>
    </div>
  );
};

export default Checkout;
