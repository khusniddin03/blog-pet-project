import { useState } from "react"
import classes from './counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increment}>increment</button>
    </div>
  )
}
