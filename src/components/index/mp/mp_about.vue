<template>
  <div class="about">
    <mpHeader ref="mpHeader"></mpHeader>
    <mpBanner class="mp-banner"></mpBanner>
    <pcHeadline main="关于我们" subtitle="ABOUT US" class="pc_headline"></pcHeadline>
    <div class="about_detail">
      <div class="about_detail_title"><span>提供高端定制化摄影服务</span></div>
      &nbsp;
      <div class="about_detail_content_one">用心，只为完美</div>
      &nbsp;
      <div class="about_detail_content_two">摄影针对客户的品牌和产品，致力于缔造最具价值的视觉，以国际化的视野和务实的操作手法，为客户量身定做更合适的摄影服务，对每一个项目都深入的研究，深度洞察每一个细节，一切从客户的需求出发。
      </div>
      <!-- <span style="font-size:16px"> &nbsp;</span> -->
      <div class="about_detail_content_three">| 丰富的摄影经验，专业的摄影服务 |</div>
    </div>
    <div class="intro">
      <div class="actor">
        <p class="actor_out">
          <van-image fit="fill" round width="10rem" height="10rem" src="https://ccdn.goodq.top/caches/9102962aafdbb7d6f228dc3afcdb2fb0/aHR0cHM6Ly81ZDE5YTg4MzE3Y2JmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDYvYWU5M2Y2MDA2NDgwN2Y3ZDk0MGM0ZWM4YzJmYWI1YjAuanBn.jpg"/>
          <p>盛拓工作室名片</p>
        </p>
      </div>
      <p class="introduce">{{company.introduce}}</p>
    </div>
    <div class="index-footer">
      <mpFooter ref="mpFooter" :props="{index:{isActive:'about'}}"></mpFooter>
    </div>
  </div>
</template>
<script>
import mpHeader from '@/components/index/common/mp_header';
import pcHeadline from '../../common/pc/pc_headline';
import mpBanner from '@/components/common/mp/mp_banner';
import mpFooter from '@/components/index/common/mp_footer';
export default {
  components: {
    mpHeader,
    pcHeadline,
    mpBanner,
    mpFooter
  },
  data() {
    return {
      isShow: true,
      active: 0,
      list: [],
      showData: '',
    }
  },
  methods: {
    // showRight(item) {
    //   if (item) {
    //     this.showData = item;
    //     this.active = item.index;
    //   }
    // },
  },
  mounted() {
    this.list     = this.company.img_view;
    this.showData = this.list[0];
  },
}

</script>
<style lang="less" scoped>
.about {
  width: 100%;
  .headline /deep/ .top[data-v-336ad570]{
    font-size: 1.4rem;
  }
  .headline /deep/ .bottom[data-v-336ad570]{
    font-size: 1rem;
  }
  .pc_headline{
    height: 100px;
  }
  .about_detail{
    width: 90%;
    margin: 10px auto 25px auto;
    text-align: center;
    .about_detail_title{
      color: #000; 
      font-size: 1.2rem;
    }
    .about_detail_content_one{
      color: #999; 
      font-size: 18px;
    }
    .about_detail_content_two{
      color: #999; 
      font-size: 0.9rem; 
      line-height: 1.6; 
      text-align: left;
      text-indent: 30px;
    }
    .about_detail_content_three{
      color: #000; 
      font-size: 1rem;
    }
  }
  .intro {
    width: 90%;
    margin: 0 auto 80px auto;
    min-height: 400px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    .actor{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-radius: 10%;
      border-bottom: 1px solid #fff;

      .actor_out{
        border-radius: 50%;
        padding: 10px;
        .van-image{
          box-shadow: 0 0 10px #fff;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .company {
      color: orange;
      font-size: 40px;
      width: 100%;
      text-align: center;
      letter-spacing: 10px;
      text-shadow: 2px 2px 2px rgba(255, 0, 0, 0.3);
    }
    .introduce{
      width:85%;
      margin:0 auto;
      padding: 30px;
      font-size: 16px;
      line-height: 30px;
      text-indent:35px;
      letter-spacing: 1px;
    }
  }
}
</style>
