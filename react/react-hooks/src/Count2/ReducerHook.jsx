import { useReducer } from "react";
import reducer from "./reducer";
import styles from "./ReducerHook.module.css";

const initialvalue = 0;
function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialvalue);
  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => dispatch({ type: "DEC" })}
          className={styles.btn}
        >
          -
        </button>
        <div className={styles.display}>{count}</div>
        <button
          onClick={() => dispatch({ type: "INC" })}
          className={styles.btn}
        >
          +
        </button>
      </div>
    </>
  );
}

export default ReducerHook;
