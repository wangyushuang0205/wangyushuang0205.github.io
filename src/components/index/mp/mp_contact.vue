<template>
  <div class="contact">
    <!-- 首页足部 -->
    <div class="contact-body">
      <ul class="tab-tilte" id="tab-tilte">
        <li class="active">微信咨询</li>
        <li>电话咨询</li>
      </ul>
      <div class="tab-content" id="tab-content">
          <div v-if="company.wx_code" class="code">
            <img :src="company.wx_code">
            <p>扫描二维码，联系客服人员</p>
          </div>
          <div>
            <p v-if="company.mobile" class="mobile-contact" @click="beforeCall()">
              <i class="el-icon-phone-outline"></i>
            </p>
            <p class="mobile-number">点击拨号</p>
          </div>
      </div>
    </div>
    <div class="contact-footer">
      <mpFooter ref="mpFooter" :props="{index:{isActive:'contact'}}"></mpFooter>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import mpFooter from '@/components/index/common/mp_footer';
export default {
  props : ['props'],
  components: {
    mpFooter
  },
  data() {
    return {
      selected:'',
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
          window.location.href = 'tel://17866627884';
        }
      });
    },
  },
  mounted(){
    $(document).ready(function(){
      $('#tab-tilte li').click(function(){
        var code = $(this).index(); //获取当前点击tab标题的索引值
        tabFun(code);//调用方法
      });
    });
    function  tabFun(code){
      //获取点击的元素给其添加样式，将其兄弟元素的样式移除
      $('#tab-tilte li').eq(code).addClass('active').siblings().removeClass('active');
      $('#tab-content div').eq(code).addClass('code').siblings().removeClass('code');
    }
  }
}

</script>
<style lang="less" scoped>
@media screen and (max-height: 568px) {
  .contact-body {
    height: 65px;
  }
}
@media screen and (min-height: 568px) {
  .contact-body {
    height: 11vh;
  }
}
.contact-body{
  margin-top: 9vh;
  .tab-tilte {
    width: 100%;
    height: 50px;
    line-height: 50px;
    li {
      float: left;
      width: 50%;
      text-align: center;
      background-color: #f4f4f4;
      color: gray;
      cursor: pointer;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    /* 点击对应的标题添加对应的背景颜色 */
    .active {
      background-color: #09f;
      color: #fff;
    }
  }
  .tab-content {
    div {
      float: left;
      width: 100%;
      color: gray;
      text-align: center;
      margin-top: 25%;
      display: none;//控制不同tab下的内容显示与不显示
      &:last-child{
        .mobile-contact {
          margin-left: calc(50% - 40px);
          width: 80px;
          height: 80px;
          border: 1px solid #ccc;
          background-color:#09f;
          border-radius: 8px;
          line-height: 80px;
          i {
            color: #fff;
            font-size: 40px;
            line-height: 80px;
          }
        }
        .mobile-number{
          margin-top: 30px;
        }
      }
    }
    .code{
      display: block;//
      img{
        width: 50%;
        height: auto;
      }
    }
  }
}
</style>
