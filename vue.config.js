module.exports = {
    publicPath: "./",
    configureWebpack: config => {
        // 为生产环境修改配置...
        if (process.env.NODE_ENV === 'production') {
            //html文件引入绝对地址
            config.output.publicPath = ''
            //不生成.map文件
            config.devtool = false;
        } else {
            // 为开发环境修改配置...

        }
    }
}