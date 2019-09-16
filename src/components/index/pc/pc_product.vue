<template>
  <div class="product_about">
    <pcHeadline main="产品相关" subtitle="ABOUT PRODUCT"></pcHeadline>
    <div class="list">
      <div class="left_menu">
        <el-button type="text" class="el-icon-s-unfold" @click="isShow = !isShow"> 目 录</el-button>
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
          <el-carousel :interval="4000" indicator-position="outside" arrow="always" height="400px">
            <el-carousel-item v-for="item in showData.banner" @click="showRight(item)" :key="item.index">
              <div class="picture">
                <img class="medium" :src="item.url"></img>
                <span>{{showData.label}}</span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right_first">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="title">{{showData.label}}</span>
            </div>
            <div class="text item">
              <p v-html="showData.content"></p>
            </div>
          </el-card>
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
          label  : '关于我们',
          banner : [
            {index:0,url:require('@/assets/img/index/0.png')},
            {index:1,url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1568094110,1386442470&fm=26&gp=0.jpg"},
          ],
          content: '<p><strong>公司简介:</strong></p><p>青岛菊房易卖网络科技有限公司前身成立于2008年，一家专业从事房地产销售租赁的自营连锁店，经过十年的不懈努力，收集了国内近百家房地产中介公司信息化建设需求，吸取了各地的房地产行业管理经验和思路后，形成了现在的一手房代理、房屋中介服务、行业管理软件开发、网站建设、网络系统集成、技术咨询、技术服务、楼宇智能化工程的现代高科技企业。</p>',
        },
        {
          index  : 1,
          label  : '产品介绍',
          content: '易维护，易操作。<p class="ql-indent-1">青岛菊房易卖网络科技有限公司前身成立于2008年，一家专业从事房地产销售租赁的自营连锁店，经过十年的不懈努力，收集了国内近百家房地产中介公司信息化建设需求，吸取了各地的房地产行业管理经验和思路后，形成了现在的一手房代理、房屋中介服务、行业管理软件开发、网站建设、网络系统集成、技术咨询、技术服务、楼宇智能化工程的现代高科技企业。</p>',
        },
        {
          index  : 2,
          label  : '提供高效的资源管理',
          content: '提供全面的资源管理，包括经纪人角色权限管理，门店管理，系统管理，房源资源管理，客源资源管理，逾期管理，审核管理等,为您提供高效的资源管理',
        },
                {
          index  : 3,
          label  : '提供简明的人员管理',
          content: '<p><strong>简明的人员管理:</strong></p><p>完善的人力地图，提供高效且多样化的职工管理方式，支持门店管理与部门管理等。通过角色管理可灵活控制各角色对应的权限与职能</p>',
        },
        {
          index  : 4,
          label  : '完善的楼盘系统',
          content: '更细致的楼盘精耕系统，更加细致的渠道商管理，合作商管理，建立属于自己的销售体系。员工可实勘楼盘的信息，建立楼盘相册等。通过审核后，可在移动端上"新房"处展示，面向更多的"菊房"系统客户。',
        },
        {
          index  : 5,
          label  : '安全美观的移动端系统',
          content: '提供移动端支持，支持对接微信公众号，钉钉等，打造更专业，更完善的产品。移动端系统对接报备录入，房源分享查看等功能。</p>',
        },
        {
          index  : 6,
          label  : '未来可期',
          content: '我司拥有完善的经纪人团队，年轻且富有激情的开发团队，我们正在努力提升自己，产品也在及时升级。我们也希望有朋友为我们提出建议，打造更好更贴近于用户群体的产品。',
        },
        {
          index  : 7,
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
  }
}

</script>
<style lang="less" scoped>
.product_about {

  .list {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0px auto 20px auto;

    .left_menu {
      width: 30%;

      .el-icon-s-unfold {
        font-size: 25px;
      }

      .select {
        margin-top: 15px;
        height: 100%;

        .transition-box {
          cursor: pointer;
          position: flex;
          justify-content: flex-start;
          margin-bottom: 10px;
          line-height: 30px;
          border-radius: 4px;
          color: #000;
          box-sizing: border-box;
        }

        .transition-box-active {
          cursor: pointer;
          position: flex;
          justify-content: flex-start;
          margin-bottom: 10px;
          line-height: 30px;
          border-radius: 4px;
          color: #409eff;
          box-sizing: border-box;
        }

        .transition-box:hover {
          color: #409eff;
        }
      }

    }

    .right_detail {
      width: 68%;
      height: 100%;
      min-height: 700px;
      margin-top: 13px;

      .el-carousel__item {
        width: 100%;

        .picture {
          height: 100%;
          cursor: pointer;

          .medium {
            width: 100%;
            height: 100%;
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

  }

  .right_first {
    .title {
      cursor: pointer;
      font-size: 20px;
    }
    .el-icon-arrow-left {
      color: #409EFF;
      position: relative;
      animation: move 0.8s infinite;

      @keyframes move {
        0% {
          left: 0px;
        }

        50% {
          left: 4px;
        }

        100% {
          left: 0px;
        }
      }
    }

    .tip {
      font-size: 14px;
      color: #409EFF;
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

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

</style>
