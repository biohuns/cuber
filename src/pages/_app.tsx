import Head from "next/head";
import "../../node_modules/destyle.css";
import Header from "../components/Header";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CubeStats</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
