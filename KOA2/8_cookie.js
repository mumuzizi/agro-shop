const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    if(ctx.url === '/program'){
        ctx.cookies.set(
            'name','lixin',{
                domain:'localhost',
                path:'/program',
                maxAge:24*60*60*1000,
                expires:new Date('2019-3-24'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body='cookies success';
    }else{
        ctx.body='no cookie';
    }
});

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
});