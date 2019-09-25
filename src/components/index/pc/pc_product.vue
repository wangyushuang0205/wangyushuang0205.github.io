<template>
  <div class="product_about">
    <div class="background">
      <pcHeadline main="回回作品" subtitle="ABOUT PRODUCT" class="pc-headline"></pcHeadline>
      <div class="top_content">
        <div class="list">
          <div class="left_menu">
            <el-button type="text" class="menu" @click="isShow = !isShow"> 目 录</el-button>
            <div class="select">
              <el-collapse-transition>
                <div v-show="isShow">
                  <div :class="active == item.index ? 'transition-box-active':'transition-box'" v-for=" item in list " :key="item.index" @click="showRight(item)">
                    <span v-if="active == item.index" class="el-icon-s-flag"></span>
                    <span v-else>&nbsp;&nbsp;&nbsp;</span>
                    {{item.label}}
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </div>
          <div class="right_detail">
            <div v-if="showData.banner">
              <el-carousel :interval="4000" indicator-position="inside">
                <el-carousel-item v-for="item in showData.banner" @click="showRight(item)" :key="item.index">
                  <div class="picture">
                    <img class="medium" :src="item.url"></img>
                    <!-- <span>{{showData.label}}</span> -->
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="img_list">
          <div class="img_list_first">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="title">{{showData.label}}</span>
              </div>
              <div class="text item">
                <p v-html="showData.content"></p>
              </div>
            </el-card>
          </div>
          <div class="img_list_second">
            <li v-for="item in company.banner" :key="item.index"><img :src="item.url" class="img_view"></li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pcHeadline from '../../common/pc/pc_headline';
export default {
  components: {
    pcHeadline,
  },
  data() {
    return {
      isShow  : true,
      active  : 0,
      list    : [
        {
          index  : 0,//第一条放公司简介
          label  : '人物写真',
          banner : [
            {index:0,url:require('@/assets/img/banner/banner1.jpg')},
          ],
          content: '<p><strong>公司简介:</strong></p><p>青岛回回·摄影工作室成立于2019年9月16日，回回服务小众，品质高端，主营业务为高端个人写真、儿童私人摄影、商业摄影、毕业摄影等。</p>',
        },
        {
          index  : 1,
          label  : '毕业季',
          content: '易维护，易操作。<p class="ql-indent-1">青岛菊房易卖网络科技有限公司前身成立于2008年，一家专业从事房地产销售租赁的自营连锁店，经过十年的不懈努力，收集了国内近百家房地产中介公司信息化建设需求，吸取了各地的房地产行业管理经验和思路后，形成了现在的一手房代理、房屋中介服务、行业管理软件开发、网站建设、网络系统集成、技术咨询、技术服务、楼宇智能化工程的现代高科技企业。</p>',
        },
        {
          index  : 2,
          label  : '高端定制',
          content: '提供全面的资源管理，包括经纪人角色权限管理，门店管理，系统管理，房源资源管理，客源资源管理，逾期管理，审核管理等,为您提供高效的资源管理',
        },
                {
          index  : 3,
          label  : '故事记录',
          content: '<p><strong>简明的人员管理:</strong></p><p>完善的人力地图，提供高效且多样化的职工管理方式，支持门店管理与部门管理等。通过角色管理可灵活控制各角色对应的权限与职能</p>',
        },
        {
          index  : 4,
          label  : '商业摄影',
          content: '更细致的楼盘精耕系统，更加细致的渠道商管理，合作商管理，建立属于自己的销售体系。员工可实勘楼盘的信息，建立楼盘相册等。通过审核后，可在移动端上"新房"处展示，面向更多的"菊房"系统客户。',
        },
        {
          index  : 5,
          label  : '拼接艺术-纯真',
          content: '提供移动端支持，支持对接微信公众号，钉钉等，打造更专业，更完善的产品。移动端系统对接报备录入，房源分享查看等功能。</p>',
        },
        {
          index  : 6,
          label  : '拼接艺术-瞭望',
          content: '我司拥有完善的经纪人团队，年轻且富有激情的开发团队，我们正在努力提升自己，产品也在及时升级。我们也希望有朋友为我们提出建议，打造更好更贴近于用户群体的产品。',
        },
        {
          index  : 7,
          label  : '完美摄影-未来可期',
          content: '我司拥有完善的经纪人团队，年轻且富有激情的开发团队，我们正在努力提升自己，产品也在及时升级。我们也希望有朋友为我们提出建议，打造更好更贴近于用户群体的产品。',
        },
        {
          index  : 8,
          label  : '联系我们',
          banner : [
            {index:0,url:require('@/assets/img/code.jpg')},
          ],
          content: '很荣幸在这里给您介绍我司的主要产品，产品功能还有很多不一一介绍了，若您有意向可点击“联系我们”联系我们哦~~',
        },
      ],
      showData: '',
    }
  },
  methods: {
    showRight(item) {
      if (item) {
        this.showData = item;
        this.active = item.index;
      }
    },
  },
  mounted() {
    this.showData = this.list[0];
    $(function() {
      var w = $('.img_list_first').width();
      $('.img_list_second').css('width',w);
      let w1 = w / 3 - 10;
      $('.img_view').css('width', w1);
      $('.img_view').css('height', w1);
    });
    window.addEventListener('load', function() {
      window.addEventListener('resize', function() {
        var w = $('.img_list_first').width();
        $('.img_list_second').css('width',w);
        let w1 = w / 3 - 10;
        $('.img_view').css('width', w1);
        $('.img_view').css('height', w1);
      });
    });
  }
}

</script>
<style lang="less" scoped>
.product_about {
  width: 100%;
  height: 100%;
  .background{
    background-image: url('https://ccdn.goodq.top/caches/9102962aafdbb7d6f228dc3afcdb2fb0/aHR0cHM6Ly81ZDE5YTg4MzE3Y2JmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDYvYWU5M2Y2MDA2NDgwN2Y3ZDk0MGM0ZWM4YzJmYWI1YjAuanBn.jpg');
    background-repeat:no-repeat; 
    background-size: cover; 
    background-attachment: fixed; 
    background-position: center center;
    .pc-headline{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .top_content{
    padding-bottom: 50px;
    .list {
      width: 71.2%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0px auto 10px auto;

      .left_menu {
        width: 30%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        padding: 10px;
        box-shadow: 0 0 2px #fff;
        border-radius: 10px;

        .menu {
          width: 100%;
          font-size: 25px;
          color: #b8bb4e;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .select {
          margin: 10px auto auto 10px;
          height: 100%;

          .transition-box {
            cursor: pointer;
            position: flex;
            justify-content: flex-start;
            margin-bottom: 10px;
            line-height: 30px;
            border-radius: 4px;
            color: #fff;
            box-sizing: border-box;
          }

          .transition-box-active {
            cursor: pointer;
            position: flex;
            justify-content: flex-start;
            margin-bottom: 10px;
            line-height: 30px;
            border-radius: 4px;
            color: #ce8781;
            box-sizing: border-box;
          }

          .transition-box:hover {
            color: #ce8781;
          }
        }
      }

      .right_detail {
        width: 70%;
        height: 100%;
        margin-left: 13px;
        background: rgba(0, 0, 0, 0.4);
        padding: 22px 10px;
        margin-bottom: 30px;
        box-shadow: 0 0 2px #fff;
        border-radius: 10px;

        /deep/ .el-carousel__container{
          height: 380px;
          border-radius: 10px;
          overflow: hidden;
          .el-carousel__item {
            width: 100%;
            height: 100%;
            .picture {
              cursor: pointer;
              border-radius: 10px;
              text-align: center;
              .medium {
                width: auto;
                height: 380px;
                border-radius: 10px;
              }
              span {
                position: absolute;
                bottom: 0;
                display: block;
                width: 95%;
                height: 40px;
                line-height: 40px;
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                padding-left: 5%;
              }
            }
          }
        }
        /deep/ .el-carousel__button{
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
    .img_list{
      width: 70%;
      margin: 10px auto;
      background: rgba(0, 0, 0, 0.4);
      padding: 10px;
      box-shadow: 0 0 2px #fff;
      border-radius: 10px;

      .img_list_first {
        margin: 10px;
        .box-card{
          border-radius: 10px;
          .title {
            cursor: pointer;
            font-size: 20px;
          }
          .text {
            min-height: 150px;
            font-size: 18px;
            line-height: 30px;
          }
          .item {
            margin-bottom: 18px;
            width: 100%;
            text-indent: 25px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 8;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .clearfix:before,
          .clearfix:after {
            display: table;
            content: "";
          }
          .clearfix:after {
            clear: both
          }
        }
      }
      .img_list_second{
        width: 100%;
        margin: 0 auto 10px 9px;
        display: inline-block;
        justify-content: space-around;
        align-items: center;
        li{
          display: inline;
          .img_view{
            margin: 5px;
          }
        }
      }
    }
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

</style>
