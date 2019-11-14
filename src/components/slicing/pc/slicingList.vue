<template>
  <div class="slicing">
    <pcHeadline main="前端页面切图" subtitle="WEB DESIGN" class="pc_headline"></pcHeadline>
    <div class="slicing_menu">
      <ul>
        <span class="menu_title">模板分类</span>
        <li v-if="item.isShow" v-for="(item,index) in menus" :key="index" @click="push(item,1,index)"  :class="$route.name == item.target ? 'active':''" class="first">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
    <div class="background">
      <div v-for="(item, index) in slicingList" :key="index" @click="$router.push({name:item.target})" class="card">
        <div class="img_inner"><img :src="item.url" class="qfypreloadimg"></div>
        <p>{{item.title}}</p>

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
      isShow : false,
      menus  : [
        {isShow: true,label:'推荐模板',hasChild:false,target:'slicingOne',type:'recommend'},
        {isShow: true,label:'商业模板',hasChild:false,target:'slicingOne',type:'business'},
        {isShow: true,label:'个人博客',hasChild:false,target:'slicingOne',type:'blog'},
        {isShow: true,label:'公司/企业',hasChild:false,target:'slicingOne',type:'company'},
        {isShow: true,label:'其他',hasChild:false,target:'slicingOne',type:'other'},
      ],
      color  : '',
      slicingList: [
        { 
          title: '这是我的第1个切图', 
          label: '个人博客',
          url: 'https://timg.qifeiye.com/manual/54d4a4629fb6b380x280_1.png', 
          target: 'slicingOne' 
        },
        { 
          title: '这是我的第2个切图', 
          label: '推荐模板',
          url: 'https://timg.qifeiye.com/manual/5d53a6a19a67e380x280_1.png', 
          target: 'slicingOne' 
        },
        { 
          title: '这是我的第3个切图', 
          label: '商业模板',
          url: 'https://timg.qifeiye.com/manual/5d6cac958e71f380x280_1.png', 
          target: 'slicingOne' 
        },
        { 
          title: '这是我的第4个切图', 
          label: '推荐模板',
          url: 'https://timg.qifeiye.com/manual/5d6791348892b380x280_1.png', 
          target: 'slicingOne' 
      },
        { 
          title: '这是我的第5个切图', 
          label: '推荐模板',
          url: 'https://timg.qifeiye.com/manual/5d8c6f506826a380x280_1.png', 
          target: 'slicingOne' 
      },
      ],
    }
  },
  methods: {
    push(item,tier,index){
      if (tier == 1 && item.hasChild == false) {
        this.$router.push({name:item.target});
        this.close();
      }
    },    
    init() {
      if (this.base.mp.header.isShow) {
        this.menus = this.base.mp.header.children;
      }
      // this.list = this.company.img_view;
    },
  },
  mounted() {
    $(document).ready(function(){
        let window_height  = $(".background").height();
        $(".slicing_menu").css('height', window_height);
      $(window).resize(function() {
        let window_height  = $(".background").height();
        $(".slicing_menu").css('height', window_height);
      });
    })
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
      }

      .first {
        width: 80%;
        margin: 0 auto;
        list-style: none;
        padding: 8px 10px;
        cursor: pointer;
        display: inline-block;
        height: 100%;
        text-align: left;
        border-bottom: 0.5px solid #ccc;
      }
      .active{
        color: #009fe9;
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
      box-shadow: rgba(50, 50, 50, 0.26) 0px 0px 2px 0px; 
      transform: translateY(0px); 
      transition: all 2s linear 0s;
      .img_inner{
        overflow: hidden;
        height: 250px;
        position: relative; 
        img{
          position: relative;
          width: 100%;
          max-width: 100%;
          transform: translateY(0px);
          transition: all 5.5s linear 0s;
        }
      }
    }
  }
}
</style>
