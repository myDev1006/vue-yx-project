<template>
  <div id="search">
    <div class="header">
      <div class="icon">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="input">
        <input type="text" placeholder="新上爆品">
      </div>
      <span @click="back">取消</span>
    </div>
    <div class="content">
      <header class="header">
        热门搜索
      </header>
      <nav class="nav">
        <ul class="list">
          <li class="item">爆款行李箱</li>
          <li class="item">中秋月饼上新热卖</li>
          <li class="item">礼品</li>
          <li class="item">中秋月饼上新热卖</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search
    width 100%
    height 100%
    .header
      width 100%
      height 50px
      display flex
      align-items center
      // background skyblue
      padding 0 20px
      .icon
        background #eeeeee
        height 30px
        line-height 30px
        padding 0 10px
        i 
          font-size 20px
          
      .input
        height 30px
        input
          background #eee
          line-height 30px
          width 250px
          // border-radius 5px
          border 0
      span 
        padding-left 15px
    .content
      width 100%
      .header
        width 100%
        height 40px
        line-height 40px
        font-size 20px
      .nav
        width 100%
        .list
          overflow hidden
          .item
            float left
            padding 6px 10px
            border 1px solid #eeeeee
            margin 10px
            font-size 14px
            border-radius 6px
            text-align center

  
</style>
