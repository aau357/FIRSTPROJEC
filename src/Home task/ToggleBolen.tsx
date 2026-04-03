import { useState } from "react";
 function ToggleExample() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(isVisible => ! isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <p>
          Bu matn ko‘rinadi 
        </p>
      )}
    </div>
  );
}
export default ToggleExample