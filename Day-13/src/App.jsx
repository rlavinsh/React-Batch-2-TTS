import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rollNo: "",
    contact: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    city: "",
  });

  function formDataHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function skillsHandler(e) {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, e.target.value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== e.target.value),
      });
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    console.log("Student Details:", formData);
    alert("Registration successful!");
    setFormData({
      fullName: "",
      email: "",
      rollNo: "",
      contact: "",
      password: "",
      confirmPassword: "",
      gender: "",
      skills: [],
      city: "",
    });
  }

  function resetHandler() {
    setFormData({
      fullName: "",
      email: "",
      rollNo: "",
      contact: "",
      password: "",
      confirmPassword: "",
      gender: "",
      skills: [],
      city: "",
    });
  }

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={submitHandler}>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={formDataHandler}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={formDataHandler}
        />
        <br />
        <br />
        <label>Roll No:</label>
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={formDataHandler}
        />
        <br />
        <br />
        <label>Contact:</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={formDataHandler}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={formDataHandler}
        />
        <br />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={formDataHandler}
        />
        <br />
        <br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={formDataHandler}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={formDataHandler}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={formData.gender === "Other"}
          onChange={formDataHandler}
        />
        Other
        <br />
        <br />
        <label>Skills:</label>
        <input
          type="checkbox"
          name="skills"
          value="HTML"
          checked={formData.skills.includes("HTML")}
          onChange={skillsHandler}
        />
        HTML
        <input
          type="checkbox"
          name="skills"
          value="CSS"
          checked={formData.skills.includes("CSS")}
          onChange={skillsHandler}
        />
        CSS
        <input
          type="checkbox"
          name="skills"
          value="JavaScript"
          checked={formData.skills.includes("JavaScript")}
          onChange={skillsHandler}
        />
        JavaScript
        <input
          type="checkbox"
          name="skills"
          value="React"
          // checked={formData.skills.includes("React")}
          onChange={skillsHandler}
        />
        React
        <br />
        <br />
        <label>City:</label>
        <select name="city" value={formData.city} onChange={formDataHandler}>
          <option value="">Select City</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Gwalior">Gwalior</option>
          <option value="Agra">Agra</option>
          <option value="Indore">Indore</option>
        </select>
        <br />
        <br />
        <button type="submit">Register</button>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Live Preview</h2>

      <div>
        <h3>Student Details</h3>

        <p>
          <strong>Full Name:</strong> {formData.fullName}
        </p>

        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <p>
          <strong>Roll No:</strong> {formData.rollNo}
        </p>

        <p>
          <strong>Contact:</strong> {formData.contact}
        </p>

        <p>
          <strong>Password:</strong> {formData.password}
        </p>

        <p>
          <strong>Confirm Password:</strong> {formData.confirmPassword}
        </p>

        <p>
          <strong>Gender:</strong> {formData.gender}
        </p>

        <p>
          <strong>Skills:</strong> {formData.skills.join(", ")}
        </p>

        <p>
          <strong>City:</strong> {formData.city}
        </p>
      </div>
    </div>
  );
}

export default App;
