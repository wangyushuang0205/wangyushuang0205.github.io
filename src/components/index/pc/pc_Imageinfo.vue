<template>
  <div class="info_item">
    <!-- <div class="info_banner_isplay" @click="changeIcon">
      <i v-if="isPlay" class="el-icon-video-play">
        <span>已暂停轮播</span>
      </i>
      <i v-else class="el-icon-video-pause">
        <span>已开启轮播</span>
      </i>
    </div> -->
    <div id="info_img">
      <ul class="info_ul">
        <li v-for="item in company.banner" :key="item.index">
          <img :src="item.url">
          <span></span>
        </li>
      </ul>
    </div>
    <div id="info_button" v-if="isShow">
      <i @click="left()" class="el-icon-arrow-left"></i>
      <i @click="right()" class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>
<script>
import pcHeadline from '@/components/common/pc/pc_headline';
export default {
  components: {
    pcHeadline,
  },
  data() {
    return {
      mark   : 0, //比对图片索引的变量
      calleft: 0,
      list   : [],
      index  : this.$route.query.index,
      count  : '',
      offset : 0,
      isPlay : true,
      isShow : true,
    }
  },
  methods: {
    left() {
      let _self   = this;
      let len     = _self.list.length;
      _self.count = Math.floor(len / 3);
      let mod     = Math.floor(len % 3);
      if (mod >= 1 && mod <= 2) {
        if (1 <= _self.mark) {
          _self.mark -= 1;
          let wid     = -101.01 * _self.mark;
          let x       = 'translateX' + '(' + wid + '%' + ')';
          $('.info_ul').css({
            'transform' : x,
            'transition': 'transform 1000ms'
          })
        } 
        else {
          _self.mark = _self.count;
          let wid    = (-101.01) * _self.mark;
          let x      = 'translateX' + '(' + wid + '%' + ')';
          $('.info_ul').css({
            'transform': x,
            'transition': 'transform 1000ms'
          })
        }
      }else if ( mod == 0 ){
        if (1 <= _self.mark) {
          _self.mark -= 1;
          let wid     = -101.01 * _self.mark;
          let x       = 'translateX' + '(' + wid + '%' + ')';
          $('.info_ul').css({
            'transform': x,
            'transition': 'transform 1000ms'
          })
        } 
        else {
          _self.mark = (_self.count-1);
          let wid    = (-101.01) * _self.mark;
          let x      = 'translateX' + '(' + wid + '%' + ')';
          $('.info_ul').css({
            'transform': x,
            'transition': 'transform 1000ms'
          })
        }
      }
    },
    right() {
      let _self   = this;
      let len     = _self.list.length;
      _self.count = Math.floor(len / 3);
      let mod     = Math.floor(len % 3);
      if (mod >= 1 && mod <= 2) {//当图片数量不能被整除时
        if (_self.mark < _self.count) {
          _self.mark += 1;
          let wid     = -101.01 * _self.mark;
          let x       = 'translateX' + '(' + wid + '%' + ')';
          $('.info_ul').css({
            'transform': x,
            'transition': 'transform 1000ms'
          })
        }
        else {
          _self.mark = 0;
          $('.info_ul').css({
            'transform': "translateX(0px)",
            'transition': 'transform 1000ms'
          })
        }
      } else if(mod == 0){
        //当图片数量可以被整除时
        if (_self.mark < (_self.count-1)) {
          _self.mark += 1;
          let wid = -101.01 * _self.mark;
          let x = 'translateX' + '(' + wid + '%' + ')';
          $('.info_ul').css({
            'transform': x,
            'transition': 'transform 1000ms'
          })
        }
        else {
          _self.mark = 0;
          $('.info_ul').css({
            'transform': "translateX(0px)",
            'transition': 'transform 1000ms'
          })
        }
      }
    },
    changeIcon(){
      let _self    = this;
      _self.isPlay = !_self.isPlay;
      _self.isShow = !_self.isShow;
      _self.change();
      // if (_self.isShow == false && _self.isPlay == false) {
      //   _self.change();
      // } else if(_self.isShow == true && _self.isPlay == true){
      //   console.log('暂停了');
      //   _self.close();
      // }
    },
    push(item) {
      // this.$router.push({ name: 'pc_newsInfo', query: { index: item.index } })
    },
    change(){
      var speed    = 10;
      var info_img = $('#info_img');
      var ul       = $('#info_ul',info_img);
      var li       = $('li',ul);
      ul.append(li.slice(0,6).clone());
      var timer    = setInterval(Marquee,speed);
      // info_img.hover(function() {
      //   clearInterval(timer);
      // },function(){
      //   //离开继续调用
      //   timer   = setInterval(Marquee,speed);
      // });
      var width = $('ul>li').length * $('ul>li').eq(0).width();
      console.log(width);
      function Marquee(){
        if(info_img.scrollLeft()>= width){
          info_img.scrollLeft(0);
        }else{
          info_img.scrollLeft(info_img.scrollLeft()+1);
        }
      }
    },
    // close(){
    //   var speed    = -10;
    //   var info_img = $('#info_img');
    //   var ul       = $('#info_ul',info_img);
    //   var li       = $('li',ul);
    //   ul.append(li.slice(0,6).clone());
    //   var timer    = setInterval(Marquee,speed);
    //   $('.info_banner_isplay').click(function() {
    //     clearInterval(timer);
    //   });
    // },
    init(){
      let _self    = this;
      _self.list   = _self.company.banner;
    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style lang="less" scoped>
.info_item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .info_banner_isplay{
    width: 70%;
    margin: 0 auto;
    text-align: left;
    i {
      font-size: 45px;
      color: #fff;
      padding: 10px;
      border-radius: 5%;
      span{
        margin-left: 20px;
        font-size: 16px;
      }
    }
  }

  #info_img {
    width: 70%;
    margin: 0 auto;
    height: 58%;
    position: relative;
    overflow: hidden;

    .info_ul {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      top: 0;
      z-index: 9;

      li {
        display: inline-flex;
        align-items: center;
        min-width: 32.67%;
        width: 32.67%;
        margin-right: 1%;

        img {
          width: 100%;
          height: 350px;
          text-align: center;
          cursor: pointer;
        }
      }
      li:hover{
        background: rgba(0, 0, 0, 0.8);
      }
      li:hover img {
        opacity: 0.6;
        cursor: pointer;
      }
    }
  }

  #info_button{
    width: 90%;
    height: 16%;
    margin: 0 auto;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
      i {
        font-size: 45px;
        font-weight: bolder;
        background-color: rgba(0, 0, 0, 0.2);
        color: #fff;
        padding: 2%;
        border-radius: 8%;
        z-index: 999;
        cursor: pointer;
        
        &:first-child{
          position: absolute;
          left: 0;
        }
        &:last-child{
          position: absolute;
          right: 0;
        }
      }
    }
}
</style>
