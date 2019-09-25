<template>
  <div class="pc-about">
    <pcBanner :class="base.pc.banner.style?'pc-banner-full':'pc-banner'"></pcBanner>
    <pcHeadline main="联系我们" subtitle="CONTACT US"></pcHeadline>
    <div class="pc-contacts">
      <div class="contacts">
        <div class="contacts_box">
          <div class="contacts_left">
            <div v-if="company.wx_code">
              <img :src="company.wx_code">
              <p>微信客服</p>
            </div>
          </div>
          <div class="contacts_right">
            <p v-if="company.contact"><i class="el-icon-user"></i><span>{{company.contact}}</span></p>
            <p v-if="company.mobile"><i class="el-icon-phone-outline"></i><span>{{company.mobile}}</span></p>
            <p v-if="company.email"><i class="el-icon-message"></i><span>{{company.email}}</span></p>
            <p v-if="company.address"><i class="el-icon-position"></i><span>{{company.address}}</span></p>
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
    return {
    }
  },
  methods: {

  },
  mounted() {
    // let tag1 = $(".contacts_left").children();
    // if (!tag1.length) {
    //   $("div").remove(".contacts_left");
    // }
    // let tag2 = $(".contacts_right").children();
    // if (!tag2.length) {
    //   $("div").remove(".contacts_right");
    // }
  }
}

</script>
<style lang="less" scoped>
.pc-about {
  width: 100%;
  margin: 20px auto;
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

  .pc-contacts {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .contacts {
      width: 65%;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      box-shadow: 0 0 3px gray;
      padding: 30px 0;

      .contacts_box {
        width: 70%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        .contacts_left {
          width: 45%;
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
        .contacts_right {
          width: 100%;
          height: 100%;
          padding-left: 5%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            width: 100%;
            margin: 0 auto;
            line-height: 40px;

            i {
              color: orange;
              font-size: 25px;
            }
          }

          span {
            margin-left: 30px;
          }
        }
      }
    }
  }
}
</style>
