<template>
  <div class="header">
    <van-swipe indicator-color="white">
      <van-swipe-item v-for="(item,index) in list" :key="index">
        <van-image fit="scale-down" :src="item.url"/>
        <span class="picture-title" @click="push(item)">{{item.label}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      list : [
        { index : 0, url : require('@/assets/img/index/index_cover/index_cover1.jpg') , label  : '四字概括'},
        { index : 1, url : require('@/assets/img/index/index_cover/index_cover2.jpg') , label  : '四字概括'},
        { index : 2, url : require('@/assets/img/index/index_cover/index_cover3.jpg') , label  : '立即查看', target: 'mp_index'},
      ],
    }
  },
  methods: {
    push(item){
      let _self = this;
      if (item.target) {
        _self.$router.push({ name : item.target });
      }
    },
  },
  mounted() {
  },
}

</script>
<style lang="less" scoped>
.header {
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
  color: #333;
  .van-swipe{  
    width: 100vw;
    height: 100vh;
    .van-swipe-item{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .picture-title{
        background-color: rgba(0, 0, 0, 0.25);
        color: #fff;
        position: absolute;
        bottom: 15vw;
        padding: 1vw 1.5vw;
        border-radius: 5px;
        font-size: 1.8rem;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
