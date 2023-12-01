import React, { useState } from "react";

const Signup = ({ onCreateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    // Simulated user creation (replace with actual logic)
    if (username && password) {
      onCreateUser(username, password);
      setUsername("");
      setPassword("");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default Signup;
