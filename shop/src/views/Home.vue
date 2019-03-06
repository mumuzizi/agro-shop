<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot">
      <p>热门商品</p>
      <swipe class="hot-swiper">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img src="item.img" alt="">
            <div>{{item.name}}</div>
            <div>￥{{item.price}}</div>
          </div>
        </swiper-slide>
      </swipe>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components:{
    swiper,
    swiperSlide
  },
  data(){
    return{
      carouselItem:[//轮播图
        {
          name:'img1',
          imgSrc:'http://img4.imgtn.bdimg.com/it/u=1499449960,258662022&fm=26&gp=0.jpg'
        },{
          name:'img2',
          imgSrc:'http://img4.imgtn.bdimg.com/it/u=617807445,2167604749&fm=26&gp=0.jpg'
        },{
          name:'img3',
          imgSrc:'http://img3.imgtn.bdimg.com/it/u=3368870595,2751063532&fm=26&gp=0.jpg'
        }
      ],
      hotProducts:[//热门商品

      ]
    }
  }
}

</script>

<style lang="scss">
.carousel{
  height: 6rem;
  &-item{
    img{
      width: 100%;
      height:12rem;
    }
  }
}
</style>
