<template>
  <div id="login">
       <div class="header">
         <i class="iconfont icon-zhuye icon"></i>
         <span>网易严选</span>
         <div class="icon">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-gouwuchekong-copy"></i>
         </div>
       </div>
       <div class="content" style="display: none">
          <div class="logo">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="phonelogin logincontent">
               <div class="form">
                   <div class="phone">
                     <input type="text" placeholder="请输入手机号">
                   </div>
                    <div class="getcode">
                    <input type="text" placeholder="请输入短信验证码">
                    <span>获取验证码</span>
                    </div>
                  </div>
                  <div class="commit">
                     <p class="first-p">
                       <span>遇到问题？</span>
                       <span>使用密码验证登录</span>
                     </p>
                       <button class="btn">登录</button>
                       <p class="last-p">
                         <input type="checkbox">
                         我同意《服务条款》和《网易隐私政策》
                       </p>
                  </div>
                  <div class="otherlogin">
                    <span>其他登录方式 ></span>
                  </div>
             </div>
             <div class="emaillogin logincontent" style="display: none">
               <div class="form">
                   <div class="phone">
                     <input type="text" placeholder="邮箱">
                   </div>
                     <div class="getcode">
                     <input type="text" placeholder="账号">
                     </div>
                   </div>
                   <div class="commit">
                     <p class="first-p">
                       <span>注册账号</span>
                       <span>忘记密码</span>
                     </p>
                       <button class="btn">登录</button>
                   </div>
                   <div class="otherlogin">
                     <span>其他登录方式 ></span>
                   </div>
             </div>
       </div>
       <div class="loginway">
         <div class="logo">
           <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
         </div>
         <div class="loginphone selectway">
           <i class="iconfont icon-shouji"></i>
           手机号登录
         </div>
         <div class="loginemail selectway">
           <i class="iconfont icon-youxiang"></i>
          邮箱账号登录
         </div>
       </div>

       </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    width 100%
    height 100%
    .header
      width 100%
      height 40px
      background #F5F5F5
      font-size 20px
      line-height 40px
      padding 0 10px
      display flex
      box-sizing border-box

      .icon  
        font-size 25px
        width 20%
        i
          font-size 25px
      span 
        width 60%
        text-align center
    .content
      width 100%
      .logo
        width 100%
        padding 30px 0
        text-align center
        img 
          width 96px 
          height 30px
          
      .logincontent
        padding 15px
        .form
          width 100%
          input[type='text'] 
            height 50px
          .phone
            border-bottom 1px solid #eee
            input 
              width 290px
              font-size 15px
          .getcode
            border-bottom 1px solid #eee
            input 
              width 190px
            span 
              margin-left 50px
              font-size 14px
              display inline-block
              padding 6px
              border 1px solid #eeeeee
              border-radius 5px
        .commit
          width 100%
          .first-p
            width 100%
            height 50px
            line-height 50px
            span 
              font-size 14px
              &:first-child
                float left
                color #C0C0C0
              &:last-child
                float right
          .btn
            width 100%
            height 40px
            border-radius 6px
            background red
            border 0px
            font-size 20px
            color #fff
          .last-p
            width 100%
            padding 10px 0
            font-size 14px
        .otherlogin
          width 100%
          padding-top 30px
          text-align center
          font-size 14px
    .loginway
      .logo
        width 100%
        height 240px
        text-align center
        line-height 240px
        img 
          width 133px
          height 45px
      .selectway
        width 335px
        height 47px
        margin 5px auto
        text-align center
        line-height 47px
        border 1px solid red
        font-size 14px
      .loginphone
        background red
        color #ffffff
        font-weight bold
      .loginemail
        background #ffffff
        color red

  
</style>
