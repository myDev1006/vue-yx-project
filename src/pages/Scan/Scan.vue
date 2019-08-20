<template>
  <div class="scan">
    <div class="header">
        <div class="header-top">
          <i class="iconfont icon-zhuye icon" @click="$router.replace('/home')"></i>
        <span>发现</span>
        <span>甄选家</span>
        <div class="iconright">
            <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuchekong-copy" @click="$router.replace('/shop')"></i>
        </div>
        </div>
        <div class="header-bottom">
          <ul class="listitem">
            <li class="item">推荐</li>
            <li class="item">盛夏特别版</li>
            <li class="item">好货内部价</li>
            <li class="item">回购榜</li>
            <li class="item">晒单</li>
            <li class="item">开发者日记</li>
            <li class="item">达人</li>
          </ul>
        </div>
    </div>
    <div class="content">
      <div class="item-index1">
        <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
      </div>
      <div class="item-index-odd">
        <div class="avatar">
          <img src="https://yanxuan.nosdn.127.net/345ad0e4fdfdd16e1ad9baee2dd26c5f.png?imageView&quality=65&thumbnail=56y56" alt="">
          <span>选妹</span>
        </div>
        <div class="title">
            夏凉拖鞋捡漏啦！人字拖、软木拖、穆勒鞋……最低5折！
        </div>
        <img class="bigImg" src="https://yanxuan.nosdn.127.net/4268aea8303aff2e998e1367d72fc82d.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        <div class="viewcount">
          <i class="iconfont icon-hj"></i>
          <span>65.4k人看过</span>
        </div>
      </div>
      <div class="item-index-even">
        <div class="left">
          <div class="avatar">
            <img src="https://yanxuan.nosdn.127.net/511b0e109a55ca28d3b8074c7929bc09.jpg?imageView&quality=65&thumbnail=56y56" alt="">
            <span>网易有道：莉莉</span>
          </div>
          <div class="title">
            我可以擦厨房，但从不洗抹布
          </div>
          <div class="dec">
            本色抑菌懒人抹布限时6.6折
          </div>
          <div class="viewcount">
            <i class="iconfont icon-hj"></i>
            <span>4260人看过</span>
          </div>
        </div>
        <div class="right">
          <img src="https://yanxuan.nosdn.127.net/dfb45f7fb44232989b7094e8be4a8dd3.jpg?imageView&quality=65&thumbnail=272y272" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

  <style lang="stylus" rel="stylesheet/stylus" scoped>
  .scan
    width 100%
    .header
      width 100%
      position fixed
      top 0
      .header-top
        width 100%
        height 50px
        background #F5F5F5
        font-size 20px
        line-height 50px
        padding 0 10px
        display flex
        box-sizing border-box
        border-bottom 1px solid#A9A9A9	
        & span:first-of-type
          color #A52A2A 
          font-weight bold
          margin 0 10px 0 85px
        & span:last-of-type
          font-size 14px
        .iconfont
          font-size 25px     
        .iconright  
          width 20%
          position absolute
          right 20px
      .header-bottom
        width 100%
        overflow hidden
        .listitem
          display flex
          height 40px
          white-space nowrap
          line-height 40px
          background #F5F5F5
          .item
            padding 0 20px
            font-size 15px
    .content
      padding-bottom 50px
      padding-top 90px //这里和静态不一样
      .item-index1
        padding 10px
        border-bottom 10px solid #eee
        img 
          width 100%
      .item-index-odd
        padding 10px
        box-sizing border-box
        border-bottom 10px solid #eee
        .avatar
          margin-bottom 20px
          img 
            width 27px
            height 27px
            border-radius 50%
            vertical-align middle
          span 
            vertical-align middle
            margin-left 10px//这里和静态不一样
        .title
          font-size 20px
          margin-bottom 10px
        .bigImg
          width 100%
        .viewcount
          padding 10px 0
          font-size 12px
          color grey
      .item-index-even
        padding 10px
        overflow hidden
        width 100%
        box-sizing border-box
        border-bottom 10px solid #eee
        .left
          float left
          width 60%
          .avatar
            margin-bottom 20px
            img 
              width 27px
              height 27px
              border-radius 50%
              vertical-align middle
            span 
              vertical-align middle
              margin-left 10px//这里和静态不一样
          .title
            font-size 20px          
          .dec
            font-size 14px
            color grey 
            margin 10px 0
          .viewcount
            font-size 14px
            color grey
        .right
          float right
          width 40%
          img 
            width 136px
            height 136px

  
  </style>
