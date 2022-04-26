const path = require("path");
// const BundleAnalyzerPlugin =
//    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
   entry: "./main.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
   },
   mode: "development",
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: ["css-loader", "sass-loader"],
            //   note bahwa style.loader tidak ada di registry kenapa ya?:v
         },
      ],
   },
   //  plugins: [new BundleAnalyzerPlugin()],
   devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 9000,
   },
};
