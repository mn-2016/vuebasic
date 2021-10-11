module.exports = { // webpack遵循commonjs规范，vue采用es6模块语法
    pages: {
        index: {
            entry: 'src/main.js', // 入口
        }
    },
    lintOnSave: false, // 关闭语法检查
    // 开启代理服务器(方式一)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },
    devServer: {  // 开启方式二
        open: true, //是否启动打开浏览器
        proxy:{
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/api':''},
                ws: true, // 用于支持websocket
                changeOrigin: true // 隐藏自身
            }
        }
    }
}