import { Layers, LogOut, X } from "react-feather";
import styles from "./phonemenu.module.css";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const PhoneMenu = () => {
  const [show, setShow] = useState<boolean>(false);

  // show
  const Show = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(true);
  };

  // hide
  const Hide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className={styles.__p_menu} >
      <div className={styles.__p_menu_con}>
        {show ? (
          <button
            aria-label="hideBtn"
            className={styles.__p_menu_btn}
            onClick={Hide}
          >
            <X strokeWidth={2} width={18} />
          </button>
        ) : (
          <button
            aria-label="showBtn"
            className={styles.__p_menu_btn}
            onClick={Show}
          >
            <Layers strokeWidth={2} width={18} />
          </button>
        )}
        {show && (
          <div className={styles.__p_menu_list} onClick={(e:React.MouseEvent<HTMLDivElement>)=> setShow(false)}>
            <ul>
              <li>
                <Link href="/">
                  <a className={styles.__quick_link}>
                    <i className="bi bi-house-fill"></i> Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a className={styles.__quick_link}>
                    <i className="bi bi-person-fill"></i> Login
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a className={styles.__quick_link}>
                    <i className="bi bi-person-plus-fill"></i> Register
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a className={styles.__quick_link}>
                    <i className="bi bi-person-fill"></i> Account
                  </a>
                </Link>
              </li>
              <li className={styles.__logout}>
                <Link href="/logout">
                  <a className={styles.__quick_link_logout}>
                    <LogOut width={14} /> Log out
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default PhoneMenu;
