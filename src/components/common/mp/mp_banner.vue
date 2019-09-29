<template>
  <div class="banner">
    <div class="header">
      <van-swipe :autoplay="4000" indicator-color="white" @change="onChange">
        <van-swipe-item v-if="company.banner" v-for="(item,index) in company.banner" :key="index">
          <van-image fit="cover" :src="item.url" @click="previewImage(index)"/>
          <!-- <span class="picture-title">{{item.label}}</span> -->
          <span class="image-cover" @click="previewImage(index)"></span>
        </van-swipe-item>
        <div v-if="company.banner" class="custom-indicator" slot="indicator">{{ current + 1 }}/{{company.banner.length}}</div>
        <div v-else class="no-img">
          <i class="iconfont icon-no-img"></i>
          <p>暂无图片信息</p>
        </div>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
export default {
  data() {
    return {
      current    : 0,
      imagesArr  : [],
    }
  },
  created(){
        //判断是否横屏
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    //   if (window.orientation === 180 || window.orientation === 0) {   
    //     var h = $('.header').height();
    //     // $('.header').css('height',h); 
    //     $('.van-swipe').css('height',h); 
    //     $('.image-cover').css('height',h); 
    //   }   
    //   if (window.orientation === 90 || window.orientation === -90 ){   
    //     var h = document.body.clientWidth;
    //     var w = h - 60;
    //     $('.header').css('height',w); 
    //     $('.van-swipe').css('height',w); 
    //     $('.image-cover').css('height',w);  
    //   }    
    // }, false);
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    previewImage(index){
      let _self  = this;
      for (let i = 0; i <= _self.company.banner.length - 1; i++) {
        _self.imagesArr.push(_self.company.banner[i].url);
      }
      ImagePreview({
        images: _self.imagesArr,
        startPosition: index,
        closeOnPopstate: true,//是否在页面回退时自动关闭
        onClose(){
          _self.imagesArr = [];
        }
      });
    },
  },
  mounted() {

  },
  beforeRouteUpdate (to, from, next) {
    let _self = this;
    //关闭图片预览回到页面最顶部
    let top  = document.documentElement.scrollTop || document.body.scrollTop;
    if ( top > 0 ) {
      window.scrollTo(0,0);
    }
    if (_self.imagesArr.length){
      next(false);
    }else{
      next(true);
    }
  },
  //在路由跳转之前进行判断，如果预览列表中有图片，不进行下一步操作
  beforeRouteLeave (to, from, next) {
    let _self = this;
    //关闭图片预览回到页面最顶部
    $('html,body').animate({scrollTop: '0px'}, 10);
    if (_self.imagesArr.length){
      next(false);
    }else{
      next(true);
    }
  },
}

</script>
<style lang="less" scoped>
// 0~567px
@media screen and (max-width: 567px) {
  .header {
    height: 45vh;
    .van-swipe{
      height: 45vh;
      .image-cover{
        height: 45vh;
      }
    }
  }
}
//568px~无穷大
@media screen and (min-width: 568px) {
  .header {
    height: 70vh;
    .van-swipe{
      height: 70vh;
      .image-cover{
        height: 70vh;
      }
    }
  }
}
.banner{
  width:100%;
  height: 100%;
  .header {
    width: 100vw;
    // height: 45vh;
    background-color: #f1f1f1;
    color: #333;
    .van-swipe{
      // height: 45vh;
      .van-swipe-item{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .van-image{
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .picture-title{
          background-color: rgba(0, 0, 0, 0.25);
          color: #fff;
          position: absolute;
          bottom: 3vw;
          left: 5vw;
          padding: 1vw 1.5vw;
          border-radius: 20px;
          font-size: 0.8rem;
          letter-spacing: 0.2vw;
        }
        .image-cover{
          // height: 45vh;
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 1;
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
      .custom-indicator{
        background-color: rgba(0, 0, 0, 0.1);
        color: #fff;
        position: absolute;
        bottom: 3vw;
        right: 5vw;
        padding: 1vw 1.5vw;
        border-radius: 20px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
