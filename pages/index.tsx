import type { NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "../components/templates/HomeTemplate";
const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="w-screen h-screen">
        <HomeTemplate />
      </body>
    </div>
  );
};

export default Home;
