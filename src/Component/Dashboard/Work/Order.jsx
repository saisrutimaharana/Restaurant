import React from "react";
import style from "./order.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Order() {
  const handleOrderClick = () => {
    alert("Redirecting to order page...");
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Are you ready to order with the best deals?</h1>
        <button onClick={handleOrderClick}>Proceed to Order  <KeyboardArrowRightIcon style={{paddingTop:"10px"}}/></button>
      </div>
     
    </div>
  );
}

export default Order;
