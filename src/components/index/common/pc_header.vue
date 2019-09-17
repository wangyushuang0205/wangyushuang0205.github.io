<template>
  <div class="header">
    <div class="header-box">
      <div class="header-left animated bounceInLeft">
        <img v-if="company.logo" :src="company.logo" @click="$router.push({name:'pc_index'})">
        <span v-else v-text="company.title" class="company-name"></span>
      </div>
      <div class="header-right animated bounceInRight">
        <ul>
          <li v-for="(item,index) in menus" :key="index" @click="push(item,1,index)" :class="{'active':$route.name == item.target}"  v-if="item.isShow" class="first">
            {{item.label}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      menus: [],
      color: '',
    }
  },
  methods: {
    push(item,tier,index){
      if (tier == 1 && item.hasChild == false) {
        this.$router.push({name:item.target});
      }
    },
    init() {
      if (this.base.pc.header.isShow) {
        this.menus = this.base.pc.header.children;
      }
    },
    navInit() {
      $(document).ready(function() {
        if (document.body.clientWidth >= 1078) {
          $(".third").css({ "right": "0", "left": "200px" });
        } else {
          $(".third").css({ "right": "200px", "left": "" });
        }
      })
      window.onresize = () => {
        if (document.body.clientWidth >= 1078) {
          $(".third").css({ "right": "0", "left": "200px" });
        } else {
          $(".third").css({ "right": "200px", "left": "" });
        }
      };
    },
  },
  mounted() {
    if (process.env.NODE_ENV == 'development') {
      this.isShow = true;
    }
    this.init();
    this.navInit();
  },
  watch: {
    color(n, o) {
      console.log(n);
      $('.header').css("background-color", n);
    }
  }
}

</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px gray;
  display: inline-flex;
  justify-content: center;
  background-color: #2b2b2b;

  .header-box {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      span {
        font-size: 32px;
        letter-spacing: 6px;
        display: block;
        padding: 8px 0;
        color: #fff;
        background: linear-gradient(to bottom, #fff 0%, #333 100%);
        background-clip: text;
        -webkit-background-clip: text;
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        // color: #009fe9;
      }
    }

    .header-right {
      height: 100%;
      width: 40%;
      min-width: 447px;
      z-index: 999;

      ul {
        display: inline-flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        color: #DEDEDE;

        .first {
          list-style: none;
          padding: 0 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 100%;
          width: 65px;
          text-align: center;

          &:hover {
            color: #009fe9;
          }


          .second {
            border-radius: 5px;
            border: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            position: absolute;
            left: -20px;
            top: 100%;
            z-index: 999;
            background-color: white;
            height: auto;
            display: none;
            width: 200px;
            font-size: 14px;

            span {
              position: absolute;
              width: 0px;
              height: 0px;

              &:nth-child(1) {
                border-width: 15px;
                border-style: solid;
                border-color: transparent transparent #ccc transparent;
                top: -30px;
                left: 40px;
              }

              &:nth-child(2) {
                border-width: 14px;
                border-style: solid;
                border-color: transparent transparent white transparent;
                width: 0px;
                height: 0px;
                top: -28px;
                left: 41px;
              }

            }

            li {
              position: relative;
              line-height: 45px;
              width: 170px;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              align-items: center;
              padding: 0 15px;
              color: black;
              line-height: 50px;

              &:hover {
                background-color: orange;
                color: white;
              }

              .third {
                border-radius: 5px;
                border: 1px solid #ccc;
                background-color: white;
                position: absolute;
                display: flex;
                flex-direction: column;
                height: auto;
                top: 0;
                display: none;
                width: 220px;
                overflow: hidden;
                font-size: 14px;

                div {
                  width: 235px;
                  overflow-y: scroll;
                  height: 300px;
                  overflow-x: hidden;
                }

                li {
                  width: 190px;
                  line-height: 45px;
                  display: inline-flex;
                  justify-content: flex-start;
                  padding: 0 15px;
                  color: black;
                  line-height: 50px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;

                  i {
                    margin-right: 15px;
                    display: none;
                  }

                  &:hover {
                    background-color: orange;
                    color: white;
                    justify-content: center;

                    i {
                      display: block;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.active {
  color: #009fe9;
}

</style>
