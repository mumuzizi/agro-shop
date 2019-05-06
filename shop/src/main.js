import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'


// vant 完全引入  
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant); 

//按需引入 推荐使用这种方法
import { List,PullRefresh,Row, Col,Toast,Button,Icon,NavBar,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload,Tab, Tabs,CellGroup,Field,Cell,Tag} from 'vant';
Vue.use(List).use(PullRefresh).use(Row).use(Col).use(Toast).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Cell).use(Tag)
.use(Lazyload).use(Tab).use(Tabs).use(CellGroup).use(Field);

import '@/mock/mock.js';



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
