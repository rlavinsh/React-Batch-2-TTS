import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  function handleFirstName() {}

  function handleLastName() {}

  function handleEmail() {}
  function handlePassword() {}

  function handleConfirmPassword() {}

  function handleGender() {}

  function handleCountry() {}

  return (
    <div>
      <form>
        <label>FirstName:</label>
        <input type="text" placeholder="Enter your FirstName" />
        <br />
        <br />
        <label htmlFor="">LastName:</label>
        <input type="text" placeholder="Enter your LastName" />
        <br />
        <br />
        <label htmlFor="">UserEmail:</label>
        <input type="email" placeholder="Enter your Email" />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" placeholder="Enter the Password" />
        <br />
        <br />
        <label htmlFor="">Confirm Password:</label>
        <input type="password" placeholder="Enter the Confirm Password" />
        <br />
        <br />
        <label htmlFor="">Gender:</label>
        <br />
        <label htmlFor="">Male</label>
        <input type="radio" name="gender" />
        <label htmlFor="">Female</label>
        <input type="radio" name="gender" />
        <label htmlFor="">other</label>
        <input type="radio" name="gender" />
        <br />
        <br />
        <select>
          <option value="">select state</option>
          <option value="mp">Madhya Pradesh</option>
          <option value="up">Uttar Pradesh</option>
          <option value="gujrat">Gujrat</option>
          <option value="bihar">Bihar</option>
        </select>
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default App;
