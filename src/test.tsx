import { useState } from "react";

const test = () => {
  return (
    

 function test() {
  const [active, setActive] = useState("ombor");

  return (
    <div className="flex h-screen">

      {/* MENU */}
      <div className="w-60 bg-gray-900 text-white p-4 space-y-2">
        <button
          onClick={() => setActive("ombor")}
          className="block w-full text-left hover:bg-gray-700 p-2 rounded"
        >
          Ombor
        </button>

        <button
          onClick={() => setActive("tovar")}
          className="block w-full text-left hover:bg-gray-700 p-2 rounded"
        >
          Tovarlar
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 bg-gray-100">
        {active === "ombor" && <Ombor />}
        {active === "tovar" && <Tovarlar />}
      </div>

    </div>
  );
}
  )
}

export default test