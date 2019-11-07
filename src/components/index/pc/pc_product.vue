<template>
  <div class="product_about">
    <div class="background">
      <pcHeadline main="盛拓作品" subtitle="ABOUT PRODUCT" class="pc-headline"></pcHeadline>
      <div class="top_content">
        <div class="list">
          <div class="left_menu">
            <el-button type="text" class="menu" @click="isShow = !isShow">目 录</el-button>
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
                    <img class="medium" :src="item.url">
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
            <li v-for="item in showData.banner" :key="item.index"><van-image fit="cover" class="img_view" :src="item.url"/></li>
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
      list    : [],
      showData: '',
    }
  },
  methods: {
    showRight(item) {
      if (item) {
        this.showData = item;
        this.active = item.index;
        //点击变换时改变图片的宽高
        $(function() {
          var w = $('.img_list_first').width();
          $('.img_list_second').css('width',w);
          let w1 = w / 3 - 10;
          $('.img_view').css('width', w1);
          $('.img_view').css('height', w1);
        });
      }
    },
  },
  mounted() {
    this.list     = this.company.img_view;
    this.showData = this.list[0];
    //进入该页面时改变图片的宽高
    $(function() {
      var w = $('.img_list_first').width();
      $('.img_list_second').css('width',w);
      let w1 = w / 3 - 10;
      $('.img_view').css('width', w1);
      $('.img_view').css('height', w1);
    });
    //监测屏幕宽度发生变化时改变图片宽高
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
          width: 99%;
          height: 380px;
          margin: 0 auto;
          border-radius: 10px;
          overflow: hidden;
          .el-carousel__item {
            width: 100%;
            height: 100%;
            .picture {
              width: 100%;
              overflow-x: hidden;
              cursor: pointer;
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              .medium {
                width: auto;
                height: 380px;
                border-radius: 10px;
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
