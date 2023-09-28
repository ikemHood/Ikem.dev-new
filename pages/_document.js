import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Ikem Peter - FullStack Web3 Software Developer" />
        <meta name="description" content="Ikem Peter - FullStack Web3 Software Developer" />
        {/* title */}
        <title>Ikem Peter - FullStack Web3 Software Developer</title>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href="assets/img/logo.png" />
        {/* theme css */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
