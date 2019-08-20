<template>
   <!-- 主页home -->
    <div id="home">
       <!-- 上部搜索+标题 -->
        <div class="homeHeader">
            <div class="homeHeader-top">
                <a class="headerTitle" href="javascript:;">网易严选</a>
                <div class="toSearch" @click="$router.push('/search')">
                  <i class="iconfont icon-sousuo"></i>
                  <span class="searchProduct">搜索商品，共21625款好物</span>
                </div>
             </div>
             <div class="homeHeader-bottom">
                <div class="warpper">
                  <ul ref="ulnode" class="headerTab" @click="clickcurrent($event)">
                  <li class="tabItem" :class="{active:isactive}"><span>推荐</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>居家生活</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>服饰鞋包</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>美食酒水</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>个护清洁</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>母婴亲子</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>运动旅行</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>数码家电</span></li>
                  <li class="tabItem" :class="{active:!isactive}"><span>全球特色</span></li>
                </ul>
                </div>
                <span class="icon" @click="showlist">
                  <i class="iconfont icon-jiantou8" v-show="!isshow"></i>
                  <i class="iconfont icon-ico_back" v-show="isshow"></i>
                </span>
                <!-- 全部Tab列表页 -->
                <div class="alltablist" v-show="isshow">
                  <span class="alltablist-title">
                    全部频道
                  </span>
                  <ul class="alltab">
                      <li class="tabItem active"><span>推荐</span></li>
                      <li class="tabItem"><span>居家生活</span></li>
                      <li class="tabItem"><span>服饰鞋包</span></li>
                      <li class="tabItem"><span>美食酒水</span></li>
                      <li class="tabItem"><span>个护清洁</span></li>
                      <li class="tabItem"><span>母婴亲子</span></li>
                      <li class="tabItem"><span>运动旅行</span></li>
                      <li class="tabItem"><span>数码家电</span></li>
                      <li class="tabItem"><span>全球特色</span></li>
                    </ul>
                   
                </div>
             </div>
        </div>
        <!-- 遮罩层 -->
        <div class="mask" v-show="isshow"></div>


            <!-- home页主内容区 -->
        <div class="content">
              <!-- 轮播图 -->
            <div class=" swiper-container">
                <ul class=" swiper-wrapper">
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/82a811bf9a93fe5775fa8e702695b193.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                  <li class=" swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                  </li>
                </ul>
                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
              </div>
              <div class="middleTitle">
                <span class="bgImg1"> 网易自营品牌</span>
                <span class="bgImg2">30天无忧退货</span>
                <span class="bgImg3">48小时快速退款</span>
              </div>

              <div class="categorylist">
                <ul class="listwarper">
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                    <span>新品首发</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                    <span>居家生活</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
                    <span>服饰鞋包</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                    <span>美食酒水</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
                    <span>个护清洁</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
                    <span>母婴亲子</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
                    <span>运动旅行</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
                    <span>数码家电</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
                    <span>全球特色</span>
                  </li>
                  <li class="listitem">
                    <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
                    <span>超级会员</span>
                  </li>
                </ul>
              </div>

              
              <div class="options-index1">
                <header class="header">
                  -新人专享礼-
                </header>
                <div class="imgitem">
                  <div class="item1">
                    <span>新人专享礼包</span>
                    <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                  </div>
                  <div class="item2">
                    <div class="item-top">
                        <img src="https://yanxuan-item.nosdn.127.net/f33922af9863addb4845b1c93f04b012.png?imageView&thumbnail=200x200&quality=75" alt="">
                          <div class="word">
                              <span>福利社</span>
                              <span>今日特价</span>
                          </div>
                        </div>
                        <div class="item-bottom">
                        <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75" alt="">
                          <div class="word">
                              <span>新人拼团</span>
                              <span>一元包邮</span>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
              <div class="options-index2">
                <header class="header">
                  品牌制造商直供
                  <span class="more">更多 ></span>
                </header>
                <div class="imgitem">
                  <div class="item1 item">
                   <div class="word">
                    <span>海外制造商</span>
                    <span>9.9元上新</span>
                   </div>
                  </div>
                    <div class="item2 item">
                      <div class="word">
                          <span>CK制造商</span>
                          <span>29.9元起</span>
                      </div>
                        </div>
                        <div class="item3 item">
                          <div class="word">
                              <span>新秀丽制造商</span>
                              <span>159元起</span>
                          </div>
                        </div>
                        <div class="item4 item">
                          <div class="word">
                              <span>Armani制造商</span>
                              <span>199元起</span>
                          </div>
                        </div>
                  
                </div>
              </div>
              <div class="options-index3">
                <header class="header">
                  类目热销榜
                </header>
                <div class="imgitem">
                 <div class="item-top">
                    <div class="item1 item">
                        <div class="word">
                         <span>热销榜</span>
                        </div>
                       </div>
                         <div class="item2 item">
                           <div class="word">
                            <span>好评榜</span>
                           </div>
                          </div>
                 </div>
                  <div class="item-bottom">
                      <div class="item3 item">
                          <div class="word">
                              <span>居家生活榜</span>
                          </div>
                        </div>
                        <div class="item4 item">
                          <div class="word">
                              <span>美食酒水榜</span>
                          </div>
                        </div> 
                        <div class="item5 item">
                          <div class="word">
                              <span>服饰鞋包榜</span>
                          </div>
                        </div> 
                        <div class="item6 item">
                          <div class="word">
                              <span>个护清洁榜</span>
                          </div>
                        </div> 
                        <div class="item7 item">
                          <div class="word">
                              <span>运动旅行榜</span>
                          </div>
                        </div> 
                        <div class="item8 item">
                          <div class="word">
                              <span>数码家电榜</span>
                          </div>
                        </div> 
                        <div class="item9 item">
                          <div class="word">
                              <span>母婴亲子榜</span>
                          </div>
                        </div> 
                        <div class="item10 item">
                          <div class="word">
                              <span>全球特色榜</span>
                          </div>
                        </div> 
                  </div>                 
                </div>
              </div>   
              <div class="options-index2">
                  <header class="header">
                    限时购
                    <span class="time">02：00：00</span>
                    <span class="more">更多 ></span>
                  </header>
                  <div class="imgitem">
                    <div class="item1 item">
                     <div class="word">
                      <span>海外制造商</span>
                      <span>9.9元上新</span>
                     </div>
                    </div>
                      <div class="item2 item">
                        <div class="word">
                            <span>CK制造商</span>
                            <span>29.9元起</span>
                        </div>
                          </div>
                          <div class="item3 item">
                            <div class="word">
                                <span>新秀丽制造商</span>
                                <span>159元起</span>
                            </div>
                          </div>
                          <div class="item4 item">
                            <div class="word">
                                <span>Armani制造商</span>
                                <span>199元起</span>
                            </div>
                          </div>
                    
                  </div>
                </div>
              <div class="options-index4">
                <div class="bjImg"></div>
                <div class="tablist">
                  <ul ref="listitemnode" class="listitem">
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/89ea5ccc1e8e09912b17c18005b6f704.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>女式自然无缝bra短吊带</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>洗脱一体不脏手懒人拖把</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>男式基础平角内裤</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/58fdbceab428754d9b8e8b3019d84c4e.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>100%纯棉，出行必备</span>
                      <span>$39.2</span>
                    </li>
                    <li class="item">
                      <img src="https://yanxuan-item.nosdn.127.net/db035abf769ba273124774e9c16929a4.png?imageView&quality=65&thumbnail=330x330" alt="">
                      <span>3头浮动式电动剃须刀</span>
                      <span>$39.2</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer">
                <span>下载APP</span>
                <span>电脑版</span>
                <p>网易公司版权所有 © 1997-2019食品经营许可证：JY13301080111719</p>
              </div>
        </div>        
     </div>
</template>

<script>
import BScroll from "better-scroll"
import Swiper from "swiper"
import'swiper/dist/css/swiper.css'
  export default {
    data(){
      return{
        isshow:false,// 标识变量，切换全部频道列表的显示隐藏，默认为false
        isactive:true //标识变量，点击当前项显示下划线，
      }
    },
    mounted(){
      this.getwidth()
      // console.log(this.getwidth())
      if(this.getwidth()){
        let scroll = new BScroll(".warpper",{
        scrollX: true,
        click:true
      })
        let scroll2 = new BScroll(".tablist",{
        scrollX: true,
        click:true
      })
      }
       var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
  })        
      
    },
    methods:{
      showlist(){
        this.isshow = !this.isshow
      },
      
      //动态获取头部ul的宽度的方法
      getwidth(){
        //底部滑动列表的宽度
        let listItemNode = this.$refs.listitemnode
        let listChildNode = listItemNode.children
        console.log(listChildNode)

        let listItemNodeWidth = 0
        Array.prototype.forEach.call(listChildNode,(item)=>{
          listItemNodeWidth+=item.clientWidth
        })
        listItemNode.style.width =listItemNodeWidth + 'px'

//头部滑动列表的宽度
        let ulNode = this.$refs.ulnode
        let liNode = ulNode.children
        let ulNodeWidth = 0
        Array.prototype.forEach.call(liNode,(item)=>{
          ulNodeWidth+=item.clientWidth
        })
        ulNode.style.width =ulNodeWidth + 'px'
        return ulNodeWidth
      },
      //点击当前列表项更换样式
      // clickcurrent(e){
      //   console.log(e)
      //   e.target
        
      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
    width 100%
    height 100%    
    position relative
    .homeHeader
      position fixed
      top 0px
      z-index 10
      width 100%
      .homeHeader-top
        width 100%
        height 45px
        background #fff
        // position fixed

        // background skyblue
        display flex
        align-items: center
        padding 5px 20px
        .headerTitle
          color #000
          margin-right 10px
          font-size 18px
        .toSearch
          width 250px
          height 30px         
          text-align center
          line-height 30px
          background #eee
          border-radius 5px
          .icon-sousuo
            font-size 20px
            vertical-align middle
          .searchProduct
            font-size 14px
      .homeHeader-bottom
        position relative
        width 100%
        height 40px
        display flex
        background #fff
        .warpper
          width 80%
          overflow hidden
          // white-space nowrap

          .headerTab
            // display flex
            align-items center
            height 40px
            // width 780px
            white-space nowrap
            // overflow hidden
            .tabItem
              float left
              height 40px
              padding 0 20px
              white-space nowrap

              box-sizing border-box
              // margin 0 15px
              font-size 15px
              line-height 40px
              &.active
                color red
                border-bottom 2px solid red
        .icon         
          // float right
          // position relative
          color #333
          .iconfont
            // background skyblue 
            position absolute
            right 20px
            top 13px
            z-index 7
            &showlist 
              display none
            
          // 全部频道页面
        .alltablist  
          width 100%
          // height 200px
          position absolute
          z-index 6
          background #fff
          // height 150px
          // background skyblue 
          padding 15px
          .alltablist-title
            font-size 15px            
          .alltab
            display flex
            flex-wrap wrap
            margin-top 15px          
            .tabItem
              border 1px solid #333
              border-radius 5px
              width 70px
              height 25px
              text-align center
              line-height 25px
              margin 0 0 20px 10px
              font-size 12px
              &.active
                color red
                border 1px solid red
    .mask
      position absolute
      width 100%
      height 100%
      background rgba(0,0,0,.5)
      z-index 5
      
      // position absolute
      // bottom 0


    .content
      margin-top 95px
      // position absolute
      padding-bottom 50px
      top 0
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            img
              display block
              width 100%
              height 200px
      //   width 100%
      //   height 200px
      // .scrollImg
      //   width 100%
      //   height 200px
      //   img 
      //     width 100%
      //     height 200px
      //   .imglist
      //     position relative
      //     .imgItem
      //       position absolute
      //       top 0
      //       left 0
      //       img 
      //         width 100%
      //         height 200px
      .middleTitle
        width 100%
        height 40px
        // background skyblue 
        font-size 12px
        
        span 
          display inline-block
          padding-left 25px
          margin 0 10px
          height 40px
          line-height 40px
          background-position 0 10px
          background-size 20px 20px
          background-repeat no-repeat
        .bgImg1
          background-image: url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);
        .bgImg2
          background-image: url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);
        .bgImg3
          background-image: url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);
      .categorylist
        border-bottom 10px solid #eee
        width 100%
        .listwarper
          display flex
          flex-wrap wrap
          align-items center
          padding 10px
          width 100%
          box-sizing border-box
          .listitem
            display flex
            flex-direction column
            width 20%
            margin-bottom 10px
            img 
              width 55px
              height 55px
              margin-bottom 10px
            span 
              font-size 14px
      .options-index1
        padding 10px    
        border-bottom 10px solid #eee   
        .header
          width 100%
          height 40px
          // background skyblue 
          font-size 20px
          text-align center
          line-height 40px
        .imgitem
          width 100%
          height 250px
          box-sizing border-box
          
          display flex
          .item1
            width 50%
            height 250px
            background #eee
            float left
            position relative
            margin-right 5px
            

            img 
              width 130px
              height 130px
              position absolute
              left 50%
              top 50%
              margin-left -65px
              margin-top -65px
              
            span
              display inline-block
              margin 20px 0 0 10px
          .item2
            background #E1FFFF
            width 50%
            height 250px
            display flex
            flex-direction column
            box-sizing border-box
            img 
              width 100px
              height 100px
            .item-top
              background	#FFEFD5
              height 120px
              img 
                float left
              .word
                float right
                display flex
                flex-direction column
                margin 10px 10px 0 0 
              
             
            .item-bottom
              background	#7FFFA
              margin-top  5px
              height 120px
              .word
                float left
                margin-top 20px
                display flex
                flex-direction column

              img 
                float right

      .options-index2
        width 100%
        padding 10px
        box-sizing border-box
        border-bottom 10px solid #eee
        .header
          width 100%
          height 40px
          font-size 16px
          position relative
          line-height 40px
          .more
            position absolute
            right 30px
            font-size 14px
        .imgitem
          display flex
          flex-wrap wrap
          .item 
            width 175px
            height 140px
            background-size 100% 100%
            .word
              display flex
              flex-direction column
              align-items center
              margin-top 10px
              font-size 14px    
          .item1
            margin 0 5px 5px 0
            background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
          .item2
            background-image url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1)
          .item3
            background-image url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
          .item4
            margin 5px 0 0 5px
            background-image url(https://yanxuan.nosdn.127.net/c9e14b08576b6a5e2bc3ef46e0e05d08.png?imageView&thumbnail=343y260&enlarge=1)



      .options-index3
        width 100%
        padding 10px
        box-sizing border-box
        border-bottom 10px solid #eeeeee
        .header
          width 100%
          height 40px
          line-height 40px
        .imgitem
          width 100%
          .item-top
            width 100%
            display flex
            .item
              width 50%
              height 100px
              background-size 70%
              background-repeat no-repeat
              background-position 50px 0
              .word
                margin 20px 0 0 6px
            .item1
              background-color 	#AFEEEE
              margin-right 5px
              background-image url(https://yanxuan-item.nosdn.127.net/4f43f69ece3312fcd0b032c949c7c71b.png?imageView&quality=65&thumbnail=200x200)
            .item2
              background-image url(https://yanxuan.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200)
              background-color #F0E68C	
          .item-bottom
            display flex
            width 100%
            flex-wrap wrap
            box-sizing border-box           
            .item 
              width 24%
              height 90px
              background #eeeeee
              margin 5px 4px 0 0 
              text-align center
              font-size 14px
              padding-top 10px
              background-size 100%
              background-position 0 25px
              background-repeat no-repeat
            .item3
              background-image url(https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200)
            .item4
              background-image url(https://yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200)
            .item5
              background-image url(https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200)
            .item6
              margin-right 0px
              background-image url(https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=200x200)
            .item7
              background-image url(https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200)
            .item8
              background-image url(https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200)
            .item9
              background-image url(https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200)
            .item10
              background-image url(https://yanxuan.nosdn.127.net/4f2eb96a4636205ad21a115f0bf43761.png?imageView&quality=65&thumbnail=200x200)
              margin-right 0px

      .options-index4
        width 100%
        border-bottom 10px solid #eeeeee
        overflow hidden
        .bjImg
          width 100%
          height 160px
          background-image url(https://yanxuan.nosdn.127.net/874cc79fd5f7e13eac10e1dcc9fe6c92.jpg?imageView&thumbnail=750x0&quality=75)
          background-size 100%
          margin-bottom 10px
        .tablist
          width 100%
          padding 10px
          // box-sizing border-box
          overflow hidden
          .listitem
            display flex
            // width 700px
            // white-space nowrap
            // overflow hidden
            // width 100%
            .item
              display flex
              flex-direction column
              float left
              width 100px 
              height 180px
              margin-right 20px
              font-size 14px

              img 
                width 100px
                height 100px
                background #eeeeee
              span
                margin-bottom 5px
      .footer
        width 100%
        height 120px
        color #ffffff
        background 	#4D4D4D
        text-align center
        span 
          display inline-block
          width 80px
          height 30px
          border 1px solid 	#F5F5F5
          text-align center
          line-height 30px
          margin-top 20px
          font-size 14px
          margin-right 10px
        p
          font-size 12px
          margin-top 20px
          

        





</style>
