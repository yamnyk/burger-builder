import React from 'react';

import styles from './Modal.module.css'

const Modal = props => {
  return (
    <div className={styles.Backdrop} onClick={props.removeHandler}>
      <div className={styles.Modal}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;