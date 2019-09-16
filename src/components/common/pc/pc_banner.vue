<template>
  <el-carousel class="animated flipInX">
    <el-carousel-item v-for="item in company.banner" :key="item.index">
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
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
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
<style  lang="less" scoped>
.el-carousel{
  width:100%;
  height: 100%;

  /deep/ .el-carousel__container{
    height: 100%;
    position: relative;
    display: flex;
    align-items:center;
    justify-content: center;
    img{
      width: 100%;
      height: 100%;
    }
    .banner-con{
      position:absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom:0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .banner-con-content{
        width: 60vw;
        height: 22vw;
        display: flex;
        align-items:center;
        justify-content: flex-start;
        img{
          width: 30vw;
          height: 22vw;
        }
        div{
          height: 20vw;
          padding-top: 2vw;
          display: flex;
          flex-direction: column;
          .banner-con-title{
            font-size: 2.5rem;
          }
          .banner-con-intro{
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>