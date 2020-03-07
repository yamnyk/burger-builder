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
  return (
    <div className={styles.BuildControls}>
      {_CONTROLS.map((c, ind) => (
        <BuildControl
          key={c + ind}
          label={c.type.charAt(0).toUpperCase() + c.type.slice(1)}
          added={() => props.ingredientAdded(c.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;