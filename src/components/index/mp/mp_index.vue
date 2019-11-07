<template>
  <div class="mobile-index">
    <mpHeader></mpHeader>
    <div class="top-content"> 
      <img src="@/assets/img/banner/banner1.jpg" class="background">
      <div class="top-content-one">
        <img class="front_image   ag_image" src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMjliNmFkZjViZDEzOWE5YTA1MjJkYTZjMjAyOTczZDUtMTk4eDEyNy5wbmc_p_p100_p_3D.png" alt="sdfdsfdsfd" description="" data-attach-id="9523" data-title="sdfdsfdsfd" title="" src-img="" style="">
      </div>
      <div class="top-content-two">
        <div class="top-content-two-up">
          <p>盛拓·摄影工作室简介</p>
          <p v-text="company.introduce" class="company-introduce"></p>
          <el-button plain @click="$router.push({name:'mp_about'})">MORE INFO</el-button>
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
          <el-button plain @click="$router.push({name:'mp_product'})">MORE PICTURES</el-button>
        </div>
      </div>
      <mpBanner class="mp-banner"></mpBanner>
      <div class="top-content-five">
        <div class="top-content-five-up">
          <p>盛拓·联系我们</p>
          <div v-if="company.wx_code">
            <van-image fit="cover" :src="company.wx_code"/>
          </div>
          <div class="contacts">
            <p v-if="company.mobile"><i class="el-icon-phone-outline"></i> <span>{{company.mobile}}</span></p>
            <p v-if="company.email"><i class="el-icon-message"></i> <span>{{company.email}}</span></p>
            <p v-if="company.address"><i class="el-icon-position"></i> <span>{{company.address}}</span></p>
          </div>
          <!-- <p v-text="company.introduce" class="company-introduce"></p> -->
        </div>
      </div>
    </div>
    <el-backtop target=".top-content" :visibility-height="300" :bottom="100">
      <div class="up-container"><i class="el-icon-arrow-up"></i></div>
    </el-backtop>
    <mpFooter ref="mpFooter" :props="{index:{isActive:'index'}}"></mpFooter>
  </div>
</template>
<script>
import mpHeader from '@/components/index/common/mp_header';
import mpFooter from '@/components/index/common/mp_footer';
import mpBanner from '@/components/common/mp/mp_banner';
import mpMenu   from '@/components/index/common/mp_menu';
import { ImagePreview } from 'vant';
export default {
  components: {
    mpHeader,
    mpFooter,
    mpBanner,
    mpMenu,
  },
  data() {
    return {
      isShowSide: false,
      imagesArr : [],
    }
  },
  methods: {
    closeSide() {
      this.isShowSide = false;
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
          _self.$router.push({name:'mp_index'});
        }
      });
    },
  },
  mounted() {
    $(document).ready(function() {
    if (window.history && window.history.pushState) {
      $(window).on('popstate', function () {
        window.history.pushState('forward', null, '#');
        window.history.forward(1);
        console.log("我按返回键了");
      });
    }
      window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
      window.history.forward(1);
    });
    // $(function() {
    //   //menu的高度自适应
    //   let bannerH = $('.mp-banner').height();
    //   console.log(bannerH);
    //   $('.top-content').css('height',bannerH);
    // });
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
.mobile-index{
  width: 100%;
  .mp-banner{
    width: 100%;
  }
  .top-content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 60px;
    left: 0;
    overflow-y: scroll;
    .background{
      width: 100%;
      height: auto;
      margin: 0 auto;
      position: fixed;
      z-index: -1;
      top: 60px;
      left: 0;
    }
    .top-content-one{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);

      img{
        margin-top: 60px;
        margin-bottom: 30px;
      }
    }
    .top-content-two{
      height: 250px;
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
          width: 90%;
          text-align: center;
          line-height: 25px;
          font-size: 0.8rem;
          &:first-child{
            font-size: 1.1rem;
            margin-bottom: 20px;
          }
        }
        .el-button{
          cursor: pointer;
          margin: 20px auto;
          font-size: 0.8rem;
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
      height: 250px;
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
          width: 90%;
          text-align: center;
          line-height: 25px;
          font-size: 0.8rem;
          &:first-child{
            font-size: 22px;
            margin-bottom: 20px;
          }
        }
        .el-button{
          cursor: pointer;
          margin: 20px auto;
          font-size: 0.8rem;
          color: #fff;
          background: #000;
          border: 2px solid #fff;
        }
      }
    }
    .mp-banner{
      height: auto;
    }
    .top-content-five{
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      background-color: #000;
      padding: 20px 0 80px 0;
      .top-content-five-up{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        p{
          color: #fff;
          width: 90%;
          text-align: center;
          line-height: 25px;
          font-size: 0.8rem;
          &:first-child{
            font-size: 1.1rem;
            margin-bottom: 20px;
          }
        }
        .van-image{
          width: 100px;
          height: 100px;
        }
        .contacts{
          margin-top: 10px;
          border: 1px solid #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-left: 20px;
          p{
            text-align: left;
            color: #fff;
            width: 98%;
            line-height: 25px;
            font-size: 0.8rem;
            &:first-child{
              font-size: 0.8rem;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .up-container {
    height: 100%;
    width: 100%;
    border-radius: 10%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;

    .el-icon-arrow-up {
      font-size: 20px;
      font-weight: bolder;
      position: relative;
      animation: move 0.8s infinite;

      @keyframes move {
        0% {
          bottom: 0px;
        }

        50% {
          bottom: 4px;
        }

        100% {
          bottom: 0px;
        }
      }
    }
  }
}
</style>
