<template>
  <div class="home">
    <pcHeader ref="pcHeader" class="pc-header"></pcHeader>
    <div class="con" id="con">
      <el-backtop target=".con" :visibility-height="300" :bottom="100">
        <div class="up-container"><i class="el-icon-arrow-up"></i></div>
      </el-backtop>
      <div class="container">
        <router-view ref="child">
        </router-view>
      </div>
      <pcSide ref="pcSide"></pcSide>
      <pcFooter ref="pcFooter"></pcFooter>
    </div>
  </div>
</template>
<script>
import pcHeader from '../common/pc_header';
import pcSide from '../common/pc_rightSide';
import pcFooter from '../common/pc_footer';
export default {
  components: {
    pcHeader,
    pcFooter,
    pcSide,
  },
  data() {
    return {
      setting: {
        indexOptions: [{
          index: 1,
          label: '产品目录',
        }, ]
      },
    }
  },
  methods: {

  },
  mounted() {
    $(function() {
      var beforeScrollTop = $(".con").scrollTop();
      document.getElementById("con").addEventListener("scroll",function() {
        var afterScrollTop = $(".con").scrollTop();
        var delta = afterScrollTop - beforeScrollTop;
        if (delta !== 0) {
          let h = $(".header-left").height();
          $(".pc-header").height(h);
        } else {
          $(".pc-header").height("100px");
        };
      },true);
    });
  },
  watch: {
  }
}

</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 950px;

  .pc-header {
    height: 100px;
  }

  .con {
    display: flex;
    flex: 1;
    overflow-y: scroll;
    flex-direction: column;

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
}

.container {
  // padding: 30px 0;
}

</style>
