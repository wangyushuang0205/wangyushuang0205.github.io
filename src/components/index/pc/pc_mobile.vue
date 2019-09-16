<template>
  <div class="pc-contacts">
    <pcBanner :class="base.pc.banner.style?'pc-banner-full':'pc-banner'"></pcBanner>
    <pcHeadline main="联系我们" subtitle="CONTACT US"></pcHeadline>
    <div class="contacts">
      <p class="company">{{company.name}}</p>
      <div class="contacts_box">
        <div class="contacts_left">
          <p v-if="company.contact"><i class="el-icon-user"></i><span>{{company.contact}}</span></p>
          <p v-if="company.mobile"><i class="el-icon-phone-outline"></i><span>{{company.mobile}}</span></p>
          <!-- <p v-if="company.address"><i class="el-icon-location-information"></i><span>{{company.address}}</span></p> -->
          <p v-if="company.email"><i class="el-icon-message"></i><span>{{company.email}}</span></p>
        </div>
        <div class="contacts_right">
          <div v-if="company.mp_code">
            <img :src="company.mp_code" alt="">
            <p>手机端网站</p>
          </div>
          <div v-if="company.wx_code">
            <img :src="company.wx_code" alt="">
            <p>微信公众号</p>
          </div>
        </div>
      </div>
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

  .contacts {
    width: 70%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    box-shadow: 0 0 3px gray;
    padding: 30px 0;

    .company {
      color: orange;
      font-size: 40px;
      width: 100%;
      text-align: center;
      letter-spacing: 10px;
      text-shadow:2px 2px 2px rgba(255,0,0,0.3);
    }

    .contacts_box {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      margin-top: 50px;

      .contacts_left {
        width: 45%;
        height: 175px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

        p {
          width:50%;
          margin: 0 auto;
          line-height: 40px;
          min-width: 200px;

          i {
            color: orange;
            font-size: 25px;
          }
        }

        span {
          margin-left: 30px;
        }
      }

      .contacts_right {
        width: 55%;
        display: inline-flex;
        justify-content: space-around;

        img{
          width:160px;
          height: 160px;
        }
        p{
          width:160px;
          text-align: center;
        }
      }
    }
  }
}

</style>
