import styles from "../styles/Register.module.css";

//custom component
import Input from "../components/input";
import React, { useState } from "react";
import Button from "../components/button";

// default components
import Link from "next/link";
import Dropdown, { DropdownMenu, DropdownToggle } from "../components/dropdown";
import { ChevronDown } from "react-feather";

const Register = () => {
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
              <div className="col">
                <Input
                  label="Full Name"
                  required
                  alert="Inter your full name"
                />
                <Dropdown float="bottom" dd_menu={styles.__dd_menu}>
                  <DropdownToggle>
                    <div className={styles.__gander_input}>
                      <Input label="Gander" required readonly/>
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
                        <li>Male</li>
                        <li>Female</li>
                      </ul>
                    </div>
                  </DropdownMenu>
                </Dropdown>
                <Input label="Phone Number" required alert="Inter password" />
              </div>

              <div className="col">
                <Input label="Password" required alert="Inter password" />
                <Input
                  label="Confirm Password"
                  required
                  alert="Inter password"
                />
                <div className={styles.__reg_term}>
                  <input type="checkbox" className="me-2" /> I accept all Terms
                  {"&"} Condition
                </div>
                <Button className="col-12"> Register </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
