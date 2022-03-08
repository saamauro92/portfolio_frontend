import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;500&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
          ></link>

          <script
            async
            src="https://kit.fontawesome.com/7b8f9cbbbf.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
