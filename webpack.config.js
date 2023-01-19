// const webpack = require('webpack');
// module.exports = {
//     entry: './src/index.js',
//     module: {
//         rules: [
//             {
//                  test: /\.(js)$/,
//                 type: "javascript/auto",
//               },
//               {
//                 test: /\.(js)$/,
//                 resolve: {
//                   fullySpecified: false,
//                 },
//               },
           
//         ],
//         resolve: {
//           fallback: {
//               "fs": false
//           },
//     }
   
//   }
// }


// module.exports = {
//   entry: './src/index.js',
//   module: {
//       rules: [
//           {
//               test: /\.(js)$/,
//               exclude: /node_modules/,
//               loader: 'babel-loader',
//               fullySpecified: false,
//           }
//       ],
//   }
// }