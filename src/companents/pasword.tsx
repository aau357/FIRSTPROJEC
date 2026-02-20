import { useState } from "react";

interface PasswordState {
  value: string;
  show: boolean;
}

function pasword() {
  const [password, setPassword] = useState<PasswordState>({
    value: "",
    show: false,
  });

  return (
    <div>
      <input
        type={password.show ? "text" : "password"}
        value={password.value}
        onChange={(e) =>
          setPassword({ ...password, value: e.target.value })
        }
      />

      <button
        type="button"
        onClick={() =>
          setPassword({ ...password, show: !password.show })
        }
      >
        {password.show ? "Yashirish" : "Ko‘rsatish"}
      </button>
    </div>
  );
}

export default pasword;