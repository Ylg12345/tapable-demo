const Compiler = require('./complier');
const MockWebpackPlugin = require('./mock-webpack-plugin');

const complier = new Compiler({
  plugins: [
    new MockWebpackPlugin(),
  ]
});

complier.run();