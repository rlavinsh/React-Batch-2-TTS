const Login = () => {
  return (
    <div className="container">
      <div className="otp-box">
        <h2>OTP Verification</h2>

        <p>Enter 4 digit OTP</p>

        <div className="otp-inputs">
          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />
        </div>
      </div>
    </div>
  );
};

export default Login;
