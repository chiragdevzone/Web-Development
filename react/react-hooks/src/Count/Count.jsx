import { useEffect } from "react";
import { useState } from "react";
import styles from "./Count.module.css";

function Count() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1);
            } else {
              setCount(0);
            }
          }}
          className={styles.btn}
        >
          -
        </button>
        <div className={styles.display}>{count}</div>
        <button onClick={() => setCount(count + 1)} className={styles.btn}>
          +
        </button>
      </div>
    </>
  );
}

export default Count;
