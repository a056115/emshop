<template>
  <div class="nav-bar">
    <div class="left" @click="goback"><slot name="left" >&lt;</slot></div>
    <div class="center"><slot>eeee</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {useRouter} from "vue-router"
export default {
  name: "NavTop",
  setup() {
    const router=useRouter()
    const goback =()=>{
      router.go(-1)
    }
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),goback
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  display: flex;
  background-color: #42b983;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 45px;
  line-height: 45px;
  z-index: 9;
  text-align: center;
  box-shadow: 0 2px 0px rgba(100,100,100,0.1);

}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>