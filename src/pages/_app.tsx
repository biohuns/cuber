import Head from "next/head";
import { setAppElement } from "react-modal";
import "../../node_modules/destyle.css";
import Header from "../components/Header";
import { settingsContext, useSettings } from "../hooks/settings";
import "../styles/globals.css";

setAppElement("#__next");

export default function App({ Component, pageProps }) {
  const settingsContextValue = useSettings();
  useDisableBounceScroll();

  return (
    <>
      <Head>
        <title>CubeStats</title>
      </Head>
      <settingsContext.Provider value={settingsContextValue}>
        <Header />
        <Component {...pageProps} />
      </settingsContext.Provider>
    </>
  );
}

function useDisableBounceScroll() {
  if (!process.browser) return;
  document.addEventListener(
    "touchmove",
    (event) => {
      event.preventDefault();
    },
    { passive: false }
  );
}
