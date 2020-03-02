import React from 'react';
import styles from './Layout.module.css';

const Layout = props => {
  return (
    <>
      <header className={styles.toolbar}>
        <div className="container">Toolbar, Sidebar, Backdrop</div>
      </header>
      <main className={'container ' + styles.page}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;