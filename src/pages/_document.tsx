import { Head, Html, Main, NextScript } from "next/document";

const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL;
const appName = "CubeStats";
const themeColor = "#202527";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content={appName} />
        {/* <meta name='description' content='Best PWA App in the world' /> */}

        {/* Icon */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* PWA for Chrome */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* PWA for Safari */}
        <meta name="theme-color" content={themeColor} />
        <meta name="apple-mobile-web-app-title" content={appName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link href="/splash.png" rel="apple-touch-startup-image" />

        {/* PWA for Windows */}
        {/* <meta name='msapplication-config' content='/icons/browserconfig.xml' /> */}
        {/* <meta name="msapplication-TileColor" content={themeColor} /> */}
        {/* <meta name="msapplication-tap-highlight" content="no" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={rootUrl} />
        <meta name="twitter:title" content="CubeStats" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content={`${rootUrl}/icons/android-chrome-192x192.png`}
        />
        <meta name="twitter:creator" content="@biohuns" />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CubeStats" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="CubeStats" />
        <meta property="og:url" content={rootUrl} />
        <meta
          property="og:image"
          content={`${rootUrl}/icons/apple-touch-icon.png`}
        />

        {/* Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"crossorigin"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
