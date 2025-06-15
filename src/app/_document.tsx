import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add module/nomodule pattern for optimal browser support */}
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              // Mark document as using modules for feature detection
              document.documentElement.dataset.jsModule = '';
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 