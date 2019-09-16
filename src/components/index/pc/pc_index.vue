<template>
  <div class="index">
    <!-- 背景图片，固定在下层 -->
    <div class="background">
      <img src="@/assets/img/banner/banner1.jpg">
    </div>
    <!-- 图片上面的内容 -->
    <div class="top-content">
      <div class="top-content-one">
        <div class="header-left animated bounceInRight">
          <span v-text="company.name" class="company-name"></span>
        </div>
        <img class="front_image   ag_image" src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMjliNmFkZjViZDEzOWE5YTA1MjJkYTZjMjAyOTczZDUtMTk4eDEyNy5wbmc_p_p100_p_3D.png" alt="sdfdsfdsfd" description="" data-attach-id="9523" data-title="sdfdsfdsfd" title="" src-img="" style="">
      </div>
      <div class="top-content-two">
        <p>这是一个工作室简介</p>
        <p v-text="company.introduce" class="company-introduce"></p>
        <el-button plain>MORE INFO</el-button>
      </div>
      <div class="top-content-one">
        <div class="header-left animated bounceInRight">
          <span v-text="company.name" class="company-name"></span>
        </div>
        <img class="front_image   ag_image" src="https://ccdn.goodq.top/caches/9ce322c55ebcc6ced70674e9e5b9d10b/aHR0cHM6Ly81NzE4MzY2NGEwNjIwLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDUvMjliNmFkZjViZDEzOWE5YTA1MjJkYTZjMjAyOTczZDUtMTk4eDEyNy5wbmc_p_p100_p_3D.png" alt="sdfdsfdsfd" description="" data-attach-id="9523" data-title="sdfdsfdsfd" title="" src-img="" style="">
      </div>
    </div>
  </div>
</template>
<script>
import pcHeader from '@/components/index/common/pc_header';
export default {
  components: {
    pcHeader,
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    push(target) {
      if (target) {
        this.$router.push({ name: target });
      }
    }
  },
  mounted() {
    //获取元素
    var oDownPage = document.getElementById('background');
    var oTopPage = document.getElementById('top-content');
    //当浏览器滚动时
    document.onscroll = function(){
      //浏览器滚动的距离
      var scroll_top = document.body.scrollTop;
      //计算背景高度与前景高度的比例
      var num = oDownPage.offsetHeight / oTopPage.offsetHeight;
      //设置背景层滚动的速度
      oDownPage.style.marginTop = -scroll_top * num + 'px';
    }
  }
}

</script>
<style lang="less" scoped>
.index {
  .background{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .top-content{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .top-content-one{
      height: 900px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      .header-left {
        margin-bottom: 50px;
        span {
          font-size: 35px;
          letter-spacing: 10px;
          display: block;
          padding: 10px 0;
          color: #fff;
        }
      }
    }
    .top-content-two{
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      background-color: #000;
      p{
        color: #fff;
        width: 70%;
        text-align: center;
        line-height: 30px;
        &:first-child{
          font-size: 22px;
          margin-bottom: 20px;
        }
        &:last-child{
          font-size: 14px;
        }
      }
    }
  }
}

</style>
