
import { useState } from "react"

function App() {

  const [count, setcount] = useState(3)
  return (
    <div>
      <h1>{count}</h1>
      <button

        onClick={() =>
          setcount(count + 1)
        }
      >
        +1
      </button>
      <button
        disabled={count == 0}
        onClick={() =>
          setcount(count - 1)
        }
      >
        -1
      </button>
      <button
        onClick={() => setcount(0)}
      >
        reset
      </button>
    </div>
  )
}
export default App
