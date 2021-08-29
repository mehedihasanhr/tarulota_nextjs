import { useState } from "react";
import { useEffect, useRef } from "react";
import { Search } from "react-feather";
import styles from "./mSearch.module.css";

interface Msearch {
  className?: string;
  show: boolean;
}

const MobileSearchOption = ({ className, show = false }: Msearch) => {
    const [showSearch, setShowSearch] = useState(false);


  const AutoFocus = useRef<HTMLInputElement>(null);

  useEffect(()=>{
      setShowSearch(show);
  }, [show])

  useEffect(() => {
    if (showSearch) {
      if (AutoFocus.current) {
        AutoFocus.current.focus();
      }
    }
  }, [showSearch]);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        setShowSearch(false)
    })
 }, [])


 console.log(showSearch)

  return showSearch ? (
    <div className={`${styles.__search} ${className}`} >
      <input
        type="text"
        className={styles.__input}
        placeholder="Search here..."
        ref={AutoFocus}
      />
      <button className={styles.__search_btn}>
        <Search strokeWidth={2} width={20} className={styles.__search_icon} />
      </button>
    </div>
  ) : null;
};

export default MobileSearchOption;
