import { useState } from "react";

 function App   () {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div >
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Yashirish" : "Korsatish"}
      </button>

    {isVisible && <p>Bu matn chiqadi</p>}

    </div>
  );
}
 export default App