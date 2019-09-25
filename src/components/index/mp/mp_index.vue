<template>
  <div class="mobile-index">
    <div class="index-header">
      <span>回回摄影工作室</span>
    </div>
    <!-- 轮播 -->
    <mpBanner class="mp-banner"></mpBanner>
    <div class="index-contaniner">
      <div class="index-1">
        <p class="index-1-title">四大核心</p>
        <div>
          <p class="animated bounceInLeft">改变一手房、二手房的销售模式</p>
          <p class="animated bounceInRight">改变租赁交易销售模式</p>
          <p class="animated bounceInLeft">改变中介经营模式</p>
          <p class="animated bounceInRight">改变开发商经营模式</p>
        </div>
        <p class="index-1-subtitle">我们的口号是<br>让房地产交易变得更加轻松<br>实现房地产100%线上交易</p>
      </div>
      <div class="index-2">
        <p class="index-2-title">精耕楼盘</p>
        <div class="index-2-box">
          <div class="index-2-single">
            <div class="index-2-single-content">
              <i class="iconfont iconloupan"></i>
              <p>楼盘精耕</p>
            </div>
            <span>创建楼盘字典，提升经纪人租赁、买卖成交率</span>
          </div>
          <div class="index-2-single">
            <span>上传楼盘相册，为成交保驾护航</span>
            <div class="index-2-single-content">
              <i class="el-icon-camera"></i>
              <p>楼盘相册</p>
            </div>
          </div>
          <div class="index-2-single">
            <div class="index-2-single-content">
              <i class="iconfont iconbaobei"></i>
              <p>楼盘报备统计</p>
            </div>
            <span>报备信息及时汇总，随时可查</span>
          </div>
          <div class="index-2-single">
            <span>专属渠道，对接服务，再也不怕居于人后了</span>
            <div class="index-2-single-content">
              <i class="iconfont iconqudaoshang"></i>
              <p>专属渠道商</p>
            </div>
          </div>
        </div>
      </div>
      <div class="index-4">
        <p class="index-4-title">功能模块</p>
        <div class="index-4-box">
          <div v-for="(item, index) in list" :key="index">
            <span :style="`background-color:${item.color}`">
              <i :class="item.icon"></i>
            </span>
            <p v-text="item.label"></p>
          </div>
        </div>
      </div>
    </div>
    <mpFooter ref="mpFooter" :props="{index:{isActive:'index'}}"></mpFooter>
  </div>
</template>
<script>
import mpFooter from '@/components/index/common/mp_footer';
import mpBanner from '@/components/common/mp/mp_banner';
export default {
  components: {
    mpFooter,
    mpBanner,
  },
  data() {
    return {
      list: [
        { icon: 'el-icon-user',            label: '个人资源池', color: '#409EFF' },
        { icon: 'el-icon-house',           label: '共享房源池', color: '#9fb2c5' },
        { icon: 'el-icon-user',            label: '共享客户池', color: '#67C23A' },
        { icon: 'el-icon-coordinate',      label: '成交合同',   color: '#E6A23C' },
        { icon: 'el-icon-position',        label: '房源地图',   color: '#F56C6C' },
        { icon: 'el-icon-edit-outline',    label: '业务报表',   color: '#E6A23C' },
        { icon: 'el-icon-office-building', label: '城市新房',   color: '#9fb2c5' },
        { icon: 'el-icon-film',            label: '门店',       color: '#409EFF' },
        { icon: 'el-icon-link',            label: '资源调配',   color: '#67C23A' },
        { icon: 'el-icon-guide',           label: '逾期转出',   color: '#409EFF' },
        { icon: 'el-icon-search',          label: '全局匹配',   color: '#cccbcb' },
        { icon: 'el-icon-document-copy',   label: '报备统计',   color: '#E6A23C' },
        { icon: 'el-icon-discount',        label: '专属渠道',   color: '#67C23A' },
        { icon: 'el-icon-receiving',       label: '合作分组',   color: 'lightblue' },
        { icon: 'el-icon-message',         label: '业务提醒',   color: '#409EFF' },
        { icon: 'el-icon-share',           label: '分享房源',   color: 'pink' },
        { icon: 'el-icon-chat-dot-round',  label: '私人定制',   color: '#009688' },
        { icon: 'el-icon-reading',         label: '公告牌',     color: 'lightblue' },
        { icon: 'el-icon-mobile-phone',    label: '支持手机',   color: 'orange' },
        { icon: 'el-icon-more-outline',    label: '更多惊喜',   color: '#cccbcb' },
      ],
    }
  },
  methods: {
    handleScroll() {
      let top    = document.documentElement.scrollTop || document.body.scrollTop;
      let height = $('.van-swipe').height();
      let a      = top / (height*0.5);
      $('.index-header').css('backgroundColor','rgba(255, 255, 255,' + a + ')');
      if (top >= (height*0.5)) {
        $('.index-header').css('color','#000');
      }else{
        $('.index-header').css('color','#fff');
      }
    },
  },
  mounted() {
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  // 离开该页面需要移除这个监听的事件
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}

</script>
<style lang="less" scoped>
.mobile-index{
  width: 100%;

  .index-header{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0);
    color: #fff;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    span{
      margin-left: 20px;
    }
  }
  .index-contaniner{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    .index-1{
      width: 100%;
      margin: 0 auto;
      border-top:1px solid #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding:5vw 0;

      .index-1-title{
        font-size: 1.5rem;
        position: relative;
        margin-bottom: 50px;
        &:after{
          content: '';
          position: absolute;
          top: 110%;
          left: 35%;
          background-color: #009fe9;
          width: 30%;
          padding-bottom: 3%;
        }
      }
      div{
        width: 80vw;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        p{
          width: 70vw;
          height: 10vw;
          margin-bottom: 2vw;
          border-radius: 15px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          background: gray;
          color: #fff;
        }
      }

      .index-1-subtitle{
        width: 80vw;
        color: gray;
        font-size: 1rem;
        text-align: center;
      }
    }

    .index-2{
      width: 100%;
      margin: 0 auto;
      border-top: 1px solid #f1f1f1;
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      padding: 5vw 0;

      .index-2-title{
        font-size: 1.5rem;
        position: relative;
        margin-bottom: 50px;
        &:after{
          content: '';
          position: absolute;
          top: 110%;
          left: 35%;
          background-color: #009fe9;
          width: 30%;
          padding-bottom: 3%;
        }
      }

      .index-2-box{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 70vw;

        .index-2-single{
          width: 70vw;
          border: 1px solid #009fe9;
          border-radius: 7px;
          margin: 5px auto;
          background-color: white;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .index-2-single-content{
            width: 50%;
            height: 15vh;
            border-radius:7px 0 0 7px;
            background-color: #03a9f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            i{
              font-size: 2rem;
              color: white;
            }

            .iconloupan{
              font-size: 2.3rem;
            }

            p{
              width: 100%;
              text-align: center;
              font-size: 1rem;
              color: white;
              margin-top: 7px;
            }
          }

          .index-2-single-content:nth-child(even){
            border-radius: 0 7px 7px 0;
          }

          span{
            display: block;
            width: 45%;
            padding: 0 1vw;
            font-size: 1rem;
            color: gray;
            text-align: center;
          }
        }
      }
    }

    .index-4{
      width: 100%;
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 20vw;

      .index-4-title{
        font-size: 1.5rem;
        position: relative;
        margin-bottom: 50px;
        &:after{
          content: '';
          position: absolute;
          top: 110%;
          left: 35%;
          background-color: #009fe9;
          width: 30%;
          padding-bottom: 3%;
        }
      }

      .index-4-box{
        width: 90vw;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        div{
          width: 20%;
          display: flex;
          align-items:center;
          justify-content: center;
          flex-direction: column;

          span{
            display: block;
            width: 16vw;
            height: 16vw;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            i{
              color: white;
              font-size: 1.5rem;
            }
          }

          p{
            width: 16vw;
            height: 5vh;
            line-height: 5vh;
            color: gray;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 20px;
            font-size: 0.8rem;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
