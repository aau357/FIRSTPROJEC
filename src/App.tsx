import { useState } from "react";
import type { ChangeEvent } from "react";

interface PasswordField {
  value: string;
  show: boolean;
}

function App() {
  const [passwordField, setPasswordField] = useState<PasswordField>({
    value: "",
    show: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordField((prev: PasswordField) => ({
      ...prev,
      value: e.target.value
    }));
  };

  const togglePassword = () => {
    setPasswordField((prev: PasswordField) => ({
      ...prev,
      show: !prev.show
    }));
  };

  return (
    <div>
      <input
        type={passwordField.show ? "text" : "password"}
        value={passwordField.value}
        onChange={handleChange}
      />

      <button type="button" onClick={togglePassword}>
        {passwordField.show ? "Yashirish" : "Ko‘rsatish"}
      </button>
    </div>
  );
}

export default App;