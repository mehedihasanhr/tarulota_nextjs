import styles from "../styles/mycart.module.css";
import Image from "next/image";
import Link from "next/link";
import Quantity from "./quantity";
import { useState } from "react";
import { Trash } from "react-feather";

interface TCartItem {
  pid: number;
  photoUrl: string;
  title: string;
  quantity: number;
  price: number;
  discount: number;
  addPrice: Function;
  removePrice: Function;
  DeviceSize: number;
}

const CartItem = ({
  pid,
  photoUrl,
  title,
  quantity = 1,
  price,
  discount,
  addPrice,
  removePrice,
  DeviceSize,
}: TCartItem) => {
  const [qnt, setQnt] = useState<number>(quantity);

  //handle add value
  const addValue = () => {
    setQnt(qnt + 1);
    let t = price - (price * discount) / 100;
    addPrice(t);
  };

  //handle less value
  const lessValue = () => {
    setQnt(qnt - 1);
    let t = price - (price * discount) / 100;
    removePrice(t);
  };

  return DeviceSize > 768 ? (
    <div className={styles.__table_body}>
      <div className={`${styles.__td} ${styles.__td_1}`}>
        {photoUrl && (
          <Image src={photoUrl} alt={title} width={40} height={50} />
        )}
      </div>
      <div className={`${styles.__td} ${styles.__td_2}`}>
        <Link href={`/book/${pid}/${title.replace(/\s/g, "-")}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className={`${styles.__td} ${styles.__td_3}`}>
        <Quantity value={qnt} addValue={addValue} lessValue={lessValue} />
      </div>
      <div className={`${styles.__td} ${styles.__td_4}`}>৳ {price}</div>
      <div className={`${styles.__td} ${styles.__td_5}`}>{discount}%</div>
      <div className={`${styles.__td} ${styles.__td_6}`}>
        ৳ {(price - (price * discount) / 100) * qnt}
      </div>
      <button className={styles.__delete_cart}>
        <Trash width={14} className={`${styles.__delete_cart_icon} mb-2`} />
      </button>
    </div>
  ) : (
    <div className={styles.__table_body}>
      <div className={`${styles.__td} ${styles.__td_1}`}>
        {photoUrl && (
          <Image src={photoUrl} alt={title} width={40} height={50} />
        )}
      </div>
      <div className={`${styles.__td} ${styles.__td_2}`}>
        <Link href={`/book/${pid}/${title.replace(/\s/g, "-")}`}>
          <a className={styles.__product_title}>{title}</a>
        </Link>

        <Quantity value={qnt} addValue={addValue} lessValue={lessValue} />
      </div>
      <button className={styles.__delete_cart}>
        <Trash width={14} className={`${styles.__delete_cart_icon} ${styles.__delete_cart_icon_mb} mb-2 `} />
      </button>
      <div className={`${styles.__td} ${styles.__td_6}`}>
        ৳ {(price - (price * discount) / 100) * qnt} <p>({discount}% ছাড়ে)</p>
      </div>
    </div>
  );
};

export default CartItem;
