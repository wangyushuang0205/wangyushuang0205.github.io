<template>
  <div class="mobile-footer">
    <!-- 首页足部 -->
    <div v-if="index.isShow" class="index-footer">
      <!-- 首页 -->
      <span @click="$router.push({ name : 'mp_index'})" :class="index.isActive == 'index' ? 'active':''"><i class="iconfont iconhome"></i>首页</span>
      <!-- @click="before('product')" 消息 -->
      <span @click="$router.push({ name : 'mp_product'})" :class="index.isActive == 'product' ? 'active':''" info="20"><i class="iconfont iconchanpin"></i>产品相关</span>
      <!-- @click="before('咨询')" 我的 -->
      <span @click="beforeCall()"><i class="iconfont icondh"></i>咨询</span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  props : ['props'],
  data() {
    return {
      index : {
        isShow  : true,
        isActive: 'index',
      }
    }
  },
  methods:{
    beforeCall(){
      MessageBox({
        title: '提示',
        message: '确认联系客服?',
        showCancelButton: true
      }).then(action => {
        if (action == 'confirm') {
          window.location.href = 'tel://15063918700';
        }
      });
    },
  },
  mounted() {
    if (this.props) {
      if (this.props.index) {
        this.props.index.isShow?this.index.isShow=true:null;
        this.props.index.isActive?this.index.isActive=this.props.index.isActive:this.index.isActive='index';
      }
    }
  },
}

</script>
<style lang="less" scoped>
@media screen and (max-height: 568px) {
  .mobile-footer {
    height: 65px;
  }
}
@media screen and (min-height: 568px) {
  .mobile-footer {
    height: 11vh;
  }
}
.mobile-footer{
  position: fixed;
  bottom: 0;
  left:0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items:center;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
  z-index: 99999;
  .index-footer{
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
    margin: 0 auto;
    padding: 0;
    color: gray;
    .active{
      color: #2a74f4;
    }
    span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      font-size: 0.6rem;
      i{
        height: 5vh;
        min-height: 31px;
        font-size: 1.8rem;
        display: flex;
        align-items:center;
        justify-content: center;
      }
    }
  }
}
</style>
