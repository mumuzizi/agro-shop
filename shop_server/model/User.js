const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//建立模型在index.js里引入
const userSchema = new Schema({
    userId:Schema.Types.ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createDate:{type:Date,default:Date.now()}
});

//加盐加密,在保存进数据库前给数据库加盐加密
userSchema.pre('save',function(next){//因为要用this,所以不能使用箭头函数
    //随机生成salt 10指的是迭代次数
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err);
            this.password=hash;
            next();
        });
    });
});

userSchema.methods = {
    //比较用户登录的密码在不在数据库里，因为数据库里的密码是加盐加密的，所以要使用此方法
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}

//发布模型
mongoose.model('User',userSchema);