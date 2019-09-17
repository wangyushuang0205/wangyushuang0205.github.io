<template>
  <div class="info_item">
    <i @click="left()" class="el-icon-arrow-left"></i>
    <div class="info_img">
      <ul class="info_ul">
        <li v-for="item in company.banner" :key="item.index">
          <img :src="item.url">
        </li>
      </ul>
    </div>
    <i @click="right()" class="el-icon-arrow-right el-icon--right"></i>
  </div>
</template>
<script>
import pcHeadline from '@/components/common/pc/pc_headline';
export default {
  components: {
    pcHeadline,
  },
  data() {
    return {
      mark: 0, //比对图片索引的变量
      calleft: 0,
      list: [],
      index: this.$route.query.index,
      count: 1,
      offset: 0,
    }
  },
  methods: {
    left() {
      let _self = this;
      let len = _self.list.length;
      _self.count = Math.floor(len / 3);
      if (1 <= _self.mark) {
        _self.mark -= 1;
        let wid = -101.01 * _self.mark;
        let x = 'translateX' + '(' + wid + '%' + ')';
        $('.info_ul').css({
          'transform': x,
          'transition': 'transform 1000ms'
        })
      } else {
        _self.mark = _self.count;
        let wid = (-101.01) * _self.count;
        let x = 'translateX' + '(' + wid + '%' + ')';
        $('.info_ul').css({
          'transform': x,
          'transition': 'transform 1000ms'
        })
      }
    },
    right() {
      let _self = this;
      let len = _self.list.length;
      _self.count = Math.floor(len / 3);
      if (_self.mark < _self.count) {
        _self.mark += 1;
        let wid = -101.01 * _self.mark;
        let x = 'translateX' + '(' + wid + '%' + ')';
        $('.info_ul').css({
          'transform': x,
          'transition': 'transform 1000ms'
        })
      } else {
        _self.mark = 0;
        $('.info_ul').css({
          'transform': "translateX(0px)",
          'transition': 'transform 1000ms'
        })
      }
    },
    push(item) {
      // this.$router.push({ name: 'pc_newsInfo', query: { index: item.index } })
    }
  },
  mounted() {
    this.list = this.company.banner;
  }
}

</script>
<style lang="less" scoped>
.info_item {
  position: relative;
  width: 100%;

  .info_img {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    position: relative;
    overflow: hidden;

    ul {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      top: 0;
      z-index: 9;

      li {
        display: inline-flex;
        align-items: center;
        min-width: 32.67%;
        width: 32.67%;
        margin-right: 1%;

        img {
          width: 100%;
          height: 350px;
          text-align: center;
        }
      }
    }
  }

  i {
    font-size: 45px;
    font-weight: bolder;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    padding: 25px;
    border-radius: 5%;
    
    &:first-child{
      position: absolute;
      top: 45%;
      left: 3%;
    }
    &:last-child{
      position: absolute;
      top: 45%;
      right: 3%;
    }
  }
}

</style>
