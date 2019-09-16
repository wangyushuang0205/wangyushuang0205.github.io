export default {
  // 配置选项卡
  pc: {
    header:{
      isShow: true,
      color : '#D2DDEA',
      children:[
        {isShow: true,label:'首页',hasChild:false,target:'pc_index',type:'index'},
        // {isShow: true,label:'手机版',hasChild:false,target:'pc_mobile',type:'mobile'},
        {isShow: true,label:'产品相关',hasChild:false,target:'pc_product',type:'product'},
        {isShow: true,label:'关于我们',hasChild:false,target:'pc_about',type:'about'},
        {isShow: true,label:'免费试用',hasChild:false,target:'pc_tryout',type:'tryout'},
      ]
    },
    banner:{
      isShow: true,
      style:  1,   // 默认取样式 1 填充屏幕
    },
    footer:{
      isShow: true,
      children:[
        {isShow: true,label:'> 首页',target:'pc_index'},
        // {isShow: true,label:'> 手机版',target:'pc_mobile'},
        {isShow: true,label:'> 产品相关',target:'pc_product'},
        {isShow: true,label:'> 关于我们',target:'pc_about'},
        {isShow: true,label:'> 免费试用',target:'pc_tryout'},
      ]
    },
    rightSide: {
      isShow: true, //开启右侧悬浮框
      style:'light-blue',
      line:[
        {isShow: true,icon:'el-icon-phone-outline',label:'联系我们',target:'pc_about',kind:'important'},
      ],
    },
  },
  copyright:'© 2019 青岛菊房易卖科技有限公司 版权所有',
}
