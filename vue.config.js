const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    // baseUrl: './',
    publicPath: './',

    baseUrl: './',

    assetsDir: 'assets',
    // productionGzip: true,
    // productionGzipExtensions: ['js', 'css'],
    // 构建好的文件输出到哪里
    outputDir: 'dist',

    // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    lintOnSave: true,

    // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: true,

    // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
        /* string or regex */
    ],

    // 是否为生产环境构建生成sourceMap?
    productionSourceMap: false,

    // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config
            .entry('index')
            .add('babel-polyfill')
    },

    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
            new CompressionPlugin({
                // gzip压缩配置
                test: /\.js$|\.html$|\.css/, // 匹配文件名
                threshold: 10240, // 对超过10kb的数据进行压缩
                deleteOriginalAssets: false, // 是否删除原文件
            })
            )
        }
    },
    // CSS 相关选项
    css: {
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
        // 也可以是传递给 extract-text-webpack-plugin 的选项对象
        extract: false,

        // 允许生成 CSS source maps?
        sourceMap: false,

        // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
        loaderOptions: {
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: '@import "@/assets/css/element-variables.scss";'
            }
        },

        // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
        modules: false

    }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

    parallel: require('os').cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    pwa: {}, // configure webpack-dev-server behavior

    devServer: {
        open: true,

        disableHostCheck: true,

        host: '0.0.0.0',

        port: 8081,

        https: false,

        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

        // proxy: null
        proxy: {
            '/api': {
                // target: 'http://dc.qcfxp.com/', //
                // target:'http://admin.ycxc.com', //
                target:'http://192.168.1.24:8085', //
                // target:'http://192.168.1.27:8085',
                pathRewrite: {
                    '^/api': '/'
                }, // 代理接口
                changeOrigin: true // 是否开启虚拟服务
            }
        }
        // before: app => {}
    }, // 第三方插件配置

    pluginOptions: {
    }
}
