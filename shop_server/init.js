const mongoose= require('mongoose');
const db = 'mongodb://localhost/shop';

//引入schema
const glob = require('glob');
const path = require('path');
exports.initSchema = ()=>{
    glob.sync(path.resolve(__dirname,'.model','*.js')).forEach(require);
};

//连结数据库方法
exports.connect=()=>{
    //连接数据库
    mongoose.connect(db,{useNewUrlParser:true});
    //监听数据库连接
    mongoose.connection.on('disconnectd',()=>{
        mongoose.connect(db);
    });
    //数据库出现错误
    mongoose.connection.on('error',err=>{
        console.log(err);
        mongoose.connect(db);
    });
    
    //连接的时候
    mongoose.connection.once('open',()=>{
        console.log('mongodb connected success');
    });
};