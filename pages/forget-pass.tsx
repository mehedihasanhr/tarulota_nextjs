import styles from "../styles/fg-pass.module.css";
import Input from "../components/input";
import Button from "../components/button";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [phone, setPhone] = useState<string>("");

  // handle phone number
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  // handle Submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`Phone: ${phone}`);
  };

  return (
    <div className="container">
      <div className={styles.__wrapper}>
        <div className={styles.__form_wrapper}>
          <div className={styles.__header}> Verify your phone number </div>
          <div className={styles.__alert}>Phone Number is incorrent</div>
          <form action="" className={styles.__form}>
            <Input
              type="text"
              label="Phone Number"
              value={phone}
              onChange={handlePhone}
              placeholder="Ex: 01XXX-XXXXXX"
            />
            <Button className={styles.__verify_phone} onClick={handleSubmit}>
              Verify Phone
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
