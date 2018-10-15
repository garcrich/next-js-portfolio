const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withSass({
    webpack: (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
})