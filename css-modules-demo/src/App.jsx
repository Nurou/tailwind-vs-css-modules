import { useState } from 'react';
import styles from './App.module.css';
import { clsx } from 'clsx';

export function App() {
  const [count, setCount] = useState(0);

  const getCounterClass = () => {
    if (count < 5) return styles.counterLow;
    if (count < 10) return styles.counterMedium;
    return styles.counterHigh;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Modules Demo</h1>

      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div className={clsx(styles.counter, getCounterClass())}>Count is: {count}</div>
      <div className={styles.mobileOnlySectionMd}>Hey! I need a bit more space</div>
      <div className={styles.mobileOnlySectionSm}>I'm getting squished!</div>
    </div>
  );
}

// Example with counter styles inlined using CSS classes
export function App2() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Modules Demo</h1>

      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div
        className={clsx(styles.counter, {
          [styles.counterLow]: count < 5,
          [styles.counterMedium]: count < 10,
          [styles.counterHigh]: count >= 10,
        })}
      >
        Count is: {count}
      </div>
    </div>
  );
}

// Example with dynamic values using CSS custom properties
export function App3() {
  const [count, setCount] = useState(0);

  const counterPadding = count < 5 ? '1rem' : count < 10 ? '2rem' : '3rem';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Modules Demo</h1>

      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div
        className={clsx(styles.counterWithCustomProperties)}
        style={{
          '--counter-bg': `var(--color-${count < 5 ? 'success' : count < 10 ? 'warning' : 'danger'}-bg)`,
          '--counter-text': `var(--color-${count < 5 ? 'success' : count < 10 ? 'warning' : 'danger'}-text)`,
        }}
      >
        Count is: {count}
      </div>
    </div>
  );
}
