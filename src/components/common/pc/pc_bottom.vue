<template>
  <div class="bottom">
    <div class="img">
      <img :src="company.bottomImg">
      <div class="company-con">
        <span v-text="company.name" class="name"></span>
        <hr>
        <span v-text="company.introduce" class="text"></span>
      </div>
    </div>
    <div class="title">
      <span>拥有多种岩棉/玻璃棉产品</span>
      <span>以岩棉和玻璃棉制造的板、管、条、卷毡等。</span>
    </div>
    <div class="products">
      <div v-for="(item,index) in list" :key="index" @click="change(item.xl,item.cp)">
        <img :src="item.url">
        <p>{{item.label}}</p>
        <!-- <span v-text="item.title"></span> -->
      </div>
    </div>
    <div class="title">
      <span>四大保障，采购无忧</span>
      <span>五大制造基地、五星服务标准、九大体系认证、全球研发体系。</span>
    </div>
    <div class="promise">
      <div v-for="item in company.promise" :key="item.index">
        <i :class="item.icon"></i>
        <span class="biaoti">{{item.label}}</span>
        <span class="neirong">{{item.content}}</span>
      </div>
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
    change(xl,cp){
      this.$emit('change',xl,cp);
    },
    imgInit() {
      if (document.body.clientWidth >= 1555) {
        $(".products").find("img,p").width("380px");
        $(".products").find("img").height("255px");
      } else {
        $(".products").find("img,p").width("250px");
        $(".products").find("img").height("165px");
      }
      window.onresize = () => {
        if (document.body.clientWidth >= 1555) {
          $(".products").find("img,p").width("380px");
          $(".products").find("img").height("255px");
        } else {
          $(".products").find("img,p").width("250px");
          $(".products").find("img").height("165px");
        }
      };
    },
  },
  mounted() {
    if (this.company) {
      this.list = [
        this.company.showProductTop[0],
        this.company.showProductCenter[0],
        this.company.showProductOther[0],
        this.company.showProductTop[1],
        this.company.showProductTop[2],
        this.company.showProductTop[3],
      ];
    }
    this.imgInit();
  }
}

</script>
<style lang="less" scoped>
.bottom {
  width: 100%;
  .img {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }

    .company-con {
      position: absolute;
      width: 50%;
      top: 50px;
      left: 50px;
      color: white;
      display: flex;
      flex-direction: column;

      .name {
        font-size: 35px;
        position: relative;
        display: block;
        height: 60px;
      }

      hr {
        margin-bottom: 10px;
        width: 100px;
        height: 4px;
        background-color: orange;
        border: none;
      }

      .text {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;

    span {
      &:nth-child(1) {
        font-size: 35px;
        color: #66b1ff;
        line-height: 70px;
      }

      &:nth-child(2) {
        font-size: 15px;
        color: gray;
      }
    }
  }

  .products {
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: space-between;
    width: 100%;

    div {
      margin: 10px 10px;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 210px;
      }

      p {
        margin: 10px 0;
        font-size: 18px;
        text-align: center;
      }
    }
  }

  .promise {
    width: 100%;
    background-color: rgba(254, 252, 239);
    min-height: 300px;
    margin-bottom: 50px;
    display: inline-flex;
    justify-content: space-around;

    div {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      i {
        font-size: 35px;
        color: orange;
        height: 40px;
      }

      .biaoti {
        margin: 10px 0;
        font-size: 20px;
        color: black;
        height: 30px;
      }

      .neirong {
        font-size: 13px;
        color: gray;
        line-height: 25px;
        padding: 0 10px;
        height: 125px;
      }
    }
  }
}

</style>
