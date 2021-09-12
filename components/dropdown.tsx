//css
import React, { useState } from "react";
import styles from "./dropdown.module.css";

interface Dropdown {
  float?: string;
  hover?: boolean;
  dd_troggle?:string;
  dd_menu?:string;
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

const Dropdown: React.FC<Dropdown> = ({ float='left', children, hover, dd_troggle, dd_menu  }) => {
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
    <div
      className={styles.__dropdown}
      onMouseEnter={hover ? showDropdown : undefined}
      onMouseLeave={hideDropdown}
    >
      <div className={`${styles.__dropdown_toggle} ${dd_troggle}`} onClick={showDropdown}>
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
                    ${dd_menu}
                `}
          onClick={hideDropdown}
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
