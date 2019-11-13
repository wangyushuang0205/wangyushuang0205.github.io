<template>
  <div class="slicing">
    <div class="background">
      <li v-for="(item, index) in slicingList" :key="index" @click="$router.push({name:item.target})">
        <i :class="`iconfont ${item.icon}`"></i>
        <p>{{item.title}}</p>
      </li>
    </div>
  </div>
</template>
<script>
import pcBanner from '@/components/common/pc/pc_banner';
import pcHeadline from '@/components/common/pc/pc_headline';
export default {
  components: {
    pcBanner,
    pcHeadline,
  },
  data() {
    return {
      slicingList: [
        { title: '这是我的第一个切图', icon: 'iconslicing1', target: 'slicingOne' },
        { title: '这是我的第一个切图', icon: 'iconslicing1', target: 'slicingOne' },
        { title: '这是我的第一个切图', icon: 'iconslicing1', target: 'slicingOne' },
        { title: '这是我的第一个切图', icon: 'iconslicing1', target: 'slicingOne' },
        { title: '这是我的第一个切图', icon: 'iconslicing1', target: 'slicingOne' },
        { title: '这是我的第一个切图', icon: 'iconslicing1', target: 'slicingOne' },
      ],
    }
  },
  methods: {

  },
  mounted() {
  }
}

</script>
<style lang="less" scoped>
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_sdvsj49nn5d.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_sdvsj49nn5d.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_sdvsj49nn5d.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_sdvsj49nn5d.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_sdvsj49nn5d.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_sdvsj49nn5d.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
}
.slicing{
  .background{
    background: url('../../../assets/img/slicing/4.jpg');
    display: flex;
    flex-wrap: row wrap;
    justify-content: center;
    align-items: center;
    li{
      width: 400px;
      margin: 0 auto;
      list-style: none;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border: 1px solid #fff;
      i{
        font-size: 32px;
      }
      p{
        font-family: 'webfont';
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>
