<template>
  <div id="app">
    <router-view ref="child"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      websock: null,
    }
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      let width = $(window).width();
      if (flag || (width < 500)) {
        return true;
      }
    }
  },
  mounted() {

  },
  watch: {
    '$route'(to, from) {
      if (this.isMobile()) {
        let type = this.$route.meta.type;
        if (type && type == 'pc') {
          this.$router.push({ name: 'mp_index' });
        }
      }
      //进入新页回到顶部
      $(".con").scrollTop(0);
    }
  }
}

</script>
<style lang="less">
@import "./assets/css/iconfont/iconfont.css";


* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
