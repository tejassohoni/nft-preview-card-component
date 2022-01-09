import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className=" bg-mainbg flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Card />
    </div>
  );
}
