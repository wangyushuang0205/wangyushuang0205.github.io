<template>
  <div class="pc-contacts">
    <pcBanner :class="base.pc.banner.style?'pc-banner-full':'pc-banner'"></pcBanner>
    <div>
      <div class="contacts-1">
        <p>我们是什么</p>
        <p>我们的软件是一个易于上手且内容丰富的房产中间管理系统，它专为中小销售团队量身设计。拥有网页版和手机版，多终端数据完全实时同步。</p>
        <p>在设计上力求简单、实用，一看就能懂。使用我们的软件，可以保存客户资料及相关信息不丢失，有效积累客户，防止撞客，提高销售业绩，防止因员工离职导致客户流失，并有效促进团队协作。</p>
        <p>系统内置渠道商、合作商、地图资源管理等多种功能，能够满足绝大数企业的需要</p>
      </div>
      <div class="contacts-2">
        <img src="@/assets/img/product/1.jpg">
      </div>
      <div class="contacts-3">
        <img src="@/assets/img/product/2.jpg">
      </div>
    </div>
  </div>
</template>
<script>
import pcBanner from '@/components/common/pc/pc_banner';
export default {
  components: {
    pcBanner,
  },
  data() {
    return {}
  },
  methods: {

  },
  mounted() {
    let tag1 = $(".contacts_left").children();
    if (!tag1.length) {
      $("div").remove(".contacts_left");
    }
    let tag2 = $(".contacts_right").children();
    if (!tag2.length) {
      $("div").remove(".contacts_right");
    }
  }
}

</script>
<style lang="less" scoped>
.pc-contacts {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .pc-banner {
    height: 360px;
    width: 70%;
  }

  .pc-banner-full {
    height: 550px;
  }
  .contacts-3{
    padding: 20px 0px;
    background-color: #f4f4f4;
  }
}

</style>
