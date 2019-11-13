<template>
  <div class="slicing-one">
    <div class="background">
      <img src="@/assets/img/slicing/4.jpg">
    </div>
    <div class="top-content">
      <pcHeadline main="关于我们" subtitle="ABOUT US"></pcHeadline>
      <div class="intro">
        <div class="actor">
          <p class="actor_out">
            <img src="@/assets/img/slicing/sw1.svg">
            <p>盛拓摄影工作室名片</p>
          </p>
        </div>
        <!-- <p class="company">{{company.title}}</p> -->
        <p class="introduce">{{company.introduce}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import pcBanner from '@/components/common/pc/pc_banner';
import pcHeadline from '@/components/common/pc/pc_headline';
export default {
  components: {
    pcBanner,
    pcHeadline,
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
  }
}

</script>
<style lang="less" scoped>
.slicing-one {
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    background: rgba(0, 0, 0, 0.2);

    .intro {
      width: 65%;
      margin: 30px auto;
      min-height: 400px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      box-shadow: 0 0 3px #FFF;
      padding: 35px 0;
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.3);
      .actor{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-radius: 10%;
        border-bottom: 1px solid #fff;

        .actor_out{
          width: 180px;
          height: 180px;
          border-radius: 50%;
          padding: 10px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .company {
        color: orange;
        font-size: 40px;
        width: 100%;
        text-align: center;
        letter-spacing: 10px;
        text-shadow: 2px 2px 2px rgba(255, 0, 0, 0.3);
      }
      .introduce{
        width:85%;
        margin:0 auto;
        padding: 30px;
        font-size: 16px;
        line-height: 30px;
        text-indent:35px;
        letter-spacing: 1px;
      }
    }
  }
}

</style>
