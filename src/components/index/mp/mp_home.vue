<template>
  <div class="home">
    <div class="con" id="con">
      <mpHeader></mpHeader>
      <div class="container">
        <router-view ref="child">
        </router-view>
        
      <el-backtop target=".con" :visibility-height="300" :bottom="100">
        <div class="up-container"><i class="el-icon-arrow-up"></i></div>
      </el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import mpHeader from '../common/mp_header';
export default {
  components: {
    mpHeader,
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
    // $(function() {
    //   var beforeScrollTop = $(".con").scrollTop();
    //   document.getElementById("con").addEventListener("scroll",function() {
    //     var afterScrollTop = $(".con").scrollTop();
    //     var delta = afterScrollTop - beforeScrollTop;
    //     let h = $(".header-left").height();
    //     if (delta !== 0) {
    //       let h = $(".header-left").height();
    //       $(".mp-header").height(h);
    //     } else {
    //       $(".mp-header").animate({"height" : 100+"px"});
    //     };
    //   },true);
    // });
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
