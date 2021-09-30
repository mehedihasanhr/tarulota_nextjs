import { Download, Edit3, Printer, Trash } from "react-feather";
import styles from "./invoicecart.module.css";
import Link from "next/link";

const InvoiceCart = () => {
  return (
    <div className={styles.__wrapper}>
      <div className={styles.__invoice}>
        <Link href="/">
          <a>32340323043 </a>
        </Link>
        <span>30/09/2021</span>
      </div>
      <div className={styles.__item}>
        <span> ৳ 1000 </span> 3 items
      </div>
      <div className={styles.__price}> ৳ 1000 </div>
      <div className={styles.__status}>
        {/* <span className={styles.__panding}>Panding</span> */}
        {/* <span className={styles.__shipping}>Shipping</span> */}
        <span className={styles.__completed}>Completed</span>
      </div>
      <div className={styles.__actions}>
        {/* <span className={styles.__panding}>Panding</span> */}
        {/* <span className={styles.__shipping}>Shipping</span> */}
        <span className={styles.__completed}>Completed</span>
        <div>
          <Link href="/">
            <a className={styles.__action_btn}>
              <Edit3 width={18} strokeWidth={1.5} />
            </a>
          </Link>

          <Link href="/">
            <a className={styles.__action_btn}>
              <Printer width={18} strokeWidth={1.5} />
            </a>
          </Link>

          <Link href="/">
            <a className={`${styles.__action_btn} ${styles.__download}`}>
              <Download width={18} strokeWidth={1.5} />
            </a>
          </Link>

          <Link href="/">
            <a className={`${styles.__action_btn} ${styles.__cencel}`}>
              <Trash width={18} strokeWidth={1.5} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCart;
