module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        useBuiltIns: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development' ? true : false,
      },
    ],
  ],
};
