import React from 'react';
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingrList = Object.keys(props.ingredients)
    .map((igKey,ind) => <li key={ind}><span>{igKey}</span> - {props.ingredients[igKey]}</li>);
  
  return (
    <>
      <h3>Summary</h3>
      <p>Ingredients list:</p>
      {ingrList}
      <p>Total price - {props.totalPrice}</p>
      <Button btnType={'Success'} clicked={props.continue}>continue</Button>
      <Button btnType={'Danger'} clicked={props.cancel}>cancel</Button>
    </>
  );
};

export default OrderSummary;