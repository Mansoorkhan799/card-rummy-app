module.exports = {
  compress: {
    ecma: 2020,
    pure_getters: true,
    passes: 3,
    unsafe_math: true,
    unsafe_methods: true,
    unsafe_proto: true,
    drop_console: true,
    drop_debugger: true,
  },
  mangle: {
    safari10: false,
    reserved: [],
  },
  format: {
    comments: false,
    ecma: 2020,
    safari10: false,
    webkit: false,
  },
  ecma: 2020,
  module: true,
  toplevel: true,
  sourceMap: false,
}; 