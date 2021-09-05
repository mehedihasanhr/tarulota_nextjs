//css
import styles from "../../../styles/Details.module.css";

//icons

// default components
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import type { GetServerSideProps, GetStaticPaths } from "next";
// import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { ParsedUrlQuery } from "querystring";

//custom components
import { Rating } from "../../../components/rating";
import Button from "../../../components/button";
//utilites
import books from "../../../utilites/book.json";
import { ChevronDown, ChevronsUp, ChevronUp } from "react-feather";
import Tabs, { Tab } from "../../../components/tab";
import { Review } from "../../../components/review";
import MultiCarousel from "../../../components/multiCarousel";
import Cart from "../../../components/cart";

interface Params extends ParsedUrlQuery {
  bid: string | string[];
  name: string;
}

interface productDetails {
  label: string;
  children: any;
}

interface productQuntity {
  handleQntChange: Function;
  addQnt: Function;
  removeQnt: Function;
  qnt: number;
}

interface TProduct {
  pid: number;
  p_name: string;
  auth: {
    name: string;
    photo: string;
    about: string[];
  };
  category: string;
  publication: string;
  rating: number;
  price: number;
  discount: number;
  quantity: number;
  language: string;
  p_img: string;
  description?: {
    header?: string;
    text?: string[];
  };
  reviews?: {
    total_ratings?: number;
    total_reviews?: number;
    total_rating: number;
    review?: {
      photoUrl: string;
      displayName: string;
      reviewDate: string;
      reviewText: string;
    }[];
  };
  specification?: {
    header: string;
    text: string;
  }[];
}

const Details = () => {
  const [product, setProduct] = useState<TProduct>();
  const [qnt, setQnt] = useState<number>(0);
  const route = useRouter();
  let { bid } = route.query as Params;
  const price: number = product !== undefined ? product.price : 0;
  const discount = product !== undefined ? product.discount : 0;

  useEffect(() => {
    GetProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bid]);

  //set default qnt
  useEffect(() => {
    product && setQnt(product.quantity);
  }, [product]);

  // get product
  const GetProduct = () => {
    let idx = books.findIndex((el) => el.pid.toString() === bid);
    setProduct(books[idx]);
  };

  //handle qnt on change
  const handleQntChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQnt(parseInt(e.target.value));
  };

  //add qnt
  const addQnt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQnt(qnt + 1);
  };

  //remove qnt
  const removeQnt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (qnt === 1) {
      setQnt(qnt);
    } else {
      setQnt(qnt - 1);
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Tarulota.com || Details </title>
        <link rel="icon" href="/fav-icon.svg" />
      </Head>

      <div className="container">
        {/* topsection */}
        <div className={styles.__top_section}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-12 p-0 d-flex align-items-center justify-content-center">
              {product && (
                <div className={styles.__product_img}>
                  <Image
                    src={product && product.p_img}
                    alt={`${product && product.pid}`}
                    width={200}
                    height={280}
                  />
                </div>
              )}
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-12">
              <h4 className={styles.__product_title}> {product?.p_name} </h4>

              <ProductDetails label="লেখকঃ">
                {product?.auth.name}
              </ProductDetails>
              <ProductDetails label="বিষয়ঃ">{product?.category}</ProductDetails>
              <ProductDetails label="প্রকাশনীঃ">
                {product?.publication}
              </ProductDetails>
              <ProductDetails label="Rating:">
                <Rating rating={product?.rating} />
              </ProductDetails>

              {discount > 0 && (
                <ProductDetails label="মুদ্রিত মূল্যঃ">
                  ৳ {price}
                </ProductDetails>
              )}

              <ProductDetails label="মূল্যঃ">
                <p className={`m-0 p-0`}>
                  ৳ {price - (price * discount) / 100}
                  {discount > 0 && <sub> ( {discount}% ছাড়ে )</sub>}
                </p>
              </ProductDetails>

              <ProductDetails label="বই সংখ্যাঃ">
                <ProductQuantity
                  handleQntChange={handleQntChange}
                  addQnt={addQnt}
                  removeQnt={removeQnt}
                  qnt={qnt}
                />
              </ProductDetails>

              <div className={styles.__btn_group}>
                <Button verient="primary" className={`${styles.__btn} me-2`}>
                  Add to cart
                </Button>
                <Button verient="secondary" className={styles.__btn}>
                  Add to wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* end top section */}
        {/* description section */}
        <div className={styles.__descript}>
          <div className={styles.__section_header}> Product Specification </div>
          <Tabs className={styles.__tab_header}>
            <Tab label="Description">
              <ProductDescription product={product} />
            </Tab>
            <Tab label="Specification">
              <ProductSpec specification={product?.specification} />
            </Tab>
            <Tab label="Author">
              <AuthDetails product={product} />
            </Tab>
          </Tabs>
        </div>
        {/* description end */}

        {/* rating & reviews section */}
        <div className={styles.__descript}>
          <div className={styles.__section_header}> Ratings {"&"} Reviews </div>
          <div className={styles.__rs_header}>
            <div className={styles.__total_rating}>
              <h1>
                {product?.reviews?.total_rating}
                <sub>/5</sub>
              </h1>
              <span className={styles.__mb_rating}>
                <Rating rating={product?.reviews?.total_rating} />
              </span>
            </div>
            <div className={styles.__ratings_and_reviews}>
              <p>
                {product?.reviews?.total_ratings} Ratings {"&"}
                {product?.reviews?.total_reviews} Reviews
              </p>
              <Rating rating={product?.reviews?.total_rating} />
            </div>
            <div className={styles.__login}>
              <Link href="/login">
                <a className={styles.__r_login_btn}>Login</a>
              </Link>
              <p>to write review</p>
            </div>
          </div>
          <div>
            {product?.reviews?.review?.map((el, idx) => (
              <Review
                key={idx}
                photoUrl={el.photoUrl}
                displayName={el.displayName}
                reviewDate={el.reviewDate}
                reviewText={el.reviewText}
              />
            ))}
          </div>
        </div>
        {/* rating & reviews section end*/}

        {/* Recently Sold Products*/}
        <div className={`${styles.__descript} ${styles.__recently_visited}`}>
          <div className={styles.__section_header}> Recently sold products</div>
          <MultiCarousel>
            {books?.map((items) => (
              <div className={styles.__recently_visited_cart} key={items.pid}>
                <Cart
                  title={items.p_name}
                  thumbnails={items.p_img}
                  price={items.price}
                  discount={items.discount}
                  subtitle={items.auth.name}
                  url={`/book/${items.pid}/${items.p_name.replace(/\s/g, "-")}`}
                />
              </div>
            ))}
          </MultiCarousel>
        </div>
        {/* Recently sold products end */}
      </div>
    </>
  );
};

const ProductQuantity = ({
  handleQntChange,
  addQnt,
  removeQnt,
  qnt,
}: productQuntity) => {
  return (
    <div className="d-flex align-items-center">
      <div className={styles.__qantity}>
        <input
          type="text"
          className={styles.__qantity_num}
          value={qnt < 10 ? `0` + qnt : qnt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleQntChange(e)
          }
        />
        <div className="pb-2 mb-1 pe-1">
          <button
            className={styles.__less_btn}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => addQnt(e)}
          >
            <ChevronUp strokeWidth={1} width={16} />
          </button>
          <button
            className={styles.__more_btn}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeQnt(e)}
          >
            <ChevronDown strokeWidth={1} width={16} />
          </button>
        </div>
      </div>
      <i className={`m-0 p-0 ms-3`}>In Stoke 48 items</i>
    </div>
  );
};

//product specification
const ProductSpec = ({ specification }: any) => {
  return (
    <div className={styles.__product_spec}>
      <table className={styles.__spec_table}>
        <tbody>
          {specification.map((spec: any, idx: string) => (
            <tr key={idx}>
              <td className={styles.__spec_header}>{spec.header}</td>
              <td className={styles.__spec_text}>{spec.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

//product details
const ProductDetails = ({ label, children }: productDetails) => {
  return (
    <div className={styles.__product_details}>
      <span className="me-2">{label}</span>
      {children}
    </div>
  );
};

//product description
const ProductDescription = ({ product }: any) => {
  return (
    <div className={styles.__product_description}>
      <h6>{product?.description?.header}</h6>
      {product?.description?.text?.map((txt: string, idx: number) => (
        <p key={idx}> {txt} </p>
      ))}
    </div>
  );
};

//auth details
const AuthDetails = ({ product }: any) => {
  const [seeMore, setSeeMore] = useState<boolean>(true);

  let authRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authRef !== null && authRef.current !== null) {
      if (authRef.current.scrollHeight > 300) {
        setSeeMore(true);
      }
    }
  }, []);

  return (
    <div className={styles.__auth_details}>
      {product !== undefined && (
        <div className={styles.__auth_img_wrapper}>
          <Image
            src={product?.auth.photo}
            alt={product?.auth.name}
            width={100}
            height={100}
            className={styles.__auth_img}
          />
        </div>
      )}

      <div className={styles.__auth_profile}>
        <h6>{product?.auth.name}</h6>
        <div ref={authRef} className={styles._auth_details_con}>
          {product?.auth.about.map((txt: string, idx: number) => (
            <p key={idx}> {txt} </p>
          ))}
        </div>
        {seeMore && (
          <Link href="/">
            <a className={styles.__see_more_auth_details}>See more...</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Details;
