// import React from 'react';
// import logo from './logo.svg';
import Header from './components/layout/header/header';

import styles from './App.module.scss';
import Intro from './components/blocks/intro/intro';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <body>
        <div className={styles.hiddenSections}>
          <Intro />

        </div>
      </body>
      {/* 
      {/* footer */}
    </div>
  );
}

export default App;
