module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/shafiee-lab/'
        : '/'

    ,
    devServer: {
        disableHostCheck: true
    }
}