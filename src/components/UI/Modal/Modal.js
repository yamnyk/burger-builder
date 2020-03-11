import React from 'react';

import styles from './Modal.module.css'

const Modal = props => {
  const removeBackdrop = (e) => {
    if (e.target.id === 'backdrop') {
      props.removeHandler()
    }
  };
  return (
    <div id={'backdrop'} className={styles.Backdrop} onClick={removeBackdrop}>
      <div className={styles.Modal}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;