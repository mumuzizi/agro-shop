<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card v-for="(item, index) in pruductList" :key="index" :price="item.price" :desc="item.company" :title="item.name" :thumb="item.img">
          <div slot="footer">
            <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
    </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      pruductList: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice(){
        return this.pruductList.reduce((sum, elem)=>{
            sum += elem.price;
            return sum;
        }, 0) * 10 * 10;
    }
  },
  created() {
    // 验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          for (let item of res.data) {
            this.pruductList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
      onSubmit(){
          this.$toast.success('进入付款页面');
      },
      delCart(id, index){
          axios({
            url:url.delCart,
            method:'get',
            params:{
              productId:id
            }
          }).then(res=>{
            console.log(res);
            this.pruductList.splice(index, 1);
          }).catch(err=>{
            console.log(err);
            
          })
          
      }
  }
};
</script>

<style lang="scss">
.submit-bar{
    margin-bottom: 1rem;
}
</style>

