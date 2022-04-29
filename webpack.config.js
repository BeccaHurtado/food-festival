const path = require("path")
const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    // entry point is the root of the bundle & beginning of the dependency graph
    // gives the relative path to the client's code
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/assets/events.js",
        schedule: "./assets/js/assets/schedule.js",
        tickets: "./assets/js/assets/tickets.js"
    },
    // will output the code to a folder we specify
    // common & best practice to put code in a folder called dist(distribution)
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
                // will identify the type of files to pre=process using the test property to find a regular expression, or regex. In this case, we are trying to process any image with the file extension of .jpg
                test: /\.jpg$/i,
                // where the actual loader is implemented
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    // allows for webpack to use jquery
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML in the dist folder
        })
    ],
    // will provide the mode in which we want webpack to run
    // default will be production mode
    mode: 'development'
}