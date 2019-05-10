const Koa = require('koa');
const app = new Koa();


// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));


//接收前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');
let product = require('./controller/product.js');
let type = require('./controller/type.js');
let cart = require('./controller/cart');

let router = new Router();
router.use('/user', user.routes());
router.use('/product', product.routes());
router.use('/type', type.routes());
router.use('/cart', cart.routes())

app.use(router.routes());//启动路由,router.routes(name)给定的查找路线name
app.use(router.allowedMethods());
/*
router.allowedMethods()作用：这是官方文档的推荐用法,我们可以
看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
 */


const { connect, initSchemas } = require('./init.js');
(async () => {
    await connect();
    initSchemas();
})();


app.use(async (ctx) => {
    ctx.body = 'hello everybody';
})

app.listen(3000, () => {
    console.log('start shop server');
});

