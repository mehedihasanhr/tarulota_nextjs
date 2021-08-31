//css
import styles from "./sidebar.module.css";
//icons
import { X } from "react-feather";
//utilities
import { MenuItems } from "../utilites/menuItem";
import Accordion from "./accordion";
import React, { useRef } from "react";
import { useState } from "react";

interface Sidebar {
  show: boolean;
  onClick?: Function;
}


const Sidebar = ({ show, onClick }: Sidebar) => {
  const [showMenuID, setShowMenuID] = useState<number>(0);

  //sidebar ref
  const sidebarRef = useRef<HTMLDivElement>(null);

  //close sidebar if outside click
  const handleOutsideClick = (e:React.MouseEvent<HTMLDivElement>) =>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target as Element)){
        onClick !== undefined && onClick(e)
    }
  }

  return (
    <div className={`${styles.__sidebar} ${show && styles.__active}`} onMouseDown={handleOutsideClick}>
      <div className={`${styles.__sidebar_wrapper} ${show && styles.__active}`} ref={sidebarRef}>
        <div className={styles.__header}>
          All Category
          <button
            role="button"
            aria-label="closeSidebar"
            className={styles.__close_btn}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onClick !== undefined && onClick(e)
            }
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
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                setShowMenuID(idx)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
