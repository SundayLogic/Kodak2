import type { NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "../components/templates/HomeTemplate";
const Home: NextPage = () => {
  return (
    <div className="h-screen text-white bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default Home;
