<template>
  <div>
    <router-view></router-view>
    <FooterNav v-show="$route.path != '/login'"/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
