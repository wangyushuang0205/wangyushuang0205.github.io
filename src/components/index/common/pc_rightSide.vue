<template>
  <div :class="'side ' + style + ' animated bounceInRight'" v-if="isShow">
    <ul>
      <li :class="{'active':$route.name == item.target}" v-for="item in list" :key="item.label" @click="push(item.target)" v-if="item.isShow" :id="item.kind?'vital':''"><i :class="item.icon" v-if="item.icon"></i>{{item.label}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      list: [],
      style: 'deep-red',
    }
  },
  methods: {
    push(target) {
      console.log(target);
      if (target) {
        this.$router.push({ name: target });
      }
    }
  },
  mounted() {
    if (this.base.pc.rightSide.isShow) {
      this.list = this.base.pc.rightSide.line;
      if (this.base.pc.rightSide.style) {
        this.style = this.base.pc.rightSide.style;
      }
    }
  }
}

</script>
<style lang="less" scoped>
.side {
  width: 200px;
  position: fixed;
  top: 50%;
  right: 18px;
  z-index: 9999;
  border-radius: 5px;

  ul {
    width: 100%;
    border-radius: 5px;

    li {
      width: 80%;
      border-radius: 5px;
      line-height: 50px;
      cursor: pointer;
      list-style: none;
      text-align: right;
      padding-right: 20%;
      background-color: transparent;
      i {
        margin-right: 10px;
      }
    }
  }
}

.light-blue {

  li {
    &:hover {
      background-color: #409eff !important;
    }
  }

  .active {
    color: blue;
  }
}

.light-orange {
  background-color: rgba(238, 178, 89, 0.7);

  li {
    &:hover {
      background-color: rgba(238, 119, 50, 0.7);
    }
  }

  .active {
    color: #75300f;
  }
}

#vital {
  background-color: rgba(102, 177, 255, 0.7) !important;
}

</style>
