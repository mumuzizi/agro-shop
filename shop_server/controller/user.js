const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser',async (ctx)=>{
    //获取model
    const User = mongoose.model("User");
    //接收post请求封装成user对象
    let newUser = new User(ctx.request.body);
    //使用save保存用户信息
    await newUser.save().then(()=>{
        ctx.body = {
            code:200,
            message:'注册成功'
        };
    }).catch(err=>{
        ctx.body={
            code:500,
            message:err
        };
    });
});

router.post('/loginUser',async (ctx)=>{
    //接收前端传来的数据
    let loginUser = ctx.request.body;
    let userName = loginUser. userName;
    let Password = loginUser.passWord;

    //引入model 因为要在数据库里查找和比对
    const User = mongoose.model('User');

    //查询用户名是否存在 存在再去比对密码
    await User.findOne({userName:userName}).exec().then(async (result)=>{//exec()返回的是数组
        if(result){
            let newUser = new User();
            await newUser.comparePassword(passWord,result.password).then(isMatch=>{
                //登录成功
                if(isMatch){
                    ctx.body = {
                        code:200,
                        message:"登录成功",
                        userInfo:result
                    };
                }else{
                    //登陆失败
                    ctx.body = {
                        code:201,
                        message:'登录失败'
                    };
                };
            });
        }else{
            ctx.body ={
                code:201,
                message:'用户名不存在'
            };
        };
    });
});

module.exports = router;