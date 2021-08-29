import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

// default components
import Head from 'next/head';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title> Tarulota.com || Home </title>
        <link rel="icon" href="/fav-icon.svg" />
      </Head>
    </>
  )
}

export default Home
