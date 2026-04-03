import { useState } from "react";
function LivePreview() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Input bilan string state</h1>

      <input
        type="text"
        value={text}
        onChange={(a) => setText(a.target.value)}
        placeholder="Matn kiriting..."
      />
      <h2>Live Preview: {text} </h2>

    </div>
  );
}
export default LivePreview