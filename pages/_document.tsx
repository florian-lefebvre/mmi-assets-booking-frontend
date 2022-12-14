import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="scroll-pt-14 scroll-smooth antialiased selection:bg-primary-500 selection:text-white"
      lang="fr"
    >
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <body className="flex min-h-screen flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
