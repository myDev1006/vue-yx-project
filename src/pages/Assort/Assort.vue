<template>
   <div class="assort">
        <div class="header">
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品，共20303好物</span>
          </div>
        </div>
        <div class="content">
            <div class="leftlist">
                <ul class="list" ref="listNode">
                  <li class="item"><span>推荐专区</span></li>
                  <li class="item"><span>夏凉专区</span></li>
                  <li class="item"><span>爆品专区</span></li>
                  <li class="item"><span>新品专区</span></li>
                  <li class="item"><span>居家生活</span></li>
                  <li class="item"><span>服饰鞋包</span></li>
                  <li class="item"><span>美食酒水</span></li>
                  <li class="item"><span>个护清洁</span></li>
                  <li class="item"><span>母婴亲子</span></li>
                  <li class="item"><span>运动旅行</span></li>
                  <li class="item"><span>数码家电</span></li>
                  <li class="item"><span>全球特色</span></li>
                 
                </ul>
              </div>
              <div class="rightlist">
                <div class="headerImg">
                  <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
                </div>
                <div class="content">
                  <ul class="listitem">
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>员工精选好货</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/330a2b6c4ef20bad98e1a6e053d6b2d7.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>优选美食2件85折</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/7d67f71c7bc57c15def9501a7bf92ca5.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>夏日母婴好物特价</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/f7d09508d5fa90ef8dfd491d8f7ea225.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>夏日男士穿搭特价</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/6091911dc74d9968c54a50915c68f153.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>中秋好礼上新</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/fc11158857f2792c838e6cdf0942ec4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>夏日女士穿搭特价</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>50元幸福好物</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/da55023995b8d06b27815e2d13ac0433.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>暑期出游便携好物</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png?imageView&quality=85&thumbnail=144x144" alt="">
                      <span>999+好评</span>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
      </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
    mounted(){
      this.$nextTick(()=>{
        let scroll = new BScroll('.leftlist',{
          scrollY: true,
          click: true
      })
      })
      this.getHeight()
    },
    methods:{
      getHeight(){
        //获取滑动列表的高度
        let ulNode = this.$refs.listNode
        //获取他所有的子元素li
        let liNodes = ulNode.children
        let height = 0
        Array.prototype.forEach.call(liNodes,(item)=>{
          height+=item.clientHeight
        })
        ulNode.style.height = height+"px"
        return height
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .assort
    width 100%
    height 100%
    .header
      width 100%
      height 50px
      padding 0 20px
      box-sizing border-box
      padding-top 10px
      border-bottom 1px solid #eeeeee
      .search
        width 100%
        background #eeeeee
        text-align center
        height 30px
        border-radius 5px
        line-height 30px
    .content
      width 100%
      // height 100%
      display flex
      // padding-bottom 50px
      // overflow hidden
      .leftlist
        // float left
        width 30%
        // height 100%
        // height 70%
        // overflow hidden
        .list
          width 100%
          padding 20px 0
          .item
            padding 15px
            span 
              font-size 14px
      .rightlist
        width 70%
        padding 10px
        // float right
        .headerImg
          width 100%
          img 
            width 100%
            height 130px
        .content
          width 100%
          .listitem
            display flex
            flex-wrap wrap
            .item
              width 33.33333%
              margin 10px 0
              img 
                width 72px
                height 72px
              span 
                font-size 12px
</style>
