<template>
  <div class="header">
    <div class="index-header">
      <span>盛拓·摄影工作室</span>
      <van-icon name="bars" @click="isShowSide = !isShowSide"/>
    </div>
    <van-popup class="side" v-model="isShowSide" position="right" :modal="false">
      <mpMenu @closeSide="closeSide"></mpMenu>
    </van-popup>
  </div>
</template>
<script>
import mpFooter from '@/components/index/common/mp_footer';
import mpBanner from '@/components/common/mp/mp_banner';
import mpMenu   from '@/components/index/common/mp_menu';
export default {
  components: {
    mpFooter,
    mpBanner,
    mpMenu,
  },
  data() {
    return {
      isShowSide: false,
    }
  },
  methods: {
    closeSide() {
      this.isShowSide = false;
    },
    // handleScroll() {
    //   let top    = document.documentElement.scrollTop || document.body.scrollTop;
    //   let a      = top / 130;
    //   $('.index-header').css('backgroundColor','rgba(255, 255, 255,' + a + ')');
    //   if (top >= 130) {
    //     $('.index-header').css('color','#000');
    //   }else{
    //     $('.index-header').css('color','#fff');
    //   }
    // },
  },
  mounted() {
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // // 离开该页面需要移除这个监听的事件
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
}

</script>
<style lang="less" scoped>
.header{
  width: 100%;

  .index-header{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    // background-color: rgba(255, 255, 255, 0);
    background-color: #2b2b2b;
    color: #fff;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    span{
      margin-left: 20px;
    }
    .van-icon{
      margin-right: 20px;
      font-size: 1.8rem;
    }
  }
  .side{
    width: 90%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 15px;
  }
}
</style>
