<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <!-- cell单元格 -->
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <!-- required是必须填的意思 -->
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
          <van-field label="密码" type='password' required clearable placeholder="请输入密码" v-model="registPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import url from "@/service.config.js";
import {mapActions} from 'vuex';

export default {
  data(){
    return {
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:'',
    };
  },
  methods:{
    ...mapActions(['loginAction']),
    //注册的处理方法
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword
        }
      }).then(res=>{
        if(res.data.code ==200){
          this.$toast.success('注册成功');
          this.registUsername = this.registPassword = '';
        }else {
          this.$toast.fail("注册失败");
        }
      }).catch(err=>{
        console.log(err);
        this.$toast.fail('注册失败');
      });
    },
    //登录的处理方法
    loginHandler(){
      axios({//发送到后端进行数据校验
        url:url.loginUser,
        method:'post',
        data:{
          userName:this.loginUsername,
          password:this.loginPassword
        }
      }).then(res=>{
        if(res.data.code == 200){
          //模拟
          new Promise((resolve,reject)=>{
            setTimeout(() => {
              resolve();
            }, 1000);
          }).then(()=>{
            this.$toast.success('登录成功');
            //保存登录状态
            this.loginAction(res.data.userInfo);
            this.$router.push('/');
          }).catch(err=>{
            this.$toast.fail('保存登录状态失败');
            console.log(err);
          });
        }
      }).catch(err=>{
        console.log(err);
        this.$toast.fail('登陆失败');
      });
    }
  }
}
</script>

<style lang="scss">

</style>
