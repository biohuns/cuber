import Head from "next/head";
import { setAppElement } from "react-modal";
import "../../node_modules/destyle.css";
import Header from "../components/Header";
import "../styles/globals.css";

setAppElement("#__next");

export default function App({ Component, pageProps }) {
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
