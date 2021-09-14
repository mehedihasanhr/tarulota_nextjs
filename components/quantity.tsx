import React from "react";
import { Minus, Plus } from "react-feather";
import styles from "./quantity.module.css";

interface tqantity {
  value: number;
  addValue: Function;
  lessValue: Function;
}

const Quantity = ({ value, addValue, lessValue }: tqantity) => {


    //handle add value
    const handleAddValue = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        addValue();
    }

    //handle less value
    const handleLessValue = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        lessValue();
    }


  return (
    <div className={styles.__quantity}>
      <button className={styles.__quantity_btn} onClick={handleLessValue} >
        <Minus strokeWidth={2} width={14} />
      </button>
      <div className={styles.__quantity_value}>{value < 10 ? `0${value}` : value}</div>
      <button className={styles.__quantity_btn} onClick={handleAddValue} >
        <Plus strokeWidth={2} width={14} />
      </button>
    </div>
  );
};

export default Quantity;
