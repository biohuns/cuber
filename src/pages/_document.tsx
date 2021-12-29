import { Head, Html, Main, NextScript } from "next/document";

export default function CustomDocument() {
  return (
    <Html>
      <Head>
        {/* Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"crossorigin"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
