<template>
  <div class="slicing">
    <pcHeadline main="前端页面模板" subtitle="WEB DESIGN" class="pc_headline"></pcHeadline>
    <div class="slicing_menu">
      <ul v-show="isShow">
        <span class="menu_title">模板分类</span>
        <li v-for="(item,index) in menus" :key="index" @click="push(item,1,index)" :class="active == index ?'handle-active':'handle'">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
    <div class="background">
      <div v-for="(item, index) in showData.slicingList" :key="index" @click="$router.push({name:item.target})" class="card hidden">
        <div class="img_inner"><img :src="item.url" class="img_top"></div>
        <p class="card_title">{{item.label}}--{{item.title}}</p>
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
      isShow   : true,
      active   : '',
      color    : '',
      showData : '',
      menus    :[
      // 推荐模板模块，三个模板
        {
          index  : 0,
          isShow : true,
          label  : '推荐模板',
          slicingList : [
            { 
              index   : 0,
              isShow  : true,
              title   : '这是我的第1个推荐模板切图', 
              label   : '推荐模板',
              type    : 'recommend',
              url     : 'https://timg.qifeiye.com/manual/5d53a6a19a67e380x280_1.png', 
              target  : 'slicingOne', 
            },{ 
              index   : 1,
              isShow  : true,
              title   : '这是我的第2个推荐模板切图', 
              label   : '推荐模板',
              type    : 'recommend',
              url     : 'https://timg.qifeiye.com/manual/5d6791348892b380x280_1.png', 
              target  : 'slicingOne', 
            },{ 
              index   : 2,
              isShow  : true,
              title   : '这是我的第3个推荐模板切图', 
              label   : '推荐模板',
              type    : 'recommend',
              url     : 'https://timg.qifeiye.com/manual/5d8c6f506826a380x280_1.png', 
              target  : 'slicingOne', 
            },{ 
              index   : 3, 
              isShow  : true, 
              title   : '这是我的第1个切图',
              label   : '推荐模板',
              type    : 'recommend',
              url     : 'https://timg.qifeiye.com/manual/54d4a4629fb6b380x280_1.png', 
              target  : 'email1',
            },
          ],
        },
      // 个人博客模块，一个模板
        {
          index  : 1,
          isShow : true,
          label  : '个人博客',
          slicingList : [
            { 
              index   : 0, 
              isShow  : true, 
              title   : '这是我的第1个切图',
              label   : '个人博客',
              type    : 'blog',
              url     : 'https://timg.qifeiye.com/manual/54d4a4629fb6b380x280_1.png', 
              target  : 'email1',
            },
          ],
        },
      // 商业模板模块，一个模板
        {
          index  : 2,
          isShow : true,
          label  : '商业模板',
          slicingList : [
            { 
              index   : 0, 
              isShow  : true, 
              title   : '这是我的第1个商业模板切图',
              label   : '商业模板',
              type    : 'business',
              url     : 'https://timg.qifeiye.com/manual/5d6cac958e71f380x280_1.png', 
              target  : 'email1',
            },
          ],
        },
      // 公司/企业模块，暂无案例
        {
          index  : 3,
          isShow : true,
          label  : '公司/企业',
          slicingList : [
            { 
              index   : 0, 
              isShow  : true, 
              title   : '这是我的第1个公司/企业切图',
              label   : '公司/企业',
              type    : 'company',
              url     : 'https://timg.qifeiye.com/manual/5d6cac958e71f380x280_1.png', 
              target  : 'email1',
            },
          ],
        },
      // 其他模块，暂无案例
        {
          index  : 4,
          isShow : true,
          label  : '其他',
          slicingList : [
            { 
              index   : 0, 
              isShow  : true, 
              title   : '这是我的第1个其他切图',
              label   : '其他',
              type    : 'other',
              url     : 'https://timg.qifeiye.com/manual/5d6cac958e71f380x280_1.png', 
              target  : 'email1',
            },
          ],
        },
      ],
    }
  },
  methods: {
    push(item,tier,index){
      if (item) {
        this.showData = item;
        this.active   = item.index;
        $(document).ready(function(){
          //这里是图片上下滚动
          var div = $('.img_top');
          $.each(div, function(){
            console.log(div);
            let img_height   = $(this).height();
            let img_inner    = $(".img_inner").height();
            let moveY        = img_height-img_inner;
            let y1 = 'translateY' + '(' + (-moveY) + 'px' + ')';
            let y2 = 'translateY' + '(' + 0 + 'px' + ')';
            $(this).mouseover(function () {
              console.log(-moveY,"鼠标移入");
              $(this).css({
                'transform': y1, 
                'transition':'all 5.5s linear 0s',
                'bottom': y1,
              });
            }).mouseout(function () {
              console.log(moveY,"鼠标移出");
              $(this).css({
                'transform': y2, 
                'transition':'all 1.5s linear 0s'
              });
            });
          });
        });
      }
    },   
  },
  mounted() {
    this.showData = this.menus[0];
    console.log(this.menus[0]);
    console.log(this.active);
    this.active   = 0;
    $(document).ready(function(){
      // 自动刷新一次
      if(location.href.indexOf("#reloaded") == -1){
        location.href = location.href + "#reloaded";
        location.reload();
      }
      //这里是图片上下滚动
      var div = $('.img_top');
      $.each(div, function(){
        console.log(div);
        let img_height   = $(this).height();
        let img_inner    = $(".img_inner").height();
        let moveY        = img_height-img_inner;
        let y1 = 'translateY' + '(' + (-moveY) + 'px' + ')';
        let y2 = 'translateY' + '(' + 0 + 'px' + ')';
        $(this).mouseover(function () {
          // console.log(-moveY,"鼠标移入");
          $(this).css({
            'transform': y1, 
            'transition':'all 5.5s linear 0s',
            'bottom': y1,
          });
        }).mouseout(function () {
          // console.log(moveY,"鼠标移出");
          $(this).css({
            'transform': y2, 
            'transition':'all 1.5s linear 0s'
          });
        });
      });

      let window_height  = $(".background").height()+20; 
      if (window_height > 300) {
        $(".slicing_menu").css('height', window_height);
      } 
      $(window).resize(function() {
        if (window_height > 300) {
          $(".slicing_menu").css('height', window_height);
        }

        //这里是图片上下滚动
        var div = $('.img_top');
        $.each(div, function(){
          let img_height   = $(this).height();
          let img_inner    = $(".img_inner").height();
          let moveY        = img_height-img_inner;
          let y1 = 'translateY' + '(' + (-moveY) + 'px' + ')';
          let y2 = 'translateY' + '(' + 0 + 'px' + ')';
          $(this).mouseover(function () {
            // console.log(-moveY,"鼠标移入");
            $(this).css({
              'transform': y1, 
              'transition':'all 5.5s linear 0s',
              'bottom': y1,
            });
          }).mouseout(function () {
            // console.log(moveY,"鼠标移出");
            $(this).css({
              'transform': y2, 
              'transition':'all 1.5s linear 0s'
            });
          });
        }); 
      });
    })
  }
}

</script>
<style lang="less" scoped>
@media screen and (min-width: 1445px){
  .card {
    width: 30%;
    margin: 3% 0 0 3%;
  }
}
@media screen and (max-width: 1444px) and (min-width: 992px){
  .card {
    width: 30%;
    margin: 3% 0 0 3%;
  }
}
@media screen and (max-width: 991px) and (min-width: 400px){
  .card {
    width: 45%;
    margin: 2% 0 0 2%;
  }
}
@media screen and (max-width: 399px){
  .card {
    width: 95%;
    margin: 2% 0 0 2%;
  }
}
.slicing{
  width: 100%;
  height: 100%;
  .pc_headline{
    border-bottom: 1px solid #ccc !important;
  }
  .slicing_menu{
    width: 19%;
    height: 100%;
    margin: 0 auto 0 0;
    float: left;
    padding-top: 2.5%;
    border-right: 1px solid #ccc;
    color: gray;
    ul{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      letter-spacing: 1px;
      .menu_title{
        font-size: 25px;
        padding: 20px auto;
        margin: 20px auto;
      }
      .handle {
        width: 80%;
        margin: 10px auto;
        list-style: none;
        padding: 8px 10px;
        cursor: pointer;
        display: inline-block;
        height: 100%;
        text-align: center;
        line-height: 50px;
        span{
          width: 100%;
          display: inline-block;
          border: 1px solid #ccc;
        }
      }
      .handle-active {
        width: 80%;
        margin: 10px auto;
        list-style: none;
        padding: 8px 10px;
        cursor: pointer;
        display: inline-block;
        height: 100%;
        text-align: center;
        line-height: 50px;

        span{
          width: 100%;
          display: inline-block;
          border: 1px solid #ccc;
          color: #fff;
          background: #95d5ec;
          box-shadow: rgba(50, 50, 50, 0.26) 3px 3px 3px 0px; 
          transform: translate(-5px,-5px); 
          transition: all 0.2s linear 0s;
        }
      }
    }
  }
  .background{
    width: 80%;
    margin: 0 0 0 auto;
    padding: 0 0 5% 0;
    float: left;
    .card{
      border: 1px solid #f1f1f1;
      display: inline-block;
      border: 1px solid rgba(229,229,229,1);
      transform: translateY(0px); 
      transition: all 0.2s linear 0s;
      cursor: pointer;
      .img_inner{
        overflow: hidden;
        height: 250px;
        img{
          position: relative;
          width: 100%;
          max-width: 100%;
          transform: translateY(0px);
          transition: all 5.5s linear 0s;
        }
      }
      .card_title{
        padding: 20px 10px;
        border-top: 1px solid #ccc;
      }
    }
    .card:hover{
      box-shadow: rgba(50, 50, 50, 0.26) 5px 5px 5px 0px; 
    }
  }
}
</style>
