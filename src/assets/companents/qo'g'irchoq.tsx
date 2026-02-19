import { useState } from "react";
import './App.css'
interface Cart {
  health: number;
 
}

function App() {

  const [cart, setCart] = useState<Cart>({
    
    health: 100

  });

  return (
    <div>

      <h1>qo'g'irchoq sogligi: {cart.health}</h1>
      <h2>iismi alimardon</h2>

      <div className=" flex gap-4">
        <button className="border rounded-sm p-0.5"
          disabled={cart.health== 100}
         onClick={() =>
            setCart({
              ...cart, health: cart.health + 10
            })
          }
        >
         heal
        </button>

        <button className="border rounded-sm p-0.5"
          disabled={cart.health== 0}
          onClick={() =>
            
            setCart({ ...cart, health: cart.health - 10 })
          }
        >
       hit
        </button>
      </div>

    </div>
  )
}

export default App;
