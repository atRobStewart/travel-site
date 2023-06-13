const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry:'./app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        open: ['http://localhost:3000/'],
        watchFiles: {
            paths: ['./app/**/*.html'],
        },
        static:  {
        directory: path.join(__dirname, 'app')  
        },
        
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    // watch: true, (no longer needed with devServer watching for changes instead)
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}

// Cannot GET /app/**/*.html
//css-loader?url=false doesn't like the ?url=false
