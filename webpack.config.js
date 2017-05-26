module.exports = {
    entry : {
        index : './src/js/index.js'
    },
    output : {
        path : __dirname + './static/',
        filename: '[name].js',
        publicPath : 'http://localhost:8080/static'
    },
    module:{
        loaders : [{
            test : /\.js$/,
            loader : 'babel-loader',
            exclude : /node_modules/,
            query: {
                presets : ['react', 'es2015']
            }   
        },{
            test : /\.less$/,
            loader :  'style-loader!css-loader!less-loader'
        },{
            test : /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=./[name].[ext]'  
       }]
    }
}