import React from 'react';
import styles from './App.module.scss';
import FadeInOnVisible from "../../shared/components/animations/FadeInOnVisible/FadeInOnVisible";
import FadeInOnVisibleFirstTime from "../../shared/components/animations/FadeInOnFirstTimeVisible/FadeInOnVisibleFirstTime";

const App = () => <>
  <div className={styles.red}>Bloc présent pour montrer que les bloc suivants s'animent correctement</div>

  <FadeInOnVisibleFirstTime vars={{ x: 400 }}>
    <div className={styles.onVisibleFirstTime}>Animation déclenché une fois lorsque l'élément est visible</div>
  </FadeInOnVisibleFirstTime>

  <FadeInOnVisible fromVars={{ x: -400 }} toVars={{ x: 0 }}>
    <div className={styles.onVisible}>Animation déclenché à chaque fois que l'élément est visible</div>
  </FadeInOnVisible>
</>

export default App;
