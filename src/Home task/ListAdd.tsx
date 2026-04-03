import { useState } from "react"

const App = () => {
  const [items, setitems] = useState(['item1', 'item2', 'item3']);
  const [inputvalue, setinputValue] = useState('')
  return (
    <div>
      <h1>Test</h1>

      <input
        type="text"
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setitems([...items, inputvalue]);
          setinputValue('')
        }}
      >
        Add
      </button>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <p>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App