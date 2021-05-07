import A from "./A";

import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <title>TCP Market</title>
        <meta name="description" content="TCP Market" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="img/favicon.png" />
        <meta property="og:image" content="img/@1x/preview.jpg" />
        <link
          rel="stylesheet"
          href="libs/owl-carousel/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="libs/owl-carousel/css/owl.theme.default.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"
        ></script>
        <script src="libs/owl-carousel/js/owl.carousel.min.js"></script>
      </Head>

      <div>{children}</div>
    </>
  );
};

export default MainContainer;
