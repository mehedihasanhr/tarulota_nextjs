//default components
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

// css
import styles from "./navbar.module.css";

//icons
import { Heart, Menu, Search, ShoppingCart, User, X } from "react-feather";

//custom components
import SearchBox from "./search";
import Nav from "./nav";
import { Logo } from "./logo";
import Badge from "./badge";
import MSearch from "./mSeach";

//utilites
import { NavItems } from "../utilites/navItems";
import Dropdown, { DropdownMenu, DropdownToggle } from "./dropdown";

interface Navbar {
  showMenu?: Function;
}

const Navbar = ({ showMenu }: Navbar) => {
  const [show, setShow] = useState(false);

  const showSearchBar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleSideBar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showMenu !== undefined && showMenu(e);
  };

  return (
    <div className={styles.__header}>
      <div className="container">
        <div className={styles.__wrapper}>
          <button
            aria-label="menubtn"
            className={styles.__menu_btn}
            onClick={handleSideBar}
          >
            <Menu className={styles.__menu_icon} />
          </button>

          <div className={styles.__logo}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>

          <SearchBox className={styles.__search} />

          <Nav elements={NavItems} className={styles.__nav_item} />

          <div className={styles.__action}>
            {show ? (
              <Link href="/">
                <a
                  aria-label="SearchIcon"
                  className={styles.__msearch}
                  target="_blank"
                  onClick={showSearchBar}
                >
                  <X strokeWidth={2} className={styles.__fav_icon} />
                </a>
              </Link>
            ) : (
              <Link href="/">
                <a
                  aria-label="SearchIcon"
                  className={styles.__msearch}
                  target="_blank"
                  onClick={showSearchBar}
                >
                  <Search strokeWidth={2} className={styles.__fav_icon} />
                </a>
              </Link>
            )}

            <Link href="/favourite">
              <a aria-label="HeartIcon" className={styles.__fav}>
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
            <Dropdown className="ms-2" dd_menu={styles.__profile} float="">
              <DropdownToggle>
                <div className={styles.__profile_dropdown}>
                  {/* <span>S</span> */}
                  <Image
                    src="/images/shimu.jpg"
                    alt="S"
                    width={100}
                    height={100}
                  />
                </div>
              </DropdownToggle>
              <DropdownMenu>
                <ul className={styles.__profile_dropdown_menu}>
                  <li className={styles.__profile_dropdown_item}>
                    <Link href="/profile">
                      <a className={styles.__profile_link}>Profile</a>
                    </Link>
                  </li>
                  <li className={styles.__profile_dropdown_item}>
                    <Link href="/profile/orders">
                      <a className={styles.__profile_link}>My Orders</a>
                    </Link>
                  </li>
                  <li className={styles.__profile_dropdown_item}>
                    <Link href="/profile/wishlist">
                      <a className={styles.__profile_link}>My WishList</a>
                    </Link>
                  </li>
                  <li className={styles.__profile_dropdown_item}>
                    <Link href="/profile">
                      <a className={styles.__profile_link}>Log Out</a>
                    </Link>
                  </li>
                </ul>
              </DropdownMenu>
            </Dropdown>
          </div>

          <MSearch show={show} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
