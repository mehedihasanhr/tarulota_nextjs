//css
import styles from "./accordion.module.css";

//default components
import Link from "next/link";

//icons
import { ChevronDown, ChevronRight } from "react-feather";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Accordion {
  head: string;
  items: { title: string; path: string }[];
  show: boolean;
  onClick: Function;
}

const Accordion = ({ head, items, show=false, onClick }: Accordion) => {

  const [height, setHeight] = useState<number>(0)
  const ARef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(show === true){
      if(ARef.current){
        setHeight(ARef.current.scrollHeight);
      }
    }else{
      setHeight(0);
    }
  }, [show])



  return (
    <div className={styles.__accordion}>
      <div
        className={`${styles.__accordion_head} ${
          show === true && styles.__active
        }`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => onClick()}
      >
        {head}
        {show ? (
          <ChevronDown strokeWidth={1} width={18} />
        ) : (
          <ChevronRight strokeWidth={1} width={18} />
        )}
      </div>
        <div className={`${styles.__accordion_items}`} ref={ARef} style={{height: height+'px'}}>
          <ul className={styles.__lists}>
            {items.map((item, idx) => (
              <li className={styles.__list} key={idx}>
                <Link href={item.path}>
                  <a className={styles.__list_link}> - {item.title} </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Accordion;
