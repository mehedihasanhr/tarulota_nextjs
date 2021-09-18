import React, { useEffect, useState } from "react";
import styles from "./checkbox.module.css";

const Checkbox = ({ pid, label,component, onChange, className }: Tcheckbox) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheckbox = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setChecked(!checked);
  };

  useEffect(() => {
    onChange(pid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <label
      htmlFor=""
      className={`${styles.__checkbox_wrapper} ${className}`}
      onClick={handleCheckbox}
    >
      <span className={`${styles.__indicator} ${checked && styles.__active}`}></span>
      <input
        type="checkbox"
        defaultChecked={checked}
        className={styles.__checkbox}
      />
      {label!==undefined && label}
      {component!==undefined && component}
    </label>
  );
};

interface Tcheckbox {
  label?: string;
  pid: number;
  onChange: Function;
  className?: string;
  component?: any;
}

export default Checkbox;
