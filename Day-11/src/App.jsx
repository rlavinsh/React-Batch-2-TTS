import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  //https://blog.logrocket.com/react-toastify-guide/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleContact(e) {
    setContact(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !contact || !password) {
      toast.error("all fields are required");
    } else {
      console.log({ name, email, password, contact });
      toast.success("Form Data Submitted");
      setName("");
      setEmail("");
      setContact("");
      setPassword("");
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <label htmlFor="">Contact Number:</label>
        <input
          type="text"
          placeholder="Enter your Contact Number"
          value={contact}
          onChange={handleContact}
        />
        <br />
        <br />
        <label htmlFor="">Enter Password:</label>
        <input
          type="text"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <button>Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default App;
