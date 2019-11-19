<template>
    <div class="wrapper"> 
      <div class="logo"><img src="./images/logo.png" width="276" height="58"><!-- <img src="@/assets/img/slicing/sw1.svg" width="276" height="58"> --></div>

      <div class="content">
        <div class="launch"></div>
        <div class="divider"><h4>英文的都是图片</h4></div>
        <div class="countdown_bg">
          <p class="defaultCountdown">不知道这里应该是啥</p>
        </div>

        <div class="divider_small"></div>

        <h1 class="first_h1">这里是可以改变的文字 <span style="color: #c16004;">这里是可以改变的文字</span></h1>

        <div class="divider_small"></div>

        <h1> 这里是文字</h1>
        <p class="topic">这里是好大一段文字，说个故事吧！从前有座山，山里有座庙，庙里有个老和尚，老和尚对小和尚说，从前有座山，山里有座庙，庙里有个老和尚，老和尚对小和尚说，从前有座山，山里有座庙，庙里有个老和尚，老和尚对小和尚说......</p>

        <div>
          <h2>这里不是图片，可能英文更好看一些</h2>
          <h3>这里不是图片</h3>
        </div>
        方框处
        <div class="square">放图片或者文字哈</div>

        脚标
        <div>
          <div class="divider"></div>
          <p class="textstyle1" style="font-size: 12px;">欢迎使用1008611话费流量直通车，我们已将您近期的消费情况下发至您的手机，请注意查收</p>
          链接地址
          <p><a href="www.baidu.com" class="textstyle2">www.baidu.com</a></p>
          <div class="divider"></div>
        </div>
        <ul class="social">
          <li><a href="#" class="twitter">微信</a></li>
          <li><a href="#" class="twitter">微博</a></li>
          <li><a href="#" class="twitter">QQ</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
  }
}

</script>
<style lang="less" scoped>
.wrapper{
  background: url(images/body-bg.png) repeat #232323;
  font-family: Arial, serif;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  line-height: 1.5em;
  text-align: center;
  .logo{

  }
}
.content{
  background: url(images/wrapper-bg.png) repeat #ffffff;
  width: 620px;
  padding: 40px 160px;
  box-shadow: 0px 1px 2px 0px #000;
  -moz-box-shadow: 0px 1px 2px 0px #000;
  -webkit-box-shadow: 0px 1px 2px 0px #000;
  text-align: center;margin: 0 auto
}
.launch{
  background: url(images/launching-soon.png) no-repeat;
  width: 402px;
  height: 108px;
  margin: 0 auto;
}
.divider{
  background: url(images/divider.png) no-repeat center top;
  width: 620px;
  height: 3px;
  margin: 40px auto;
  display: block;
  clear: both;
  position: relative;
}
h4{
  background: url(images/wrapper-bg.png) repeat;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 0px;
  position: absolute;
  top: -30px;
  width: 130px;
  margin-left: -65px;
  left: 50%;
}
.countdown_bg{
  background: url(images/countdown-bg.png) no-repeat;
  width: 560px;
  height: 60px;
  margin: 0 auto 20px auto;
  display: block;
}
.defaultCountdown{
  font-family: Arial, serif;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding-top: 19px;
  padding-left: 5px;
  text-align: center;
}
.divider_small{
  background: url(images/divider-small.png) no-repeat center top;
  width: 100%;
  height: 2px;
  margin: 20px auto;
  display: block;
  clear: both;
  float: left;
}
.first_h1{
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: Arial, serif;
  color: #000;
  font-style: normal;
  line-height: 1em;
}
.topic{
  text-align: justify;
  text-indent: 30px;
}
h3{
  font-size: 15px;
  color: #5e5e5e;
  font-style: italic;
}
.square{
  margin: 25px auto 0px auto;
  position: relative;
  height: 150px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textstyle2{
  color: #c16004;
  font-size: 12px;
  font-style: italic;
}
.social{
  width: 100%;
  height: 32px;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
ul li{
  padding: 0px 2px;
  display: inline-block;
  list-style-type: none;
}
</style>