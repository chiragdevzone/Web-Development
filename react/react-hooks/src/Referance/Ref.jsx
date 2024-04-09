import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "./Ref.module.css";

const Ref = () => {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);
  const inputRef = useRef();

  const changeBackground = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#82E0AA";
  };

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Total no. of Rerender is: {count.current} </p>
      <button onClick={changeBackground}>Click Me</button>
    </div>
  );
};

export default Ref;
