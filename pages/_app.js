import React from "react";
import Head from "next/head";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon mask-icon"
          href="https://cdn.auth0.com/website/auth0_favicon.svg"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href="https://cdn.auth0.com/website/new-homepage/dark-favicon.png"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Learn how to add user authentication to Next.js apps easily."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter&family=Space+Grotesk&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter&family=Space+Grotesk&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <title>Auth0 Next.js Sample</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
