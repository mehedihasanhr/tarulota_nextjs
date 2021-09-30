import styles from "../../styles/Profile.module.css";

// default components
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/input";
import Dropdown, {
  DropdownMenu,
  DropdownToggle,
} from "../../components/dropdown";
import { ChevronDown } from "react-feather";
import { useState } from "react";
import Button from "../../components/button";

import { Users } from "../../utilites/users";
import { useRouter } from "next/router";
import InvoiceCart from "../../components/invoiceCart";

const Orders = () => {
  const [name, setName] = useState<string>("Sameul Islam Simu");
  const [email, setEmail] = useState<string>("info@tarulota.com");
  const [gander, setGander] = useState<string>("");

  return (
    <div className="container">
      <div className={styles.__profile}>
        <div className="row">
          <div className={`col-xl-3  ${styles.__menu}`}>
            <div className={styles.__profile_menu}>
              <ul className={styles.__profile_menu_list}>
                <li className={`${styles.__profile_menu_item}`}>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li
                  className={`${styles.__profile_menu_item} ${styles.active}`}
                >
                  <Link href={`/profile/orders`}>
                    <a>Orders</a>
                  </Link>
                </li>
                <li className={styles.__profile_menu_item}>
                  <Link href={`/profile/wishlist`}>
                    <a>WishList</a>
                  </Link>
                </li>
                <li className={styles.__profile_menu_item}>
                  <Link href={`/`}>
                    <a>Logout</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-12">
            <div className={styles.__profile_header}>Orders</div>
            <div className={styles.__orders_wrapper}>
              <div className={styles.__invoice_wrapper}>
                <div className={styles.__invoice}>Invoice ID</div>
                <div className={styles.__item}> Items</div>
                <div className={styles.__price}>Price</div>
                <div className={styles.__status}>Status</div>
                <div className={styles.__actions}>Actions</div>
              </div>
              <div>
                <InvoiceCart />
                <InvoiceCart />
                <InvoiceCart />
                <InvoiceCart />
                <InvoiceCart />
                <InvoiceCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
