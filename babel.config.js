module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: { 
            browsers: [
              '> 0.5%',
              'not dead',
              'not IE 11',
              'not Opera Mini all',
              'supports es6-module'
            ]
          },
          // Exclude only the most fundamental transformations
          exclude: [
            '@babel/plugin-transform-regenerator',
            '@babel/plugin-transform-async-to-generator'
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