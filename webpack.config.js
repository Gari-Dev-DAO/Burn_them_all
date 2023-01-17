const webpack = require('webpack');
const fs = require("fs");
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                 test: /\.(js)$/,
                type: "javascript/auto",
              },
              {
                test: /\.(js)$/,
                resolve: {
                  fullySpecified: false,
                },
              },
           
        ],
    }
}