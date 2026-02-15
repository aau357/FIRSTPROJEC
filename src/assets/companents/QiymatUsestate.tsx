import { useState } from "react";


const QiymatUsestate = () => {
const [count, setCount] = useState(0);
  return (
    <div className=" flex flex-col  mt-10 justify-center items-center">
      <h2>Counter: {count}</h2>

      <div className="flex  justify-center gap-2.5">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>

      </div>
    </div>
  )
}

export default QiymatUsestate