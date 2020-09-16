<template>
  <div>
      children:{{msg}}
      <div><slot :data='data' :lists='lists'>我是默认信息1</slot></div>
      <div><slot :data='data'>我是默认信息2</slot></div>
  </div>
</template>
<script>
export default {
  props:{
    msg:{
      type: Object,
      default: {}
    }
  },
  data(){
    return {
      data:[2, 3, 4, 5, 6, 7, 8],
      lists:[
        {
          name:"张三",
          year:13
        },
        {
          name:"李四",
          year:18
        }
      ]
    }
  }
  
}
</script>
<style scoped>
  
</style>