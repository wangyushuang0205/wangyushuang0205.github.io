<template>
  <div class="mp_product">
    <mpHeader ref="mpHeader"></mpHeader>
    <div class="content">
      <img src="https://ccdn.goodq.top/caches/9102962aafdbb7d6f228dc3afcdb2fb0/aHR0cHM6Ly81ZDE5YTg4MzE3Y2JmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDYvYWU5M2Y2MDA2NDgwN2Y3ZDk0MGM0ZWM4YzJmYWI1YjAuanBn.jpg" class="background">
      <pcHeadline main="照片欣赏" subtitle="PHOTO" class="pc_headline"></pcHeadline>
      <div class="news" v-for="item in list" :key="item.index">
        <div class="card">
          <el-card class="box-card">
            <div class="text item">
              <p v-html="item.content"></p>
            </div>
            <div v-if="list[item.index].banner">
              <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in list[item.index].banner" :key="index">
                  <div class="picture">
                    <van-image fit="cover" class="medium" :src="item.url"/><!--  @click="previewImage(item,index)" -->
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <el-backtop target=".content" :visibility-height="300" :bottom="100">
      <div class="up-container"><i class="el-icon-arrow-up"></i></div>
    </el-backtop>
    <div class="index-footer">
      <mpFooter ref="mpFooter" :props="{index:{isActive:'product'}}"></mpFooter>
    </div>
  </div>
</template>
<script>
import mpHeader from '@/components/index/common/mp_header';
import pcHeadline from '../../common/pc/pc_headline';
import mpBanner from '@/components/common/mp/mp_banner';
import mpFooter from '@/components/index/common/mp_footer';
import { ImagePreview } from 'vant';
export default {
  components: {
    mpHeader,
    pcHeadline,
    mpBanner,
    mpFooter
  },
  data() {
    return {
      isShow : false,
      active : 0,
      list   : [],
      imagesArr:[],
      current    : 0,
    }
  },
  methods: {
    // previewImage(item,index){
    //   let _self  = this;
    //   for (let i = 0; i <= _self.list.length - 1; i++) {
    //     for (let j = 0; j <= _self.list[i].banner.length - 1; j++) {
    //       _self.imagesArr.push(_self.list[i].banner[j].url);
    //     }
    //   }
    //   ImagePreview({
    //     images: _self.imagesArr,
    //     startPosition: item.index,
    //     closeOnPopstate: true,//是否在页面回退时自动关闭
    //     onClose(){
    //       _self.imagesArr = [];
    //     }
    //   });
    // },
  },
  mounted() {
    this.list = this.company.img_view;
    $(function () {
      var w = $(".van-swipe").width();
      $(".van-swipe").height(w);
    });
  },
}

</script>
<style lang="less" scoped>
.mp_product {
  width: 100%;
  .content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 60px;
    left: 0;
    overflow-y: scroll;
    padding-bottom: 80px;
    .headline /deep/ .top[data-v-336ad570]{
      font-size: 1.4rem;
    }
    .headline /deep/ .bottom[data-v-336ad570]{
      font-size: 1rem;
    }

    .background{
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
    .pc_headline{
      height: 100px;
    }
    .news {
      width: 100%;
      height: auto;
      .card {
        .box-card{
          width: 95%;
          margin: 20px auto 0 auto;
          .text {
            height: auto;
            font-size: 0.8rem;
            line-height: 30px;
          }

          .item {
            margin-bottom: 18px;
            width: 100%;
            text-indent: 25px;
          }

          /deep/ .el-card__body{
            padding: 10px;
          }
          .van-swipe {
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
