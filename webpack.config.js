const path = require("path")
const webpack = require("webpack")

module.exports = {
    // entry point is the root of the bundle & beginning of the dependency graph
    // gives the relative path to the client's code
    entry: './assets/js/script.js',
    // will output the code to a folder we specify
    // common & best practice to put code in a folder called dist(distribution)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // allows for webpack to use jquery
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    // will provide the mode in which we want webpack to run
    // default will be production mode
    mode: 'development'
}