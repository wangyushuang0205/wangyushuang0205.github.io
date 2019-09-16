<template>
  <div class="news_item">
    <div class="news_top">
      <span>行业资讯</span>
      <el-button-group class="direct">
        <el-button id="arrow_prev" type="warning" @click="left()" icon="el-icon-arrow-left"></el-button>
        <el-button id="arrow_next" type="warning" @click="right()" class="el-icon-arrow-right el-icon--right"></el-button>
      </el-button-group>
    </div>
    <div class="news_img">
      <ul class="news_ul">
        <!--  :style="{'left':calleft + '%'}" -->
        <li v-for="(item,index) in list" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <span class="more-news" @click="push(item)">more</span>
            <img :src="item.banner[0].url">
            <div class="news_bottom">
              <span>{{item.label}}</span>
              <div class="bottom clearfix">
                <span v-html="item.content"></span>
                <!-- <el-button type="warning" class="button" @click="$router.push( item.name )">READ MORE</el-button>
                <div class="triangle_border_nw"></div> -->
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import pcHeadline from '@/components/common/pc/pc_headline';
export default {
  components: {
    pcHeadline,
  },
  data() {
    return {
      mark: 0, //比对图片索引的变量
      calleft: 0,
      list: [],
      index: this.$route.query.index,
      count: 1,
      offset: 0,
    }
  },
  methods: {
    left() {
      let _self = this;
      let len = _self.list.length;
      _self.count = Math.floor(len / 3);
      if (1 <= _self.mark) {
        _self.mark -= 1;
        let wid = -101.01 * _self.mark;
        let x = 'translateX' + '(' + wid + '%' + ')';
        $('.news_ul').css({
          'transform': x,
          'transition': 'transform 1000ms'
        })
      } else {
        _self.mark = _self.count;
        let wid = (-101.01) * _self.count;
        let x = 'translateX' + '(' + wid + '%' + ')';
        $('.news_ul').css({
          'transform': x,
          'transition': 'transform 1000ms'
        })
      }
    },
    right() {
      let _self = this;
      let len = _self.list.length;
      _self.count = Math.floor(len / 3);
      if (_self.mark < _self.count) {
        _self.mark += 1;
        let wid = -101.01 * _self.mark;
        let x = 'translateX' + '(' + wid + '%' + ')';
        $('.news_ul').css({
          'transform': x,
          'transition': 'transform 1000ms'
        })
      } else {
        _self.mark = 0;
        $('.news_ul').css({
          'transform': "translateX(0px)",
          'transition': 'transform 1000ms'
        })
      }
    },
    push(item) {
      this.$router.push({ name: 'pc_newsInfo', query: { index: item.index } })
    }
  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.news_item {
  width: 70%;

  .news_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 13px 0;

    span {
      font-size: 35px;
      letter-spacing: 10px;
      color: #0E5FA7;
    }

    .direct {
      margin-top: 10px;

      .el-button--warning {
        width: 55px;
        height: 45px;
        background-color: #FC9732;
        border-color: #fff;
        border-radius: 5px;
      }

      .el-button--warning:hover {
        background-color: #FFA500;
      }
    }
  }

  .news_img {
    width: 100%;
    height: 90%;
    position: relative;
    overflow: hidden;

    ul {
      position: absolute;
      width: 100%;
      height: 90%;
      display: flex;
      flex-flow: row nowrap;
      top: 0;
      z-index: 9;

      li {
        display: inline-flex;
        align-items: center;
        min-width: 32.67%;
        width: 32.67%;
        margin-right: 1%;

        &:hover {
          box-shadow: 2px 2px 10px gray;
        }

        .el-card {
          position: relative;
          height: 100%;

          img {
            width: 100%;
            height: 350px;
            text-align: center;
          }

          .more-news {
            position: absolute;
            right: -65px;
            top: -65px;
            z-index: 999;
            width: 120px;
            height: 120px;
            background-color: rgba(0, 0, 0, 0.8);
            transform: rotate(45deg);
            display: inline-flex;
            align-items: flex-end;
            justify-content: center;
            cursor: pointer;
            font-size: 22px;
            color: #fff;
          }

          .news_bottom {
            padding: 12px;

            span {
              width: 100%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .bottom {
              margin-top: 13px;
              font-size: 12px;

              span {
                height: 60px;
                line-height: 20px;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                // text-indent:25px;
              }
            }

            .button {
              width: 150px;
              height: 50px;
              position: absolute;
              bottom: -8px;
              padding: 10px;
              float: right;
              font-weight: bold;
              font-size: 15px;
              background-color: #FC9732;
            }

            .button:hover {
              border-color: #292421;
              background-color: #292421;
            }

            .triangle_border_nw {
              width: 0;
              height: 0;
              border-width: 6px 6px 0 0;
              border-style: solid;
              border-color: #292421 transparent transparent transparent;
              margin: 66.5px 150px;
              position: absolute;
            }

            .image {
              width: 100%;
              display: block;
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
      }
    }

    i {
      position: absolute;
      top: 42px;
      z-index: 999;
      font-size: 50px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }

    .el-icon-arrow-right {
      position: absolute;
      right: 0;
    }
  }


}

</style>
