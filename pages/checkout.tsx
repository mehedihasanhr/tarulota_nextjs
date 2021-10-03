import React, { useState } from "react";
import Input from "../components/input";
import Dropdown, { DropdownToggle, DropdownMenu } from "../components/dropdown";
import styles from "../styles/Checkout.module.css";
import { ChevronDown } from "react-feather";
import Districts from "../utilites/districts.json";
import CustomScrollbar from "../components/customScroll";
import Button from "../components/button";

interface tstep {
  icon?: string;
  title?: string;
  isComplete?: boolean;
  active?: boolean;
}

// checkout step
const Step = ({ icon, title, isComplete, active }: tstep) => {
  return (
    <div
      className={`${styles.__step} ${active && styles.active}`}
      data-iscomplete={isComplete ? isComplete : false}
    >
      {icon && <i className={icon}></i>}
      <span className={styles.__step_text}>{title ? title : "untitle"}</span>
    </div>
  );
};

// shipping address info
interface tship {
  goNext?: Function;
}
const ShippingAddress = ({ goNext }: tship) => {
  const [district, setDistrict] = useState<string>("");

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goNext && goNext(true);
  };

  return (
    <div className="row py-3">
      <div className="col-12">
        <div className={styles.__shipping_info}>
          <Input label="Phone" placeholder="Phone" />
          <Dropdown dd_menu={styles.__districts}>
            <DropdownToggle>
              <div className={styles.__district}>
                <Input
                  label="District"
                  readonly={true}
                  value={district}
                  placeholder="Select your District"
                />
                <ChevronDown
                  width={16}
                  strokeWidth={1}
                  className={styles.__arrow}
                />
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <div className={styles.__district_list}>
                <CustomScrollbar height={300}>
                  <ul>
                    {Districts.map((item, index) => (
                      <li
                        className={styles.__list_menu}
                        key={index}
                        onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                          setDistrict(item)
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CustomScrollbar>
              </div>
            </DropdownMenu>
          </Dropdown>

          <Input label="Zip Code" placeholder="Zip Code" />

          <div className={styles.__form_group}>
            <label htmlFor=""> Home Address </label>
            <textarea
              className={styles.__textArea}
              placeholder="Khailkur, National University"
            ></textarea>
          </div>
          <Button className={styles.__next_btn} onClick={handleOnClick}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

// Payment Method
interface tpay {
  goPrev?: Function;
  goNext?: Function;
}
const PaymentMethod = ({ goPrev, goNext }: tpay) => {
  const handleGoPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goPrev && goPrev(false);
  };

  const handleGoNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goNext && goNext(true);
  };

  return (
    <>
      <div className={styles.__payment_method}>
        <span className={styles.__payment_text}>
          Only Cash on Delivery is Available
        </span>
      </div>

      <div className="d-flex align-items-center justify-content-between pt-3">
        <Button onClick={handleGoPrev}> Previous </Button>
        <Button className={styles.__next_btn} onClick={handleGoNext}>
          Next
        </Button>
      </div>
    </>
  );
};

// confirm order
interface tconf {
  goPrev?: Function;
}
const ConfirmOrder = ({ goPrev }: tconf) => {
  const handleGoPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goPrev && goPrev(false);
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-6">
            <div className="py-3">
              <span className={styles.__confirm_order_header}>
                Shipping Address
              </span>
              <p className={styles.__confirm_order_address}>
                Khailkur, Board Bazar, National University, Gazipur - 1704
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="py-3">
              <span className={styles.__confirm_order_header}>Phone</span>
              <p className={styles.__confirm_order_address}>01518-309205</p>
            </div>
          </div>
        </div>

        <div className={styles.__total_sub_price}>
          <div className="d-flex align-items-center justify-content-between">
            <p className="py-0 my-0">Sub-Total</p>
            <span>৳ 1000</span>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <p className="py-0 my-0">Shipping Cost</p>
            <span>৳ 50</span>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <p className="py-0 my-0">Wrap</p>
            <span>৳ 20</span>
          </div>
        </div>

        <div className={styles.__total_price}>
          <div className="d-flex align-items-center justify-content-between">
            <p className="py-0 my-0">Total</p>
            <span>৳ 1070</span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between pt-3">
          <Button onClick={handleGoPrev}> Previous </Button>
          <Button className={styles.__next_btn}> Confirm Order </Button>
        </div>
      </div>
    </>
  );
};

// checkout
const Checkout = () => {
  const [confirmShippingAddress, setConfirmShippingAddress] =
    useState<boolean>(false);

  const [confirmPayment, setConfirmPayment] = useState<boolean>(false);
  return (
    <div className="container">
      <div className={styles.__checkout_wrapper}>
        <div className={styles.__checkout_form_wrapper}>
          {/* shipping step */}
          <div className={styles.__checkout_step}>
            <Step
              icon="bi bi-info-circle-fill"
              title="Shipping Details"
              active={true}
              isComplete={confirmShippingAddress}
            />
            <Step
              icon="bi bi-credit-card-2-front-fill"
              title="Payment Method"
              active={confirmShippingAddress}
              isComplete={confirmPayment}
            />
            <Step
              icon="bi bi-cart-check-fill"
              title="Confirm Order"
              active={confirmPayment}
            />
          </div>

          {/* shipping Address info */}
          {!confirmShippingAddress ? (
            <ShippingAddress goNext={setConfirmShippingAddress} />
          ) : !confirmPayment ? (
            <PaymentMethod
              goNext={setConfirmPayment}
              goPrev={setConfirmShippingAddress}
            />
          ) : (
            <ConfirmOrder goPrev={setConfirmPayment} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
