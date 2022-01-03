import { Head, Html, Main, NextScript } from "next/document";

const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL;
const appName = "CubeStats";
const themeColor = "#202527";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Icon */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* PWA */}
        <meta name="theme-color" content={themeColor} />
        <meta name="application-name" content={appName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={appName} />
        {/* <meta name='description' content='Best PWA App in the world' /> */}
        {/* <meta name='format-detection' content='telephone=no' /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta name='msapplication-config' content='/icons/browserconfig.xml' /> */}
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="manifest" href="/manifest.webmanifest" />

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

        {/* <!-- apple splash screen images -->
        <!--
        <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
        --> */}

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
