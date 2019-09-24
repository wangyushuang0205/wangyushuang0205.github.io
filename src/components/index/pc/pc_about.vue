<template>
  <div class="pc-about">
    <div class="background">
      <img src="@/assets/img/banner/banner1.jpg">
    </div>
    <div class="top-content">
      <pcHeadline main="关于我们" subtitle="ABOUT US"></pcHeadline>
      <div class="intro">
        <p class="company">{{company.title}}</p>
        <p class="introduce">{{company.introduce}}</p>
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
  }
}

</script>
<style lang="less" scoped>
.pc-about {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .background{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .top-content{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);

  .intro {
    width: 70%;
    margin: 30px auto;
    min-height: 400px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    box-shadow: 0 0 3px #FFF;
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    // border: 1px solid #fff;
    background: rgba(0, 0, 0, 0.3);

    .company {
      color: orange;
      font-size: 40px;
      width: 100%;
      text-align: center;
      letter-spacing: 10px;
      text-shadow: 2px 2px 2px rgba(255, 0, 0, 0.3);
    }
    .introduce{
      width:85%;
      margin:0 auto;
      padding: 30px;
      font-size: 16px;
      line-height: 30px;
      text-indent:35px;
      letter-spacing: 1px;
      color: #fff;
    }
  }
  }

}

// .pc-contacts {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .pc-banner {
//     height: 360px;
//     width: 70%;
//   }

//   .pc-banner-full {
//     height: 550px;
//   }

//   .contacts {
//     width: 70%;
//     min-height: 400px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     border-radius: 5px;
//     -moz-border-radius: 5px;
//     -webkit-border-radius: 5px;
//     box-shadow: 0 0 3px gray;
//     padding: 30px 0;

//     .company {
//       color: orange;
//       font-size: 40px;
//       width: 100%;
//       text-align: center;
//       letter-spacing: 10px;
//       text-shadow:2px 2px 2px rgba(255,0,0,0.3);
//     }

//     .contacts_box {
//       display: flex;
//       flex-flow: row nowrap;
//       justify-content: space-around;
//       margin-top: 50px;

//       .contacts_left {
//         width: 45%;
//         height: 175px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items:center;

//         p {
//           width:50%;
//           margin: 0 auto;
//           line-height: 40px;
//           min-width: 200px;

//           i {
//             color: orange;
//             font-size: 25px;
//           }
//         }

//         span {
//           margin-left: 30px;
//         }
//       }

//       .contacts_right {
//         width: 55%;
//         display: inline-flex;
//         justify-content: space-around;

//         img{
//           width:160px;
//           height: 160px;
//         }
//         p{
//           width:160px;
//           text-align: center;
//         }
//       }
//     }
//   }
// }
</style>
