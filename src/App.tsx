import { useState } from "react";


const App = () => {
  const [call, setCall] = useState({
    isCalling: false,
    duration: 0,
    status: "idle"
  });

  return (
    <div>
      <h1>isCalling:{call.isCalling ? "true" : "falce"}</h1>
      <h2>status: {call.status}</h2>

      <button onClick={()=> setCall({...call, isCalling: true, status: "talking"})}>
        call
      </button>
       <button onClick={()=> setCall({...call, isCalling: false, status: "ended"})}>
        end
      </button>
    </div>
  )
}

export default App