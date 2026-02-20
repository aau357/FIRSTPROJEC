// bu narsani yasash men uchun qiyin bo'ldi bungacha ancha qiynaldim lekin hudoga shukur amaladami 
import { useState } from "react"
import './App.css'
interface user {
  name: string,
  age: number,
  location: string
}
const InputResult = () => {
  const [name, setname] = useState<user>(
  {
    name: "Jony",
    age: 12,
    location: "london"
  }
  )
   const [namev, setnamev] = useState<user>(
  {
    name: "Jony",
    age: 12,
    location: "london"
  }
  )
  return (
   <div>
  {/* first */}
   <div>
      <h1>{namev.name}</h1>
      <input
        placeholder="your name"
        type="string"
        onChange={(a) => setname({ ...name, name:a.target.value})}
      />
      <div>
        <button
          onClick={() => setnamev({...namev, name:name.name})}
          className="border rounded-sm">
          confirm
        </button>
      </div>
    </div>
    {/* second */}
    <div>
      <h1>{namev.age}</h1>
      <input
        placeholder="your name"
        type="number"
        onChange={(a) => setname({ ...name, age:a.target.valueAsNumber})}
      />
      <div>
        <button
          onClick={() => setnamev({...namev, age:name.age})}
          className="border rounded-sm">
          confirm
        </button>
      </div>
    </div>
    {/* thrid */}
    <div>
      <h1>{namev.location}</h1>
      <input
        placeholder="your name"
        type="string"
        onChange={(a) => setname({ ...name, location:a.target.value})}
      />
      <div>
        <button
          onClick={() => setnamev({...namev, location:name.location })}
          className="border rounded-sm">
          confirm
        </button>
      </div>
    </div>
    </div>
  )
}
export default InputResult
