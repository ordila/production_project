import { useState } from "react";

import counterStyles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>

      <button
        className={counterStyles.button}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
