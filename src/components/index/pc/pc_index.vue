<template>
  <div class="index">
    <!-- 背景图片，固定在下层 -->
    <div class="background">
      <!-- <pcBanner class="pc-banner"></pcBanner> -->
      <img src="@/assets/img/banner/banner1.jpg">
    </div>
    <!-- 图片上面的内容 -->
    <div class="top-content">
      <div class="top-content-one">
        <div class="top-content-one-float">
          <div class="header-top">
            <span v-text="company.name" class="company-name"></span>
          </div>
          <img src="@/assets/img/slicing/m6.svg">
        </div>
      </div>
      <div class="top-content-two">
        <div class="top-content-two-up">
          <p>盛拓·摄影工作室简介</p>
          <p v-text="company.introduce" class="company-introduce"></p>
          <el-button plain @click="$router.push({name:'pc_about'})">MORE INFO</el-button>
        </div>
      </div>
      <div class="top-content-three">
        <img class="front_image   ag_image" src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYmVjZDA4ODJlMWVhNGJkOTVhZmY0YmFlNWZhMzE1ZWEtODAweDgwMC5qcGc_p_p100_p_3D.jpg" alt="14" description="" data-attach-id="9262" data-title="14" title="" src-img="" style="">
        <img class="front_image   ag_image" src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvNTRjODFhNDE0OWE4NmViNTQ2OTkyNGIyZTNmNGJhMjQtODAweDgwMC5qcGc_p_p100_p_3D.jpg" alt="15" description="" data-attach-id="9263" data-title="15" title="" src-img="" style="">
        <img class="front_image   ag_image" src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvYzhiODJkYTc5ZTYxYjA5NWIyYWFhODY4ZTlkYmUzNWItODAweDgwMC5qcGc_p_p100_p_3D.jpg" alt="09" description="" data-attach-id="9268" data-title="09" title="" src-img="" style="">
      </div>
      <div class="top-content-four">
        <div class="top-content-four-up">
          <p>盛拓·摄影作品展</p>
          <p v-text="company.introduce" class="company-introduce"></p>
          <el-button plain @click="$router.push({name:'pc_contact'})">MORE PICTURES</el-button>
        </div>
      </div>
      <div class="top-content-five">
        <pcImageinfo class="top-content-five-image"></pcImageinfo>
      </div>
    </div>
  </div>
</template>
<script>
import pcBanner    from '@/components/common/pc/pc_banner';
import pcHeader    from '@/components/index/common/pc_header';
import pcImageinfo from '@/components/index/pc/pc_Imageinfo';
export default {
  components: {
    pcBanner,
    pcHeader,
    pcImageinfo
  },
  data() {
    return {
      list: [],
      cover: '',
    }
  },
  methods: {
    push(target) {
      if (target) {
        this.$router.push({ name: target });
      }
    },
  },
  mounted() {
    // //获取元素
    // var oDownPage = document.getElementById('background');
    // var oTopPage  = document.getElementById('top-content');
    // //当浏览器滚动时
    // document.onscroll = function(){
    //   //浏览器滚动的距离
    //   var scroll_top = document.body.scrollTop;
    //   //计算背景高度与前景高度的比例
    //   var num = oDownPage.offsetHeight / oTopPage.offsetHeight;
    //   //设置背景层滚动的速度
    //   oDownPage.style.marginTop = -scroll_top * num + 'px';
    // }
    $(function() {
      var h = document.body.clientHeight;
      $('.top-content-one').css('height',h);
      $('.top-content-one-float').css('height',h);
      // document.getElementById("con").addEventListener("scroll",function() {
      //   var top = $(".con").scrollTop();
      //   if (top > 100) {
      //     $('.top-content-two-up').addClass('animated fadeInUp')
      //   }
      //   if (top > 400) {
      //     $('.top-content-three').children().eq(0).addClass('animated fadeInUp')
      //     setTimeout(function(){
      //       $('.top-content-three').children().eq(1).addClass('animated fadeInUp')
      //     }, 200);
      //     setTimeout(function(){
      //       $('.top-content-three').children().eq(2).addClass('animated fadeInUp')
      //     }, 400);
      //   }
      //   if (top > 900) {
      //     $('.top-content-four-up').addClass('animated fadeInUp')
      //   }
      // },true);
    });
  },
}

</script>
<style lang="less" scoped>
.index {
  width: 100%;
  .background{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    .pc-banner {
      height: 100%;
      width: 100%;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  .top-content{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .top-content-one{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      .top-content-one-float{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .header-top {
          margin-bottom: 50px;
          span {
            font-size: 35px;
            letter-spacing: 10px;
            display: block;
            padding: 10px 0;
            color: #fff;
          }
        }
      }
    }
    .top-content-two{
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      background-color: #000;
      .top-content-two-up{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
          color: #fff;
          width: 70%;
          text-align: center;
          line-height: 30px;
          &:first-child{
            font-size: 22px;
            margin-bottom: 20px;
          }
          &:last-child{
            font-size: 14px;
          }
        }
        .el-button{
          cursor: pointer;
          margin: 20px auto;
          font-size: 17px;
          text-shadow: 0 0 3px black;
          color: #fff;
          background: #000;
          border: 2px solid #fff;
        }
      }
    }
    .top-content-three{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      img{
        width: 33.33%;
      }
    }
    .top-content-four{
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      background-color: #000;
      .top-content-four-up{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        p{
          color: #fff;
          width: 70%;
          text-align: center;
          line-height: 30px;
          &:first-child{
            font-size: 22px;
            margin-bottom: 20px;
          }
          &:last-child{
            font-size: 14px;
          }
        }
        .el-button{
          cursor: pointer;
          margin: 20px auto;
          font-size: 17px;
          color: #fff;
          background: #000;
          border: 2px solid #fff;
        }
      }
    }
    .top-content-five{
      width: 100%;
      height: 600px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;

      .top-content-five-image {
        height: 600px;
        min-width: 1000px;
      }
    }
  }
}

</style>
