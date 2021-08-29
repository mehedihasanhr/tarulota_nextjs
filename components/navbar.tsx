//default components
import Link from "next/link";
import { useState } from "react";

// css
import styles from "./navbar.module.css";

//icons
import { Heart, Menu, Search, ShoppingCart, User } from "react-feather";

//custom components
import SearchBox from "./search";
import Nav from "./nav";
import { Logo } from "./logo";
import Badge from "./badge";
import MSearch from './mSeach';

//utilites
import { NavItems } from "../utilites/navItems";

const Navbar = () => {

  const [show, setShow] = useState(false);


  const showSearchBar = (e) =>{
    e.preventDefault();
    setShow(!show);
  }


  return (
    <header>
      <div className={styles.__header}>
        <div className="container">
          <div className={styles.__wrapper}>
            <button className={styles.__menu_btn}>
              <Menu className={styles.__menu_icon} />
            </button>

            <div className={styles.__logo}>
              <Logo />
            </div>

            <SearchBox className={styles.__search} />

            <Nav elements={NavItems} className={styles.__nav_item} />

            <div className={styles.__action}>
              
              <Link href="/" >
                <a className={styles.__msearch} target="_blanck" onClick={showSearchBar}>
                    <Search strokeWidth={2} className={styles.__fav_icon} />
                </a>
              </Link>

              <Link href="/fav">
                <a className={styles.__profile}>
                    <User strokeWidth={2} className={styles.__fav_icon} />
                </a>
              </Link>

              <Link href="/fav">
                <a className={styles.__fav}>
                  <Badge count={3}>
                    <Heart strokeWidth={2} className={styles.__fav_icon} />
                  </Badge>
                </a>
              </Link>

              <Link href="/cart">
                <a className={styles.__cart}>
                  <Badge count={3}>
                    <ShoppingCart
                      strokeWidth={2}
                      className={styles.__cart_icon}
                    />
                  </Badge>
                  <span className={`${styles.__cart_details} ms-2`}>৳ 1000</span>
                </a>
              </Link>
            </div>

            <MSearch show={show} />

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
