import styles from "./review.module.css";
import Image from "next/image";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

interface TReview {
  photoUrl: string;
  displayName: string;
  reviewDate: string;
  reviewText: string;
}

export const Review = ({
  photoUrl,
  displayName,
  reviewDate,
  reviewText,
}: TReview) => {
  const [useStyle, setUseStyle] = useState({ height: "105px" });
  const [showBtn, setShowBtn] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);

  let Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (Ref.current) {
      if (Ref.current.scrollHeight > Ref.current.offsetHeight) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }
  }, [deviceWidth]);

  useEffect(() => {
    window.addEventListener("resize", getDeviceWidth);
    return () => window.removeEventListener("resize", getDeviceWidth);
  }, []);

  const getDeviceWidth = () => {
    setDeviceWidth(window.innerWidth);
  };

  const show = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Ref.current) {
      let Y = Ref.current.scrollHeight;
      let H = Ref.current.offsetHeight;
      if (Y > H) {
        setUseStyle({
          height: Y + "px",
        });
      }
      setShowBtn(false);
    }
  };

  return (
    <div className={styles.review}>
      <div className="row">
        <div className="col-xl-2 col-md-3">
          <div className={styles._reviewer_profile}>
            <div className={styles._reviewer_img}>
              <Image
                src={photoUrl}
                alt=""
                width={60}
                height={60}
                className={styles._img}
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", margin: "0px" }}>{displayName}</p>
              <p style={{ fontSize: "13px", margin: "0px" }}> {reviewDate} </p>
            </div>
          </div>
        </div>

        <div className="col-xl-10 col-md-9">
          <div
            className={`${styles.__review_body}`}
            style={useStyle}
            ref={Ref}
          >
            {reviewText}
          </div>
          {showBtn === true ? (
          <button className={styles._see_more_btn} onClick={show}>
            See More...
          </button>
        ) : null}
        </div>
        
      </div>
    </div>
  );
};
