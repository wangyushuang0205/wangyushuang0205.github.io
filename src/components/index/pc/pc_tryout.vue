<template>
  <div class="pc-about">
    <pcBanner :class="base.pc.banner.style?'pc-banner-full':'pc-banner'"></pcBanner>
    <pcHeadline main="免费试用" subtitle="FREE TRIAL"></pcHeadline>
    <div class="intro">
      <img src="@/assets/img/index/0.png">
      <el-button type="primary"><a href="http://jufang.jufangyimai.com">点击免费试用</a></el-button>
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
.pc-about {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pc-banner {
    height: 360px;
    width: 70%;
  }

  .pc-banner-full {
    height: 550px;
  }

  .intro {
    width: 70%;
    min-height: 300px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    box-shadow: 0 0 3px gray;
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration:none; 
      color:white; 
    }
  }
}
</style>
