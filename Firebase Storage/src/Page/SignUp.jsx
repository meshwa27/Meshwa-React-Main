import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Service/Firebase';


const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Your Account is Created...");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={(e) => handlesubmit(e)}>
        <h2>Sign Up</h2>
        <p>Create your account. It's free and only takes a minute.</p>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Your Email..."
        /><br /><br />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password..."
          />
          <button type="button" className="toggle-password-btn" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <br /><br />
        <input type="submit" className="submit-btn" />
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
