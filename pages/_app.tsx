import Head from "next/head";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cuber</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
