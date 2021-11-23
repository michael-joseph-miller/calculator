import * as styles from './index.scss';

function App() {
  return (
    <div id={styles.app}>
      <div id={styles.display} className={styles.cell}>
        <div id={styles.screen}>
          <div id={styles.expression}>0,000,000.00</div>
        </div>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.function}`}>
          <sup>2</sup>&#8730;
        </button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.function}`}>
          <sup>y</sup>&#8730;x
        </button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.function}`}>
          x<sup>2</sup>
        </button>
      </div>
      <div className={styles.cell}>
        <button
          id={styles.clear}
          className={`${styles.btn} ${styles.function}`}
        >
          CLR
        </button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>1</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>2</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>3</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>&#247;</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>4</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>5</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>6</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>x</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>7</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>8</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>9</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>-</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>0</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>+/-</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>=</button>
      </div>
      <div className={styles.cell}>
        <button className={`${styles.btn} ${styles.main}`}>+</button>
      </div>
    </div>
  );
}

export default App;
