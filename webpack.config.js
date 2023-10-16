const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
        path: __dirname + "/public/js/",
        publicPath: "/js/",
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node-modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }

                    },
                    {
                        loader: 'sass-loader'

                    },
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        historyApiFallback: true
    },
    /*externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },*/
    plugins: [
        new CleanWebpackPlugin()
    ]
}