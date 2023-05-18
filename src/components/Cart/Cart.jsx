import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({ watchTime }) => {
  const [time, setTime] = useState(0);

  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTime = localStorage.getItem("watchTime");
    setTime(getWatchTime);

    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [watchTime]);

  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };

  const handleComplete = () => {
    const getWatchTime = localStorage.getItem("watchTime");
    const getBreakTime = localStorage.getItem("breakTime");
    const remainingTime = getWatchTime - getBreakTime;
    const text = "Total Watch Time: ";
    const result = text.concat(remainingTime);
    toast(result);
  };

  return (
    <div>
      <h1 className="cart-title">My Cart</h1>

      <div className="cart-details">
        <p>Total Watch Time</p>
        <input type="text" value={time} className="cart-input" disabled />
        <p>Total Break Time</p>
        <button className="btn-1" onClick={() => handleBreakTime(15)}>
          15
        </button>
        <button className="btn-2" onClick={() => handleBreakTime(25)}>
          25
        </button>
        <button className="btn-3" onClick={() => handleBreakTime(35)}>
          35
        </button>
        <input type="text" value={breakTime} className="cart-input" disabled />
        <button className="btn-complete" onClick={handleComplete}>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Cart;
