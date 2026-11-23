import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const correctOtp = 2244;
  const enteredOtp = otp1 + otp2 + otp3 + otp4;

  useEffect(() => {
    if (enteredOtp.length != 4) {
      return;
    } else if (enteredOtp == correctOtp) {
      // User ko navigate karo dashboard page par
      setTimeout(() => {
        navigate("/dashboard", { state: { firstName: "Lavinsh" } });
        toast.success("User Login");
      }, 1000);
    } else {
      console.log("Incorrect Otp");
      toast.error("Incorrect OTP");
    }
  }, [enteredOtp]);

  return (
    <div className="container">
      <div className="otp-box">
        <h2>OTP Verification</h2>

        <p>Enter 4 digit OTP</p>

        <div className="otp-inputs">
          <input
            type="text"
            maxLength="1"
            value={otp1}
            onChange={(e) => {
              setOtp1(e.target.value);
            }}
          />

          <input
            type="text"
            maxLength="1"
            value={otp2}
            onChange={(e) => {
              setOtp2(e.target.value);
            }}
          />

          <input
            type="text"
            maxLength="1"
            value={otp3}
            onChange={(e) => {
              setOtp3(e.target.value);
            }}
          />

          <input
            type="text"
            maxLength="1"
            value={otp4}
            onChange={(e) => {
              setOtp4(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
