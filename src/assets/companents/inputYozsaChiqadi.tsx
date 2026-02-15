import { useState } from "react";
import './App.css'
 function inputYozsaChiqadi() {
  const [text, setText] = useState(""); // input qiymati uchun state

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        placeholder="Matn yozing..."
        value={text}
        onChange={e => setText(e.target.value)}
        className="border px-2 py-1 rounded w-64"
      />
      <p className="mt-4">{text}</p>
    </div>
  );
}
export default inputYozsaChiqadi