module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            esmodules: true
          },
          // Explicitly exclude transformations for features that modern browsers support
          exclude: [
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-transform-spread',
            '@babel/plugin-transform-destructuring',
            '@babel/plugin-transform-template-literals',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-parameters'
          ],
          // Don't add polyfills automatically
          useBuiltIns: false,
          // Skip core-js polyfill injections
          corejs: false,
        },
      }
    ]
  ],
  plugins: [
    // Keep styled-components transform
    ['styled-components', { ssr: true, displayName: true }]
  ]
}; 