//css
import React, { useState } from "react";
import styles from "./dropdown.module.css";

interface Dropdown {
  float: string;
  children: {}[];
}

interface props {
  children: any;
}

export const DropdownToggle: React.FC<props> = ({ children }) => {
  return children;
};

export const DropdownMenu: React.FC<props> = ({ children }) => {
  return children;
};

const Dropdown: React.FC<Dropdown> = ({ float, children }) => {
  const [show, setShow] = useState<boolean>(false);

  const showDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShow(true);
  };

  const hideDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className={styles.__dropdown} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
      <div className={styles.__dropdown_toggle} onClick={showDropdown}>
        {children[0]}
      </div>
      {show && (
        <div
          className={`
                    ${styles.__dropdown_menu}
                    ${float === "top" && styles.__top}
                    ${float === "right" && styles.__right}
                    ${float === "bottom" && styles.__bottom}
                    ${float === "left" && styles.__left}
                `}
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
