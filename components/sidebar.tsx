//css
import styles from "./sidebar.module.css";
//icons
import { X } from "react-feather";
//utilities
import { MenuItems } from "../utilites/menuItem";
import Accordion from "./accordion";
import React from "react";
import { useState } from "react";


interface Sidebar{
  show: boolean;
  onClick?: Function;
}



const Sidebar = ({show, onClick}:Sidebar) => {
  const [showMenuID, setShowMenuID] = useState<number>(0);

  return (
    <div className={`${styles.__sidebar_wrapper} ${show && styles.__active}`}>
      <div className={styles.__header}>
        All Category
        <button
          role="button"
          aria-label="closeSidebar"
          className={styles.__close_btn}
          onClick={(e:React.MouseEvent<HTMLButtonElement>)=> onClick!==undefined && onClick(e)}
        >
          <X strokeWidth={1} width={18} className={styles.__close_icon} />
        </button>
      </div>

      <div className={styles.__menu_list}>
        {MenuItems.map((el, idx) => (
          <Accordion
            key={idx}
            show={showMenuID === idx ? true : false}
            head={el.head}
            items={el.items}
            onClick={(e:React.MouseEvent<HTMLDivElement>)=> setShowMenuID(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
