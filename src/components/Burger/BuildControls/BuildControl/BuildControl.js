import React from 'react';

import styles from './BuildControl.module.css'

const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <p className={styles.Label}>{props.label}</p>
      <button className={styles.BuildControl__button + ' ' + styles.Less}>Less</button>
      <button className={styles.BuildControl__button + ' ' + styles.More} onClick={props.added}>More</button>
    </div>
  );
};

export default BuildControl;