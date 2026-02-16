import { useState } from "react";

interface Cart {
  count: number;
  price: number;
}

function Savatcha() {

  const [cart, setCart] = useState<Cart>({
    count: 1,
    price: 10000
  });

  return (
    <div>

      <h1>Mahsulotlar: {cart.count}</h1>
      <h2>itogo: {cart.count * cart.price} </h2>

      <div>
        <button
          onClick={() =>
            setCart({ 
              ...cart, count: cart.count + 1
             })
          }
        >
          Maxsulot qoshish
        </button>

        <button
          onClick={() =>
            setCart({ ...cart, count: cart.count - 1 })
          }
        >
          Mahsulot ayirish
        </button>
      </div>

    </div>
  );
}

export default Savatcha;
