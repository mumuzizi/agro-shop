const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/name',(ctx,next)=>{
    ctx.body = ctx.query;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx=>{

});

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
})