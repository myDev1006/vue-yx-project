<template>
  <div id="login">
       <div class="header">
         <i class="iconfont icon-zhuye icon" @click="$router.replace('/home')"></i>
         <span>网易严选</span>
         <div class="icon">
            <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuchekong-copy" @click="$router.replace('/shop')"></i>
         </div>
       </div>
       <div class="content" v-show="!selectlogin">
          <div class="logo">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="phonelogin logincontent" v-show="isphone">
               <div class="form">
                   <div class="phone">
                     <input v-validate="'required|email'" name="field" v-model="phonevalue" ref="phoneinput" @blur="regrule(1)" type="text" placeholder="请输入手机号">
                   </div>
                    <div class="getcode">
                    <input v-model="msgvalue" ref="msginput" @blur="regrule(2)" type="text" placeholder="请输入短信验证码">
                    <span @click="getcode">{{timeCount == 0?'获取验证码':`${timeCount} s`}}</span>
                    </div>
                  </div>
                  <div class="commit">
                     <p class="first-p">
                       <span>遇到问题？</span>
                       <span>使用密码验证登录</span>
                     </p>
                       <input class="btn" type="submit" value="登录"
                        @click="pass(1,'phone')"
                       />
                       <p class="last-p">
                         <input type="checkbox">
                         我同意《服务条款》和《网易隐私政策》
                       </p>
                  </div>
                  <div class="otherlogin" @click="otherlogin">
                    <span>其他登录方式 ></span>
                  </div>
             </div>
             <div class="emaillogin logincontent" v-show="isemail">
               <div class="form">
                   <div class="phone">
                     <input type="text" placeholder="邮箱账号" v-model="emailValue" @blur="regrule(3)">
                   </div>
                     <div class="getcode">
                     <input type="password" placeholder="密码" v-model="pwdValue" @blur="regrule(4)">
                     </div>
                   </div>
                   <div class="commit">
                     <p class="first-p">
                       <span>注册账号</span>
                       <span>忘记密码</span>
                     </p>
                       <input class="btn" type="submit"
                        @click="pass(2,'email')"
                         value="登录"/>
                   </div>
                   <div class="otherlogin" @click="otherlogin">
                     <span>其他登录方式 ></span>
                   </div>
             </div>
       </div>
       <div class="loginway" v-show="selectlogin" >
         <div class="logo">
           <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
         </div>
         <div class="loginphone selectway" @click="changeloginway(1)">
           <i class="iconfont icon-shouji"></i>
           手机号登录
         </div>
         <div class="loginemail selectway" @click="changeloginway(2)">
           <i class="iconfont icon-youxiang"></i>
          邮箱账号登录
         </div>
       </div>

       </div>
</template>

<script>
import { Toast } from 'mint-ui'
import "mint-ui/lib/style.css"
import VeeValidate from 'vee-validate'
import Vue from "vue"
Vue.use(VeeValidate);
Vue.use(Toast.name,Toast)
  export default {
    data(){
      return{
        //切换选择登录页面和手机邮箱登录页面,true是选择登录，false是手机邮箱登录
        selectlogin:true,
        //手机登录
        isphone:true,
        //邮箱登录
        isemail:true,
        //手机号
        phonevalue:"",
        //短信验证码
        msgvalue:"",
        //验证码倒计时
        timeCount:0,
        //邮箱
        emailValue:'',
        //密码
        pwdValue:'',
        //按钮可点击
        phonepass:false,
        emailpass:false
      }
    },
    methods:{
      changeloginway(loginway){
        this.selectlogin = !this.selectlogin
        if(loginway == 1){
          this.isemail = !this.isemail         
        }else if(loginway == 2){
          this.isphone = !this.isphone
        }
      },
      otherlogin(){
        this.isphone = this.isemail = this.selectlogin = true
      },
      //正则验证
      regrule(type){
        if(type == 1){
          //手机验证
          let phoneinput = this.$refs.phoneinput
          let value = this.phonevalue.trim()
          let reg = /^1[3456789]\d{9}$/
          if(!reg.test(value) && this.phonevalue!=''){
            this.phonevalue = ''
            phoneinput.placeholder = "再次输入"
            Toast({
              className:"changecolor",
              message:"手机号格式不正确",
              position:"top"
            });
          }else if(this.phonevalue == ''){
            Toast({
              className:"changecolor",
              message:"手机号不能为空",
              position:"top"
            });
          }
        }else if(type == 2){
          //短信验证码验证
          let msginput = this.$refs.msginput
          let value = this.msgvalue.trim()
          let reg = /^[0-9]\d{3}$/
          if(!reg.test(value) && this.msgvalue!=''){
            this.msgvalue = ''
            msginput.placeholder = "请重新输入"
             Toast({
              className:"changecolor",
              message:"验证码必须是四位数",
              position:"top"
            });
          }else if(this.msgvalue == ''){
            Toast({
              className:"changecolor",
              message:"验证码不能为空",
              position:"top"
            });

          }
        }else if(type == 3){
          //邮箱验证
        }else if(type == 4){
          //密码验证
        }
      },
      //获取验证码方法
      getcode(){
        if(this.timeCount != 0) return
        Toast({
              className:"getCodeSuccess",
              message:"验证码发送成功",
              position:"top"
            });
        this.timeCount = 10
        this.timer = setInterval(() => {
          if(this.timeCount == 0){
            clearInterval(this.timer)
          }
          if(this.timeCount != 0) this.timeCount--
          
        }, 1000);

      },
      pass(commit,way){
        if(commit == 1 && way == "phone"){
          this.$router.replace('/personal')
        }else if(commit == 2 && way == "email"){
          this.$router.replace('/personal')
        }
      }
    }
    
  }
</script>

<style lang="stylus">
  .changecolor
    color red
    background #eee
  .getCodeSuccess
    color green 
    background #eee
</style>
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
          input[type='text'],input[type='password'] 
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
              width 80px
              text-align center
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
            text-align center
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
