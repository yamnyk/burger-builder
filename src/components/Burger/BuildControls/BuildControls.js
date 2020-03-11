import React from 'react';

import styles from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const _CONTROLS = Object.freeze([
  {type: 'salad'},
  {type: 'meat'},
  {type: 'bacon'},
  {type: 'cheese'}
]);

const BuildControls = props => {
  const purchasable = Object.keys(props.disabled).every(v => props.disabled[v] === true);
  
  return (
    <div className={styles.BuildControls}>
      <p>Total price - {props.totalPrice}</p>
      {_CONTROLS.map((c, ind) => (
        <BuildControl
          key={c + ind}
          label={c.type.charAt(0).toUpperCase() + c.type.slice(1)}
          added={() => props.ingredientAdded(c.type)}
          removed={() => props.ingredientRemoved(c.type)}
          disabled={props.disabled[c.type]}
        />
      ))}
      <button disabled={purchasable} className={styles.OrderButton} onClick={props.modalHandler}>order now</button>
    </div>
  );
};

export default BuildControls;