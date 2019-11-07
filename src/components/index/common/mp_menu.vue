<template>
  <div>
    <div class="close-menu">
      <div class="el-icon-close" @click="close"></div>
    </div>
<!--     <div class="header-right" v-if="$route.name == 'mp_product'" >
      <ul>
        <li v-if="item.isShow" v-for="item in list" :key="item.index" class="first">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div> -->
    <div class="header-right">
      <ul>
        <li v-if="item.isShow" v-for="(item,index) in menus" :key="index" @click="push(item,1,index)"  :class="$route.name == item.target ? 'active':''" class="first">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow : false,
      menus  : [],
      // list   : [],
      color  : '',
    }
  },
  methods: {
    push(item,tier,index){
      if (tier == 1 && item.hasChild == false) {
        this.$router.push({name:item.target});
        this.close();
      }
    },    
    init() {
      if (this.base.mp.header.isShow) {
        this.menus = this.base.mp.header.children;
      }
      // this.list = this.company.img_view;
    },
    close() {
      this.$emit('closeSide');
    },
  },
  mounted() {
    if (process.env.NODE_ENV == 'development') {
      this.isShow = true;
    }
    this.init(); 
    // $(function() {
    //   //menu的高度自适应
    //   let menuH1 = $('.index-header').height();//头部高度
    //   let menuH2 = $('.mobile-footer').height();//footer高度
    //   let menuH3 = $(window).height();//浏览器当前窗口可视区域高度
    //   let menu   = menuH3-menuH2-menuH1-15;
    //   console.log(menu);
    //   $('.side').css('height',menu);
    // });
  },
}

</script>
<style lang="less" scoped>
// 0~567px
@media screen and (max-width: 567px) {
  .header-right{
    height: 100%;
    overflow-y: scroll;
  }
}
//568px~无穷大
@media screen and (min-width: 568px) {
  .header-right{
    height: 120px;
    overflow-y: scroll;
  }
}
.close-menu {
  width: 100%;
  margin: 15px 0 5px 15px;
  .el-icon-close{
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 25px;
    border: 1px solid #5a5858;
    border-radius: 5px;
    box-shadow:0 0 3px #a8a8a8;
  }
}

.header-right {
  width: 100%;
  // height: 100%;
  font-weight: none;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    letter-spacing: 1px;

    .first {
      width: 80%;
      margin: 0 auto;
      list-style: none;
      padding: 8px 5px;
      cursor: pointer;
      display: inline-block;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: left;
      border-bottom: 0.5px solid #5a5858;
    }
    .active{
      color: #009fe9;
    }
  }
}

</style>
