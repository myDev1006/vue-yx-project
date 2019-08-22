<template>
  <div class="scan">
    <div class="header">
        <div class="header-top">
          <i class="iconfont icon-zhuye icon" @click="$router.replace('/home')"></i>
        <span @click="current(1)" :class="{active:isactive}">发现</span>
        <span @click="current(2)" :class="{active:!isactive}">甄选家</span>
        <div class="iconright">
            <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuchekong-copy" @click="$router.replace('/shop')"></i>
        </div>
        </div>
        <div class="header-bottom" v-show="$route.path == '/scan/find'">
          <ul class="listitem">
            <li class="item" @click="getCurrentIndex(index)" :class="{active:current_index == index}" v-for="(item, index) in listData" :key="index">{{item}}</li>
            <!-- <li class="item">盛夏特别版</li>
            <li class="item">好货内部价</li>
            <li class="item">回购榜</li>
            <li class="item">晒单</li>
            <li class="item">开发者日记</li>
            <li class="item">达人</li> -->
          </ul>
        </div>
    </div>
    <keep-alive>
      <router-view></router-view>
      
    </keep-alive>
    <!-- <div class="content" style="display:none">
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
    </div> -->
  </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
    data(){
      return {
        isactive:true, // true是发现，false是甄选家
        listData:[],// 头部导航数组
        current_index:0//当前点击的下标
      }
    },
    mounted(){
      this.$nextTick(()=>{
        let scroll = new BScroll('.header-bottom',{
          click:true,
          scrollX:true
        })
      })
      //模拟数据
        this.listData = ['推荐','盛夏特别版','好物内部价','回购榜','晒单','开发者日记','达人']
    },
    methods:{
      //判断当前点击的是发现还是甄选家
      current(type){  
        if(type == 1&&this.$route.path == "/scan/selecthome"){
          this.$router.replace('/scan/find')
          this.isactive = !this.isactive

        }else if(type == 2&&this.$route.path == "/scan/find"){
          this.$router.replace('/scan/selecthome')
          this.isactive = !this.isactive

        }
      },
      //获取当前点击的下标
      getCurrentIndex(index){
        this.current_index = index
      }

    }
  }
</script>
  <style lang="stylus">
    html,body,ul
      margin 0
      padding 0
      list-style none
  </style>
  <style lang="stylus" rel="stylesheet/stylus">
  .scan
    // width 100%
    // box-sizing border-box
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
        span 
          font-size 14px
          &.active
            color #A52A2A
            font-weight bold
            font-size 22px
        & span:first-of-type
          // color #A52A2A 
          // font-weight bold
          margin 0 10px 0 85px
        // & span:last-of-type
          // font-size 14px
        .iconfont
          font-size 25px     
        .iconright  
          width 20%
          position absolute
          right 20px
      .header-bottom
        width 100%
        overflow hidden
        // height 40px
        .listitem
          display flex
          height 40px
          // width 100%
          white-space nowrap
          // line-height 40px
          background #fff
          float left
          .item
            margin 0 20px
            font-size 15px
            height 40px
            line-height 40px
            &.active
              color red
  //   .content
  //     padding-bottom 50px
  //     padding-top 90px //这里和静态不一样
  //     .item-index1
  //       padding 10px
  //       border-bottom 10px solid #eee
  //       img 
  //         width 100%
  //     .item-index-odd
  //       padding 10px
  //       box-sizing border-box
  //       border-bottom 10px solid #eee
  //       .avatar
  //         margin-bottom 20px
  //         img 
  //           width 27px
  //           height 27px
  //           border-radius 50%
  //           vertical-align middle
  //         span 
  //           vertical-align middle
  //           margin-left 10px//这里和静态不一样
  //       .title
  //         font-size 20px
  //         margin-bottom 10px
  //       .bigImg
  //         width 100%
  //       .viewcount
  //         padding 10px 0
  //         font-size 12px
  //         color grey
  //     .item-index-even
  //       padding 10px
  //       overflow hidden
  //       width 100%
  //       box-sizing border-box
  //       border-bottom 10px solid #eee
  //       .left
  //         float left
  //         width 60%
  //         .avatar
  //           margin-bottom 20px
  //           img 
  //             width 27px
  //             height 27px
  //             border-radius 50%
  //             vertical-align middle
  //           span 
  //             vertical-align middle
  //             margin-left 10px//这里和静态不一样
  //         .title
  //           font-size 20px          
  //         .dec
  //           font-size 14px
  //           color grey 
  //           margin 10px 0
  //         .viewcount
  //           font-size 14px
  //           color grey
  //       .right
  //         float right
  //         width 40%
  //         img 
  //           width 136px
  //           height 136px

  
  </style>
