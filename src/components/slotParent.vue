<template>
  <div>
    parent:{{msg}}
    <slot-children :msg='msg'>
      <template slot-scope="user">
        <p>{{user}}</p>
      </template>
    </slot-children>
  </div>
</template>
<script>
import slotChildren from './slotChildren'
export default {
  components:{
    slotChildren
  },
  data(){
    return {
      msg: {
        name: "张三",
        year: 14
      },
      data: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>
<style scoped>
  
</style>