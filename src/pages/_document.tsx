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
        {/* This script helps remove attributes added by browser extensions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Remove attributes that cause hydration errors
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(function() {
                    const body = document.body;
                    if (body) {
                      // Remove Grammarly extension attributes
                      if (body.hasAttribute('data-new-gr-c-s-check-loaded')) {
                        body.removeAttribute('data-new-gr-c-s-check-loaded');
                      }
                      if (body.hasAttribute('data-gr-ext-installed')) {
                        body.removeAttribute('data-gr-ext-installed');
                      }

                      // Remove other common extension attributes
                      const attributesToRemove = [
                        'data-new-gr-c-s-check-loaded',
                        'data-gr-ext-installed',
                        'data-grammarly-extension',
                        'data-extended',
                        'data-auto-active'
                      ];

                      attributesToRemove.forEach(attr => {
                        if (body.hasAttribute(attr)) {
                          body.removeAttribute(attr);
                        }
                      });

                      // Also look for divs added by extensions and remove them
                      const extensionDivs = document.querySelectorAll('div[data-grammarly-part]');
                      extensionDivs.forEach(div => {
                        div.parentNode?.removeChild(div);
                      });
                    }
                  }, 0);
                });
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 