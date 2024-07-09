import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="끊임없이 고민하고 배우며 성장하는 프론트엔드 개발자, 전병민 포트폴리오"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="I'M JEON" />
        <meta property="og:site_name" content="I'M JEON" />
        <meta
          property="og:description"
          content="끊임없이 고민하고 배우며 성장하는 프론트엔드 개발자, 전병민 포트폴리오"
        />
        <meta property="og:image" content="%PUBLIC_URL%/assets/meta/og.png" />
        <meta
          property="og:url"
          content="https://byeongminn.github.io/byeongminn/"
        />
        <meta name="twitter:title" content="I'M JEON" />
        <meta
          name="twitter:description"
          content="끊임없이 고민하고 배우며 성장하는 프론트엔드 개발자, 전병민 포트폴리오"
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/assets/meta/og.png" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>
      <body className="bg-white dark:bg-[#1f1f1f]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
