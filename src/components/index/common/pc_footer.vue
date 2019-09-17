<template>
  <div class="footer">
    <div class="footer-top" @click="push()">
      <div class="footer-top-left">
        <p :class="{'active':$route.name == item.target}" v-for="item in list" :key="item.label" @click="push(item.target)" v-if="item.isShow">
          {{item.label}}
        </p>
      </div>
      <div class="footer-top-right"></div>
    </div>
    <hr>
    <div class="footer-bottom">
      <span>{{company.title}}</span>
      <span>{{base.copyright}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    push(target) {
      if (target) {
        this.$router.push({ name: target });
      }
    }
  },
  mounted() {
    if (this.base.pc.footer.isShow) {
      this.list = this.base.pc.footer.children;
    }
  }
}

</script>
<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  background-color: black;
  color: gray;

  .footer-top {
    width: 80%;
    margin: 0 auto;
    height: 180px;
    display: inline-flex;
    padding: 50px 0;
    .footer-top-left{
      p{
        line-height: 40px;
        font-size: 16px;
        cursor: pointer;
        &:hover{
          color: #009fe9;
        }
      }
    }
  }
  hr{
    color:#ccc;
    background-color: #ccc;
  }

  .footer-bottom {
    width: 80%;
    margin: 0 auto;
    display: inline-flex;
    justify-content: space-between;
    padding: 40px 0;
    font-size: 18px;
  }
}
.active{
  color: #009fe9;
}
</style>
