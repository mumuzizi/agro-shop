<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name='footer-bar'></router-view>
  </div>
</template>

<script>
// import FooterBar from '@/components/FooterBar.vue'
  export default{
  }
</script>
<style lang="scss">
.footer-bar{
  display:flex;
  background: #eeeeee;
  position:fixed;
  bottom: 0;
  width:100%;
  height: 3rem;
  line-height: 3rem;
  &-item{
    flex-grow: 1;
    text-align: center;
  }
}
</style>
