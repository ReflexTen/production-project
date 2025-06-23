import { useState } from "react";
import * as styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((prevCount) => ++prevCount);
        }}
      >
        +
      </button>
      <div className={styles.btn}>{count}</div>
      <button
        onClick={() => {
          setCount((prevCount) => --prevCount);
        }}
      >
        -
      </button>
    </>
  );
};
