module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/shafiee-lab-vue/'
        : '/'

    ,
    devServer: {
        disableHostCheck: true
    }
}