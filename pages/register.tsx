import styles from "../styles/Register.module.css";

//custom component
import Input from "../components/input";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/button";

// default components
import Link from "next/link";
import Dropdown, { DropdownMenu, DropdownToggle } from "../components/dropdown";
import { ChevronDown } from "react-feather";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [usernameErr, setUsernameErr] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneErr, setPhoneErr] = useState<string>("");
  const [gander, setGander] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [ageErr, setAgeErr] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passErr, setPassErr] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [cpasserr, setCpassErr] = useState<string>("");
  const [condition, setCondition] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);


  // handle submit button disable 
  useEffect(()=>{
    setDisable(!condition);
  }, [condition])


  // handle username
  useEffect(() => {
    var regName = /^[a-zA-Z\s]+$/;
    if (username.length > 0) {
      if (!regName.test(username)) {
        setUsernameErr(
          "Name must be alphabate. Number (0-9) & Special Character (ex: - _ .) isn't allow"
        );
      } else {
        setUsernameErr("");
      }
    } else {
      setUsernameErr("");
    }
  }, [username]);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  // handle phone number
  useEffect(() => {
    var phn = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
    if (phone.length === 11) {
      if (phone.match(phn)) {
        setPhoneErr("");
      } else {
        setPhoneErr("Number isn't valid");
      }
    }
  }, [phone]);

  const phoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!disable) {
      console.log(
        "Name: " +
          username +
          "\nGander: " +
          gander +
          "\nPhone: " +
          phone +
          "\npassword: " +
          password + 
          "\nAge: " +
          age
      );
    }
  };

  return (
    <div className="container">
      <div className={styles.__register}>
        <div className={styles.__register_form}>
          <div className={styles.__form_header}>
            Registation Form
            <span className={styles.__login}>
              Have you an account?
              <Link href="/login">
                <a> Login </a>
              </Link>
            </span>
          </div>
          <form action="">
            <div className="row">
              <div className="col-md-6 col ">
                <Input
                  label="Full Name"
                  required
                  alert={usernameErr}
                  value={username}
                  placeholder="Ex: Sameul Islam Simu"
                  onChange={handleUsername}
                />
                <div className="row">
                  <div className="col">
                  <Dropdown float="bottom" dd_menu={styles.__dd_menu}>
                  <DropdownToggle>
                    <div className={styles.__gander_input}>
                      <Input
                        label="Gander"
                        required
                        readonly
                        value={gander}
                        placeholder="Select Your Gander"
                      />
                      <ChevronDown
                        strokeWidth={1}
                        width={16}
                        className={`${styles.__arrow_icon}`}
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <div className={styles.__gander}>
                      <ul>
                        <li onClick={(e) => setGander("Male")}>Male</li>
                        <li onClick={(e) => setGander("Female")}>Female</li>
                      </ul>
                    </div>
                  </DropdownMenu>
                </Dropdown>
                  </div>
                  <div className="col-4">
                  <Input
                  label="Age"
                  required
                  value={age}
                  alert={ageErr}
                  placeholder="Ex: 20"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setAge(e.target.value)}
                />
                  </div>
                </div>
                <Input
                  label="Phone Number"
                  required
                  value={phone}
                  alert={phoneErr}
                  placeholder="Ex: 01XXXXXXXXX"
                  onChange={phoneNumber}
                />
              </div>

              <div className="col-md-6 ">
                <Input
                  type="password"
                  label="Password"
                  required
                  alert={passErr}
                  value={password}
                  onChange={handlePassword}
                />
                <Input
                  label="Confirm Password"
                  required
                  type="password"
                  alert={cpasserr}
                  value={cpassword}
                  onChange={handleCpass}
                />
                <div className={styles.__reg_term}>
                  <input
                    type="checkbox"
                    className="me-2"
                    defaultChecked={condition}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCondition(e.target.checked)
                    }
                  />
                  I accept all Terms
                  {" &"} Condition
                </div>
                <Button
                  disable={disable}
                  className="col-12"
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
