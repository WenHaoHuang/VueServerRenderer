const utils = require('./utils')
const isProd = process.env.NODE_ENV != 'dev'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProd,
        extract: isProd
    }),
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ],
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
