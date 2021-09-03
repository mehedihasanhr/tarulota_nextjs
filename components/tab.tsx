import React, { useState, useEffect } from "react";
import styles from "./tab.module.css";

interface tab {
  children: any;
  label: string;
}

interface tabs {
  children: any;
  className?: string;
}

export const Tab = (props: tab) => {
  return <> {props.children? props.children : null} </>;
};

const Tabs = ({ children, className }: tabs) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [buttons, setButtons] = useState<string[]>([]);

  useEffect(() => {
    let btnGroup: string[] = [];
    children.map((child: { props: { label: string } }) =>
      btnGroup.push(child.props.label)
    );
    setButtons(btnGroup);
    return () => setButtons([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    idx: number
  ) => {
    e.preventDefault();
    setActiveTab(idx);
  };

  return (
    <div>
      <div className={styles.__tab_buttons}>
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={`${styles.__tab_btn} ${className}  ${
              idx === activeTab && styles.__active
            }`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleTabChange(e, idx)
            }
          >
            {btn}
          </button>
        ))}
      </div>
      <div className={styles.__tab_body}>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
