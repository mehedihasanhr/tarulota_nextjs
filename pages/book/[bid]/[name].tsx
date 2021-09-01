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
import React, { useState } from "react";
import { useEffect } from "react";
import { ParsedUrlQuery } from "querystring";

//custom components

//utilites
import books from "../../../utilites/book.json";
import { ChevronDown, ChevronsUp, ChevronUp } from "react-feather";

interface Params extends ParsedUrlQuery {
  bid: string | string[];
  name: string;
}

interface TProduct {
  pid: number;
  p_name: string;
  auth: {
    name: string;
    photo: string;
    about: string | string[];
  };
  category: string;
  publication: string;
  rating: number;
  price: number;
  discount: number;
  quantity: number;
  language: string;
  p_img: string;
  discription?: {
    header?: string;
    text?: string | string[];
  };
  reviews?: {
    total_ratings?: number;
    total_reviews?: number;
    total_rating: number;
    review?: {
      photoUrl?: string;
      displayName?: string;
      reviewDate?: string;
      reviewText?: string;
    }[];
  };
}

const Details = () => {
  const [product, setProduct] = useState<TProduct>();
  const [qnt, setQnt] = useState<number>(0);
  const route = useRouter();
  let { bid } = route.query as Params;
  const price:number = product!==undefined ? product.price : 0 ;
  const discount = product!==undefined? product.discount: 0;


  useEffect(() => {
    GetProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bid]);


  //set default qnt
  useEffect(()=>{
    product && setQnt( product.quantity);
  }, [product])

  // get product
  const GetProduct = () => {
    let idx = books.findIndex((el) => el.pid.toString() === bid);
    setProduct(books[idx]);
  };

  //handle qnt on change
  const handleQntChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQnt(parseInt(e.target.value));
  }

  //add qnt
  const addQnt = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setQnt(qnt + 1);
  }

  //remove qnt
  const removeQnt = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    if(qnt === 1){
      setQnt(qnt);
    }else{
      setQnt(qnt - 1);
    }
  }
  

  // console.log(product);
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

              <div className={styles.__product_details}>
                <span className="me-2">লেখকঃ</span>
                {product?.auth.name}
              </div>

              <div className={styles.__product_details}>
                <span className="me-2">বিষয়ঃ</span>
                {product?.category}
              </div>

              <div className={styles.__product_details}>
                <span className="me-2">প্রকাশনীঃ</span>
                {product?.publication}
              </div>
                
              <div className={styles.__product_details}>
                <span className="me-2">Rating: </span>
                {product?.rating}
              </div>

              {
                discount > 0 && 
                <div className={styles.__product_details}>
                  <span className="me-2">মুদ্রিত মূল্যঃ </span>
                  ৳ {price}
                </div>
              }

              <div className={styles.__product_details}>
                <span className="me-2">মূল্যঃ </span>
                <p className={`m-0 p-0`}>
                  ৳ {price - price * discount /100}
                  {discount > 0 && <sub> ( {discount } ছাড়ে )</sub>}
                </p>
              </div>

              <div className={`${styles.__product_details} py-2`}>
                <span className="me-2">বই সংখ্যাঃ </span>
                <div className={styles.__qantity}>
                  <input type="text" className={styles.__qantity_num} value={qnt<10 ? `0`+qnt : qnt} onChange={handleQntChange}/>
                  <div className="pb-2 mb-1 pe-1">
                    <button className={styles.__less_btn} onClick={addQnt}> <ChevronUp strokeWidth={1} width={16} /> </button>
                    <button className={styles.__more_btn} onClick={removeQnt} > <ChevronDown strokeWidth={1} width={16} /> </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// interface Params extends ParsedUrlQuery {
//   bid: string,
//   name: string,
// }

// interface iPath{
//   pid: number;
//   p_name: string;
// }

// export const getStaticPaths: GetStaticPaths = async() => {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://localhost:3000/api/books');
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map(({pid, p_name}:iPath) => ({
//     params: { bid: pid.toString(), name: p_name },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({params}) => {
//   const {bid} = params as Params;
//   const res = await fetch(`http://localhost:3000/api/book/${bid}`,{method: 'GET'})
//   const data = await res.json()

//   return{
//     props: {
//       data
//     }
//   }
// }

export default Details;
