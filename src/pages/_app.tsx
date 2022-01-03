import Head from "next/head";
import { setAppElement } from "react-modal";
import "../../node_modules/destyle.css";
import { settingsContext, useSettings } from "../hooks/settings";
import "../styles/globals.css";

setAppElement("#__next");

export default function App({ Component, pageProps }) {
  const settingsContextValue = useSettings();

  return (
    <>
      <Head>
        <title>CubeStats</title>
      </Head>
      <settingsContext.Provider value={settingsContextValue}>
        <Component {...pageProps} />
      </settingsContext.Provider>
    </>
  );
}
