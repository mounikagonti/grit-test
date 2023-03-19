import React from "react";
import { BsEye } from "react-icons/bs";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login_wrapper">
          <div className="login_left">
            <img
              src="https://www.gritdigitech.com/assets/img/study/student-login1.svg"
              alt="loginImg"
            />
          </div>
          <div className="login_right">
            <div className="login_right_content">
              <h1>Welcome Back !!</h1>
              <p className="login_text">Please enter your email and password</p>
              <div className="input_wrapper">
                <input type="text" placeholder="Email" />
              </div>
              <div className="input_wrapper">
                <input type="text" placeholder="Password" />
                <BsEye />
              </div>
              <div className="input_wrapper">
                <button>Login</button>
              </div>
              <div className="login_btm_wrapper">
                <div className="login_btm_left">
                  <input type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">Remember Me</label>
                </div>
                <a href="javascript:void(0)" className="login_btm_right">
                  Forgot Password
                </a>
              </div>
              <div className="no_account">
                <p>
                  Don't Have an Account
                  <a href="javascript:void(0)">Create One</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
