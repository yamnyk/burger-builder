import React from 'react';

const OrderSummary = props => {
  const ingrList = Object.keys(props.ingredients)
    .map((igKey,ind) => <li key={ind}><span>{igKey}</span> - {props.ingredients[igKey]}</li>);
  
  return (
    <>
      <h3>Summary</h3>
      <p>Ingredients list:</p>
      {ingrList}
    </>
  );
};

export default OrderSummary;