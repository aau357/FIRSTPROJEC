import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Sardor",
    address: { city: "Tashkent", street: "Amir Temur" },
  });

  return (
    <div>
      <input
        value={user.address.street}
        onChange={(e) =>
          setUser(prev => ({
            ...prev,
            address: {
              ...prev.address,
              street: e.target.value
            }
          }))
        }
      />

      <p>Name: {user.name}</p>
      <p>City: {user.address.city}</p>
      <p>Street: {user.address.street}</p>
    </div>
  );
}

export default User;