export default {
  // 配置选项卡
  pc: {
    header:{
      isShow: true,
      color : '#D2DDEA',
      children:[
        {isShow: true,label:'首页',hasChild:false,target:'pc_index',type:'index'},
        // {isShow: true,label:'手机版',hasChild:false,target:'pc_mobile',type:'mobile'},
        {isShow: true,label:'回回作品',hasChild:false,target:'pc_product',type:'product'},
        {isShow: true,label:'关于我们',hasChild:false,target:'pc_about',type:'about'},
        {isShow: true,label:'联系我们',hasChild:false,target:'pc_contact',type:'contact'},
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
        {isShow: true,label:'> 回回作品',target:'pc_product'},
        {isShow: true,label:'> 关于我们',target:'pc_about'},
        {isShow: true,label:'> 联系我们',target:'pc_contact'},
      ]
    },
    rightSide: {
      isShow: true, //开启右侧悬浮框
      style:'light-blue',
      line:[
        {isShow: true,icon:'el-icon-phone-outline',label:'联系我们',target:'pc_contact',kind:'important'},
      ],
    },
  },
  copyright:'© 2019 青岛回回·摄影工作室 版权所有',
}
