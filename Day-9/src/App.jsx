import React, { useState } from "react";

const App = () => {
  const [showPassword, setShowPassword] = useState(true);
  function handlePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <label>Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter the Password"
      />
      <br />
      <br />
      <button onClick={handlePassword}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default App;
