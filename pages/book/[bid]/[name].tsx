//css
import styles from "../../../styles/Details.module.css";

//icons

// default components
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { ParsedUrlQuery } from "querystring";

//custom components

//utilites

interface Details{
  data: {}[],
}

const Details = ({data}:Details) => {

  console.log(data)


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Tarulota.com || Details </title>
        <link rel="icon" href="/fav-icon.svg" />
      </Head>

      <div className="container py-4">

      </div>
    </>
  );
};


interface Params extends ParsedUrlQuery {
  bid: string,
  name: string,
}



export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {bid} = params as Params;
  const res = await fetch(`http://localhost:3000/api/book/${bid}`,{method: 'GET'})
  const data = await res.json()

  return{
    props: {
      data
    }
  }
}



export default Details;
