import styles from "../styles/mycart.module.css";
import CartItem from "../components/cartItem";
import { CartItems } from "../utilites/cartitem";
import Button from "../components/button";
import React, { useEffect, useState } from "react";

const MyCart = () => {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [shippingCost, setSippingCost] = useState<number>(0);
  const [gift, setGift] = useState<number>(0);
  const [giftCheck, setGiftCheck] = useState<boolean>(false);

  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1680 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  useEffect(() => {
    handleWindowSize();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [windowSize.width]);

  const handleWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  //set price
  useEffect(() => {
    let subtotal = 0;
    CartItems.forEach((item) => {
      let p = item.price;
      let d = item.discount;
      let q = item.quantity;
      let t = q * (p - (p * d) / 100);
      subtotal = subtotal + t;
    });
    setSubTotal(subtotal);
  }, []);

  //handle gift wrap
  const handleGift = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setGiftCheck(false);
      setGift(0);
    } else {
      setGiftCheck(true);
      setGift(20);
    }
  };

  //handle total price
  const addPrice = (add: number) => {
    setSubTotal(subTotal + add);
  };

  const removePrice = (less: number) => {
    setSubTotal(subTotal - less);
  };

  return (
    <div className="container">
      {isLoading ? (
        <h1> Loading </h1>
      ) : (
        <div className={styles.__wrapper}>
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-12  col-12">
              <div className={styles.__table_con}>
                <div className={styles.__header}>
                  My Cart <span>4 items</span>
                </div>
                <div className={styles.__table}>
                  <div className={styles.__table_header}>
                    <div className={`${styles.__th} ${styles.__td_1}`}>
                      Image
                    </div>
                    <div className={`${styles.__th} ${styles.__td_2}`}>
                      Title
                    </div>
                    <div className={`${styles.__th} ${styles.__td_3}`}>
                      Quantity
                    </div>
                    <div className={`${styles.__th} ${styles.__td_4}`}>
                      Price
                    </div>
                    <div className={`${styles.__th} ${styles.__td_5}`}>
                      Discount
                    </div>
                    <div className={`${styles.__th} ${styles.__td_6}`}>
                      Total
                    </div>
                  </div>

                  {CartItems.map((item, idx) => (
                    <CartItem
                      key={idx}
                      pid={item.pid}
                      photoUrl={item.photo}
                      title={item.title}
                      quantity={item.quantity}
                      price={item.price}
                      discount={item.discount}
                      addPrice={addPrice}
                      removePrice={removePrice}
                      DeviceSize={windowSize.width}
                    />
                  ))}
                </div>
                <div className={styles.__mobile_checkout}>
                  <div className={styles.__checkout_wrap}>
                    <div className={styles.__gift}>
                      <input
                        type="checkbox"
                        defaultChecked={giftCheck}
                        onChange={handleGift}
                      />
                      <span className={styles.__gift_txt}>Gift Wrap</span>
                      <span className={styles.__price}>৳ 20</span>
                    </div>

                    <div className={styles.__checkout_item}>
                      <span className={styles.__checkout_item_label}>
                        Sub Total
                      </span>
                      <span className={styles.__price}>৳ {subTotal}</span>
                    </div>

                    <div className={styles.__checkout_item}>
                      <span className={styles.__checkout_item_label}>
                        Shipping Cost
                      </span>
                      <span className={styles.__price}>৳ 50</span>
                    </div>
                    <div className={styles.__checkout_total}>
                      <span className={styles.__checkout_total_label}>
                        Total
                      </span>
                      <span className={styles.__total_price}>
                        ৳ {subTotal + shippingCost + gift}
                      </span>
                    </div>
                    <Button className={styles.__checkout_btn}>
                      {" "}
                      Check out{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col">
              <div className={styles.__checkout}>
                <div className={styles.__gift}>
                  <input
                    type="checkbox"
                    defaultChecked={giftCheck}
                    onChange={handleGift}
                  />
                  <span className={styles.__gift_txt}>Gift Wrap</span>
                  <span className={styles.__price}>৳ 20</span>
                </div>

                <div className={styles.__checkout_item}>
                  <span className={styles.__checkout_item_label}>
                    Sub Total
                  </span>
                  <span className={styles.__price}>৳ {subTotal}</span>
                </div>

                <div className={styles.__checkout_item}>
                  <span className={styles.__checkout_item_label}>
                    Shipping Cost
                  </span>
                  <span className={styles.__price}>৳ 50</span>
                </div>
                <div className={styles.__checkout_total}>
                  <span className={styles.__checkout_total_label}>Total</span>
                  <span className={styles.__total_price}>
                    ৳ {subTotal + shippingCost + gift}
                  </span>
                </div>
                <Button className={styles.__checkout_btn}> Check out </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
