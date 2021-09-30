import styles from "../styles/fg-pass.module.css";
import Input from "../components/input";
import Button from "../components/button";
import React, { useEffect, useState } from "react";

const ForgetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [passErr, setPassErr] = useState<string>("");
  const [cPassErr, setCpassErr] = useState<string>("");
  const [err, setErr] = useState<string>("");

  //handle password
  useEffect(() => {
    if (password.length < 8 && password.length > 0) {
      setPassErr("Passwords must be more than eight-letter");
    } else {
      setPassErr("");
    }
  }, [password]);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  //handle confirm password
  useEffect(() => {
    if (cpassword.length > 0) {
      if (cpassword === password) {
        setCpassErr("");
      } else {
        setCpassErr("Password not match");
      }
    }
  }, [cpassword, password]);

  const handleCpass = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCpassword(e.target.value);
  };

  // handle Submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className={styles.__wrapper}>
        <div className={styles.__form_wrapper}>
          <div className={styles.__header}> Verify your phone number </div>
          {err && (
            <div className={styles.__alert}>Phone Number is incorrent</div>
          )}
          <form action="" className={styles.__form}>
            <Input
              type="text"
              label="Password"
              value={password}
              alert={passErr}
              onChange={handlePassword}
              placeholder="Ex: 01XXX-XXXXXX"
            />
            <Input
              type="text"
              label="Confirm Password"
              value={cpassword}
              onChange={handleCpass}
              alert={cPassErr}
              placeholder="Ex: 01XXX-XXXXXX"
            />
            <Button className={styles.__verify_phone} onClick={handleSubmit}>
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
