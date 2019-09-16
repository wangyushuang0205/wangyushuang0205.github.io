<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in company.banner" :key="item.index">
        <img :src="item.url">
        <div v-if="item.children" class="banner-con">
          <div class="banner-con-content">
            <img v-if="item.children.url" :src="item.children.url">
            <div>
              <span v-html="item.children.title" class="banner-con-title"></span>
              <span v-html="item.children.introduce" class="banner-con-intro"></span>
            </div>
          </div>
        </div>
        <span></span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {

  },
  mounted() {}
}

</script>
<style lang="less" scoped>
.banner{
  width:100%;
  height: 100%;
  .mint-swipe{
    width: 100%;
    height: 35vh;
    img{
      width: 100%;
      height: 100%;
    }
    .banner-con{
      width: 100%;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
    }
    span{
      width: 100%;
      height: 35vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
}

</style>
