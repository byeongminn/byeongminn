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
        <meta property="og:image" content="/assets/meta/og.png" />
        <meta property="og:url" content="https://byeongminn.vercel.app/" />
        <meta name="twitter:title" content="I'M JEON" />
        <meta
          name="twitter:description"
          content="끊임없이 고민하고 배우며 성장하는 프론트엔드 개발자, 전병민 포트폴리오"
        />
        <meta name="twitter:image" content="/assets/meta/og.png" />
        <link rel="icon" sizes="64x64 32x32 24x24 16x16" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />
      </Head>
      <body className="bg-white dark:bg-[#1f1f1f]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
