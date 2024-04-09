import { useEffect, useState } from "react";
import styles from "./Window.module.css";

function Window() {
  const [width, setWidth] = useState(window.screen.width);
  const currentScreenWidth = () => {
    setWidth(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
  });
  return (
    <>
      <h1 className={styles.h1}>
        The current size of window is : <span>{width}</span>
      </h1>
    </>
  );
}

export default Window;
