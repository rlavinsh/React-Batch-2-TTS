import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [country, setCountry] = useState("");

  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
  });

  function commonChangeHandler(e) {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  }

  // function handleFirstName(e) {
  //   setFirstName(e.target.value);
  // }

  // function handleLastName(e) {
  //   setLastName(e.target.value);
  // }

  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }
  // function handlePassword(e) {
  //   setPassword(e.target.value);
  // }

  // function handleConfirmPassword(e) {
  //   setConfirmPassword(e.target.value);
  // }

  // function handleGender(e) {
  //   setGender(e.target.value);
  // }

  // function handleCountry(e) {
  //   setCountry(e.target.value);
  // }
  function handleSubmit(e) {
    e.preventDefault();
    // const studentData = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    //   gender,
    //   country,
    // };

    console.log(studentData);
    setStudentData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      country: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>FirstName:</label>
        <input
          type="text"
          placeholder="Enter your FirstName"
          value={studentData.firstName}
          name="firstName"
          onChange={commonChangeHandler}
        />
        <br />
        <br />
        <label htmlFor="">LastName:</label>
        <input
          type="text"
          placeholder="Enter your LastName"
          value={studentData.lastName}
          name="lastName"
          onChange={commonChangeHandler}
        />
        <br />
        <br />
        <label htmlFor="">UserEmail:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={studentData.email}
          name="email"
          onChange={commonChangeHandler}
        />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter the Password"
          value={studentData.password}
          name="password"
          onChange={commonChangeHandler}
        />
        <br />
        <br />
        <label htmlFor="">Confirm Password:</label>
        <input
          type="password"
          placeholder="Enter the Confirm Password"
          value={studentData.confirmPassword}
          name="confirmPassword"
          onChange={commonChangeHandler}
        />
        <br />
        <br />
        <label htmlFor="">Gender:</label>
        <br />
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={commonChangeHandler}
          checked={studentData.gender === "Male"}
        />
        <label htmlFor="">Female</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={commonChangeHandler}
          checked={studentData.gender === "Female"}
        />
        <label htmlFor="">other</label>
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={commonChangeHandler}
          checked={studentData.gender === "Other"}
        />
        <br />
        <br />
        <select onChange={commonChangeHandler} name="country">
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
