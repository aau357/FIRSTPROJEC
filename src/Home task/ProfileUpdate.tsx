import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Sardor",
    age: 25,
    city: "Tashkent"
  });

  return (
    <div>
      <input
        value={profile.name}
        onChange={(e) =>
          setProfile(prev => ({
            ...prev,
            name: e.target.value
          }))
        }
      />

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.city}</p>
    </div>
  );
}

export default Profile;