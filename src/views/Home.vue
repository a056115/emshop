<template>
  <div class="home">
  <nav-top>
  <template #default>图书兄弟</template>
  </nav-top>
    <div class="van">
      <van-button color="#7232dd" plain>单色按钮</van-button>
    </div>

  </div>
</template>

<script>
import {onMounted ,ref} from 'vue';
import { gethomeData } from '@/network/home';
import NavTop from "@/components/common/NavTop";
export default {
  name: 'Home',
  components:{
    NavTop
  },
  setup() {
    let ban =ref([]);
    onMounted(()=>{
      gethomeData().then(res=>{
       ban.value=res.slides
        
      })
    })

    return{
      ban
    }


  }


}
</script>
<style lang="scss">
.van{
  margin-top: 45px;
}
</style>