<template>
  <div class="header">
    <div class="header-box">
      <div class="header-left animated bounceInLeft">
        <img v-if="company.logo" :src="company.logo" @click="$router.push({name:'pc_index'})">
        <span v-text="company.title" class="company-name"></span>
      </div>
      <div class="header-right animated bounceInRight">
        <ul>
          <li v-for="(item,index) in menus" :key="index" @click="push(item,1,index)" :class="{'active':$route.name == item.target}"  v-if="item.isShow" class="first">
            {{item.label}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      menus: [],
      color: '',
    }
  },
  methods: {
    push(item,tier,index){
      if (tier == 1 && item.hasChild == false) {
        this.$router.push({name:item.target});
      }
    },
    init() {
      if (this.base.pc.header.isShow) {
        this.menus = this.base.pc.header.children;
      }
    },
    navInit() {
    },
  },
  mounted() {
    if (process.env.NODE_ENV == 'development') {
      this.isShow = true;
    }
    this.init();
    this.navInit();
  },
  watch: {
    color(n, o) {
      console.log(n);
      $('.header').css("background-color", n);
    }
  }
}

</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px gray;
  display: inline-flex;
  justify-content: center;
  background-color: #2b2b2b;

  .header-box {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img{
        width: 50px;
        margin-right: 20px;
      }
      span {
        font-size: 32px;
        letter-spacing: 6px;
        display: block;
        padding: 8px 0;
        color: #fff;
        background: linear-gradient(to bottom, #fff 0%, #333 100%);
        background-clip: text;
        -webkit-background-clip: text;
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        // color: #009fe9;
      }
    }

    .header-right {
      height: 100%;
      width: 40%;
      min-width: 447px;
      z-index: 999;

      ul {
        display: inline-flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        color: #DEDEDE;

        .first {
          list-style: none;
          padding: 0 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;
          width: 65px;
          text-align: center;

          &:hover {
            color: #009fe9;
          }
        }
      }
    }
  }
}

.active {
  color: #009fe9;
}

</style>
