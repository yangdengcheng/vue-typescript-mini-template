const path = require('path')
const DEV_PORT = 8001
const GZIP_STATUS = true
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// Gzip压缩的文件后缀
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
    productionSourceMap: false,
    devServer: {
        port: DEV_PORT,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/styles/_variables.scss')
            ]
        }
    },
    configureWebpack: config => {
        const plugins = []
        if (process.env.NODE_ENV !== 'development' && GZIP_STATUS) {
            plugins.push(
                new CompressionWebpackPlugin({
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
        }
        config.plugins = [...config.plugins, ...plugins]
    },
    chainWebpack(config) {
        config
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-eval-source-map')
            )
        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial'
                                },
                                elementUI: {
                                    name: 'chunk-elementUI',
                                    priority: 20,
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ //
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: path.resolve(__dirname, 'src/components'),
                                    minChunks: 3,
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                    config.optimization.runtimeChunk('single')
                }
            )
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
            .end()
        config.optimization.minimize(true);
        config.optimization.splitChunks({
            chunks: 'all'
        });
    }
}
