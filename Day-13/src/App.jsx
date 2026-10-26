function App() {
  return (
    <div>
      <h2>Student Registration Form</h2>

      <form>
        <label>Full Name:</label>
        <input type="text" name="fullName" />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <br />
        <label>Roll No:</label>
        <input type="text" name="rollNo" />
        <br />
        <br />
        <label>Contact:</label>
        <input type="tel" name="contact" />
        <br />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <br />
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" />
        <br />
        <br />
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="Other" /> Other
        <br />
        <br />
        <label>Skills:</label>
        <input type="checkbox" name="skills" value="HTML" /> HTML
        <input type="checkbox" name="skills" value="CSS" /> CSS
        <input type="checkbox" name="skills" value="JavaScript" /> JavaScript
        <input type="checkbox" name="skills" value="React" /> React
        <br />
        <br />
        <label>City:</label>
        <select name="city">
          <option value="">Select City</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Gwalior">Gwalior</option>
          <option value="Agra">Agra</option>
          <option value="Indore">Indore</option>
        </select>
        <br />
        <br />
        <button>Register</button>
        <button>Reset</button>
      </form>

      <hr />

      <h2>Live Preview</h2>

      <div>
        <h3>Student Details</h3>

        <p>
          <strong>Full Name:</strong> Rahul Sharma
        </p>
        <p>
          <strong>Email:</strong> rahul@example.com
        </p>
        <p>
          <strong>Roll No:</strong> 101
        </p>
        <p>
          <strong>Contact:</strong> 9876543210
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
        <p>
          <strong>Skills:</strong> HTML, CSS, React
        </p>
        <p>
          <strong>City:</strong> Bhopal
        </p>
      </div>
    </div>
  );
}

export default App;
