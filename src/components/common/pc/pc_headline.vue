<template>
  <div class="headline">
    <span class="top animated fadeIn">{{top}}</span>
    <el-divider><span class="bottom animated fadeIn">{{bottom}}</span></el-divider>
  </div>
</template>
<script>
export default {
  props: ['main', 'subtitle'],
  data() {
    return {
      top:'这里是系列名',
      bottom:'这里是产品名',
    }
  },
  methods: {
    change(main,subtitle){
      this.top = main;
      this.bottom = subtitle;
    }
  },
  mounted() {
    if (this.main) {
      this.top = this.main;
    }
    if (this.subtitle) {
      this.bottom = this.subtitle;
    }
    var wid = $(".main").width();
    $(".subtitle").css("width",wid);
  }
}

</script>
<style lang="less" scoped>
.headline {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top{
    font-size: 35px;
    letter-spacing: 12px;
    text-align: center;
    text-shadow: 2px 2px 3px #009fe9;
    color: #fff;
  }
  .bottom{
    font-size: 20px;
    color: #66b1ff;
    letter-spacing: 3px;
    display: block;
    text-align: center;
    position: relative;
    &::before{
      content:'';
      position: absolute;
      width:10px;
      height: 10px;
      top: 35%;
      left: -20px;
      background-color: #ccc;
      transform: rotate(45deg);
    }
    &::after{
      content:'';
      position: absolute;
      width:10px;
      height: 10px;
      top: 35%;
      right: -20px;
      background-color: #ccc;
      transform: rotate(45deg);
    }
  }
  /deep/ .el-divider__text{
    padding: 0 8px;
    border-radius: 15%;
  }
}

</style>
