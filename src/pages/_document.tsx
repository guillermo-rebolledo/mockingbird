import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Transform your text into a mocking style with Mockingbird."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mockingbird-three.vercel.app/"
        />
        <meta
          property="og:title"
          content="Mockingbird - Text Mocking Generator"
        />
        <meta
          property="og:description"
          content="Transform your text into a mocking style with Mockingbird."
        />
        <meta
          property="og:image"
          content="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦜</text></svg>"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:url"
          content="https://mockingbird-three.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Mockingbird - Text Mocking Generator"
        />
        <meta
          property="twitter:description"
          content="Transform your text into a mocking style with Mockingbird."
        />
        <meta
          property="twitter:image"
          content="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦜</text></svg>"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦜</text></svg>"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
