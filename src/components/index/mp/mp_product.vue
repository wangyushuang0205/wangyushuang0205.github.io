<template>
  <div class="news_item">
    <mpBanner class="mp-banner"></mpBanner>
    <pcHeadline main="产品相关" subtitle="INDUSTRY INFORMATION"></pcHeadline>
    <div class="news" v-for="item in list" :key="item.index">
      <p class="title-p"><span class="title-span"><span>{{item.index+1}}</span></span></p>
      <el-divider>{{item.label}}</el-divider>
      <div v-if="showData.banner">
        <el-carousel :interval="4000">
          <el-carousel-item v-for="item in showData.banner" :key="item.index">
            <div class="picture">
              <img class="medium" :src="item.url"></img>
              <span>{{item.label}}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right_first">
        <el-card class="box-card">
          <div class="text item">
            <p v-html="item.content"></p>
          </div>
        </el-card>
      </div>
    </div>
    <div class="index-footer">
      <mpFooter ref="mpFooter" :props="{index:{isActive:'product'}}"></mpFooter>
    </div>
  </div>
</template>
<script>
import pcHeadline from '../../common/pc/pc_headline';
import mpBanner from '@/components/common/mp/mp_banner';
import mpFooter from '@/components/index/common/mp_footer';
export default {
  components: {
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
.news_item {
  width: 100%;
  .headline /deep/ .top[data-v-336ad570]{
    font-size: 1.4rem;
  }
  .headline /deep/ .bottom[data-v-336ad570]{
    font-size: 0.5rem;
  }
  .news {
    width: 100%;
    height: 100%;

    .title-p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 20px 0;

      .title-span {
        display: block;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        color: #26a2ff;
        width: 55px;
        height: 55px;
        border: 1px solid #66b1ff;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          border: 1px dashed #66b1ff;
        }
      }
    }
    .el-divider{
      text-align: center;
    }

    .el-carousel__item {
      width: 100%;

      .picture {
        height: 100%;
        cursor: pointer;

        .medium {
          width: 100%;
          height: 100%;
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
      height: auto;
      font-size: 18px;
      line-height: 30px;
    }

    .item {
      margin-bottom: 18px;
      width: 100%;
      text-indent: 25px;
    }

  }
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

</style>
