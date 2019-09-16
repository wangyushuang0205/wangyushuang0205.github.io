<template>
  <div class="index">
    <pcBanner :class="base.pc.banner.style?'pc-banner-full':'pc-banner'"></pcBanner>
    <div class="index-1 animated bounce">
      <img src="@/assets/img/index/1.png">
    </div>
    <div class="index-core">
      <p class="index-core-title">四大核心</p>
      <div>
        <p>改变一手房、二手房的销售模式</p>
        <p>改变租赁交易销售模式</p>
        <p>改变中介经营模式</p>
        <p>改变开发商经营模式</p>
      </div>
      <p class="index-core-subtitle">我们的口号是：让房地产交易变得更加轻松，实现房地产100%线上交易</p>
    </div>
    <div class="index-2">
      <p class="index-2-title">精耕楼盘</p>
      <div class="index-2-box">
        <div class="index-2-single">
          <div>
            <i class="iconfont iconloupan"></i>
            <p>楼盘精耕</p>
          </div>
          <span>创建楼盘字典，提升经纪人租赁、买卖成交率</span>
        </div>
        <div class="index-2-single">
          <div>
            <i class="el-icon-camera"></i>
            <p>楼盘相册</p>
          </div>
          <span>上传楼盘相册，为成交保驾护航</span>
        </div>
        <div class="index-2-single">
          <div>
            <i class="iconfont iconbaobei"></i>
            <p>楼盘报备统计</p>
          </div>
          <span>报备信息及时汇总，随时可查</span>
        </div>
        <div class="index-2-single">
          <div>
            <i class="iconfont iconqudaoshang"></i>
            <p>专属渠道商</p>
          </div>
          <span>专属渠道，对接服务，再也不怕居于人后了</span>
        </div>
      </div>
    </div>
    <div class="index-3">
      <img class="index-3-img-1" src="https://15865747.s61i.faiusr.com/2/AD0Ik6-IBxACGAAghZmx0gUosML9RzCADzioBQ.jpg">
      <div>
        <img src="@/assets/img/index/3.png">
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
</template>
<script>
import pcBanner from '@/components/common/pc/pc_banner';
export default {
  components: {
    pcBanner,
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
        { icon: 'el-icon-link',            label: '资源调配',    color: '#67C23A' },
        { icon: 'el-icon-guide',           label: '逾期转出',    color: '#409EFF' },
        { icon: 'el-icon-search',          label: '全局匹配',    color: '#cccbcb' },
        { icon: 'el-icon-document-copy',   label: '报备统计',    color: '#E6A23C' },
        { icon: 'el-icon-discount',        label: '专属渠道',    color: '#67C23A' },
        { icon: 'el-icon-receiving',       label: '合作分组',    color: 'lightblue' },
        { icon: 'el-icon-message',         label: '业务提醒',    color: '#409EFF' },
        { icon: 'el-icon-share',           label: '分享房源',    color: 'pink' },
        { icon: 'el-icon-chat-dot-round',  label: '私人定制',    color: '#009688' },
        { icon: 'el-icon-reading',         label: '公告牌',      color: 'lightblue' },
        { icon: 'el-icon-mobile-phone',    label: '支持手机',    color: 'orange' },
        { icon: 'el-icon-more-outline',    label: '更多惊喜',    color: '#cccbcb' },
      ],
    }
  },
  methods: {

  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pc-banner {
    height: 360px;
    width: 70%;
  }

  .pc-banner-full {
    height: 550px;
  }

  .index-1{
    img{
      margin:30px 0;
      width: 99%;
    }
  }
  .index-core{
    width: 99%;
    border-top:1px solid #f1f1f1;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    padding:5vw 0;
    .index-core-title{
      font-size: 2.5rem;
      position:relative;
      margin-bottom:50px;
      &:after{
        content: '';
        position:absolute;
        top: 110%;
        left: 35%;
        background-color: #009fe9;
        width: 30%;
        padding-bottom: 3%;
      }
    }
    div{
      width: 70vw;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      p{
        width: 34vw;
        height: 10vw;
        margin-bottom: 2vw;
        border-radius:5%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        background-color:gray;
        color: white;
      }
    }
    .index-core-subtitle{
      color: gray;
      font-size: 1.2rem;
    }
  }
  .index-2{
    width: 99%;
    border:1px solid #f1f1f1;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    padding:5vw 0;
    .index-2-title{
      font-size: 2.5rem;
      position:relative;
      margin-bottom:50px;
      &:after{
        content: '';
        position:absolute;
        top: 110%;
        left: 35%;
        background-color: #009fe9;
        width: 30%;
        padding-bottom: 3%;
      }
    }
    .index-2-box{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 70vw;
      .index-2-single{
        width: 13vw;
        border: 1px solid #009fe9;
        border-radius: 7px;
        background-color:white;
        display: flex;
        flex-direction: column;
        div{
          width: 100%;
          height: 13vw;
          border-radius:7px 7px 0 0;
          background-color:#03a9f4;
          display: flex;
          flex-direction: column;
          align-items:center;
          justify-content: center;
          i{
            font-size: 4rem;
            color: white;
          }
          .iconloupan{
            font-size: 4.3rem;
          }
          p{
            width: 100%;
            text-align:center;
            font-size: 1.2rem;
            color: white;
            margin-top: 7px;
          }
          &:nth-child(1){
            p{
              margin-top: 3px;
            }
          }
          &:nth-child(2){
            i{
              margin-top: 13px;
            }
          }
        }
        span{
          display: block;
          width: 11vw;
          padding:1vw;
          font-size: 1rem;
          color: gray;
        }
      }
    }
  }
  
  .index-3 {
    height: 34vw;
    overflow:hidden;
    position:relative;
    .index-3-img-1{
      width: 99%;
    }
    div{
      position:absolute;
      top: 0;
      left:0;
      right: 0;
      bottom:0;
      display: flex;
      align-items:center;
      justify-content: center;
      img{
        width: 80vw;
      }
    }
  }
  .index-4{
    padding:30px 0;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    .index-4-title{
      font-size: 2.5rem;
      position:relative;
      margin-bottom:50px;
      &:after{
        content: '';
        position:absolute;
        top: 110%;
        left: 35%;
        background-color: #009fe9;
        width: 30%;
        padding-bottom: 3%;
      }
    }
    .index-4-box{
      width: 70vw;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      div{
        width: 13vw;
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        span{
          display: block;
          width: 7vw;
          height: 7vw;
          border-radius:50%;
          display: flex;
          align-items:center;
          justify-content: center;
          i{
            color: white;
            font-size: 3.5rem;
          }
        }
        p{
          color: gray;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }
  }
}

</style>
