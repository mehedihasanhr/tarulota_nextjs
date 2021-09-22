import styles from "../styles/Login.module.css";

//custom component
import Input from "../components/input";
import React, { useState } from "react";
import Button from "../components/button";

// default components
import Link from "next/link";

const Login = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>("");

  // handle submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("phone:" + phone + ", password:" + password);
  };

  // phone number
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  // Password
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className={styles.__login_container}>
        <div className={styles.__wrapper}>
          <div className={styles.__form_header}>Login to tarulota</div>
          {err && (
            <div className={`${styles.__alert}`}>
              Phone No or Password is incorrect
            </div>
          )}
          <form action="">
            <Input
              type="text"
              label="Phone Number"
              value={phone}
              onChange={handlePhone}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={handlePassword}
            />

            <div className={styles.__remember_me}>
              <input type="checkbox" className="me-2" />
              Remember me
            </div>

            <div className={styles.__login_btn_con}>
              <Button className={styles.__login_btn} onClick={handleSubmit}>
                Login
              </Button>
            </div>

            <div className={styles.__forget_section}>
              <Link href="/forget-pass">
                <a href=""> Forget Password?</a>
              </Link>
              <Link href="/register">
                <a href=""> Create Account</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
