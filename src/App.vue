<template>

  <router-view/>
  <div id="nav">
    <router-link to="/home" class="icor">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>
      <div>首页</div>
      </router-link>
    <router-link to="/fen" class="icor">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenlei"></use>
      </svg>
      <div>分类</div></router-link>
    <router-link to="/gao" class="icor">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-B"></use>
      </svg>
      <div>购物车</div>
    </router-link>
    <router-link to="/my" class="icor">  <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gerenzhongxin"></use>
    </svg>
      <div>我的</div></router-link>
  </div>
</template>
<script>
import iconfont from "assets/css/iconfont.js"
import NavTop from "@/components/common/NavTop";
export default {
  name: "App",
  components:{
    NavTop,
    iconfont
  }

}

</script>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #f6f6f6;
  display: flex;
  vertical-align: center;
  text-align: center;
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 0.5px rgba(100, 100, 100, 0.1);





  .icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-top: 5px;


  }
  a {

    color: #2c3e50;

    &.router-link-exact-active {
      color:var(--color-high-text);
    }
  }
  .icor{
    flex: 1;
    height: 50px;
    font-size: var(--font-size);
  }
}
</style>
