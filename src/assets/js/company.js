export default {
  // 公司基本信息
  title: '青岛盛拓工作室',
  logo: require('@/assets/img/slicing/sw2.svg'),
  name:'I JUST WANNER RUN',
  introduce:'青岛盛拓工作室成立于2019年9月16日，盛拓服务小众，品质高端，主营业务为高端个人写真、儿童私人摄影、商业摄影、毕业摄影等。',
  contact:'王玉双',
  mobile:'15063918700',
  address:'山东省青岛市黄岛区灵山卫街道办事处东岳东路572号',
  email:'1692801028@qq.com',
  mp_code:require('@/assets/img/code.jpg'),
  wx_code:require('@/assets/img/code.jpg'),
  //首页展示精选图片
  //
  banner:[
    {
      index : 0,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner1.jpg'),
    },
    {
      index :1,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner2.jpg'),
    },
    {
      index :2,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner3.jpg'),
    },
    {
      index :3,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner4.jpg'),
    },
    {
      index :4,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner5.jpg'),
    },
    {
      index :5,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner6.jpg'),
    },
    {
      index :6,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner1.jpg'),
    },{
      index :7,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner5.jpg'),
    },{
      index :8,
      title : '第一张图片上的标题',
      url   : require('@/assets/img/banner/banner3.jpg'),
    },
  ],
  img_view:[
    {
      index  : 0,//第一条放公司简介
      isShow : true,
      label  : '人物写真',
      banner : [
        { index : 0, isShow : true, url : require('@/assets/img/product/person1.jpg') , label  : '人物写真'},
        { index : 1, isShow : true, url : require('@/assets/img/product/person2.jpg') , label  : '人物写真'},
        { index : 2, isShow : true, url : require('@/assets/img/product/person3.jpg') , label  : '人物写真'},
      ],
      content: '<p><strong>人物写真</strong></p><p>这里是人物写真介绍，这里是人物写真介绍，这里是人物写真介绍，这里是人物写真介绍。</p>',
    },
    {
      index  : 1,
      isShow : true,
      label  : '毕业季',
      banner : [
        { index : 0, isShow : true, url : require('@/assets/img/product/graduate1.jpg'), label  : '毕业季'},
        { index : 1, isShow : true, url : require('@/assets/img/product/graduate2.jpg'), label  : '毕业季'},
      ],
      content: '<p><strong>毕业季</strong></p><p>这里是毕业季</p>',
    },
    {
      index  : 2,
      isShow : true,
      label  : '高端定制',
      banner : [
        { index : 0, isShow : true, url : require('@/assets/img/product/6.jpg'), label  : '高端定制',},
      ],
      content: '<p><strong>高端定制</strong></p><p>这里是高端定制</p>',
    },
    {
      index  : 3,
      isShow : true,
      label  : '故事记录',
      banner : [
        { index : 0, isShow : true, url : require('@/assets/img/product/4.jpg'), label  : '故事记录',},
        { index : 1, isShow : true, url : require('@/assets/img/product/3.jpg'), label  : '故事记录',},
      ],
      content: '<p><strong>故事记录</strong></p><p>这里是故事记录介绍</p>',
    },
    {
      index  : 4,
      isShow : true,
      label  : '商业摄影',
      banner : [
        { index : 0, isShow : true, url : require('@/assets/img/product/business1.jpg'), label  : '商业摄影',},
        { index : 1, isShow : true, url : require('@/assets/img/product/business2.jpg'), label  : '商业摄影',},
        { index : 2, isShow : true, url : require('@/assets/img/product/business3.jpg'), label  : '商业摄影',},
      ],
      content: '<p><strong>商业摄影</strong></p><p>这里是商业摄影</p>',
    },
    {
      index  : 5,
      isShow : true,
      label  : '拼接艺术',
      banner : [
        { index : 0, isShow : true, url : require('@/assets/img/product/6.jpg'), label  : '拼接艺术-纯真',},
      ],
      content: '<p><strong>拼接艺术</strong></p><p>这里是拼接艺术</p>',
    },
    // {
    //   index  : 6,
    //   isShow : true,
    //   label  : '拼接艺术-瞭望',
    //   banner : [
    //     { index : 0, isShow : true, url : require('@/assets/img/product/2.jpg'), label  : '拼接艺术-瞭望',},
    //   ],
    //   content: '<p><strong>拼接艺术-瞭望</strong></p><p>这里是拼接艺术-瞭望</p>',
    // },
    // {
    //   index  : 7,
    //   isShow : true,
    //   label  : '未来可期',
    //   banner : [
    //     { index : 0, isShow : true, url : require('@/assets/img/product/3.jpg'), label  : '未来可期',},
    //     { index : 1, isShow : true, url : require('@/assets/img/product/2.jpg'), label  : '未来可期',},
    //     { index : 2, isShow : true, url : require('@/assets/img/product/3.jpg'), label  : '未来可期',},
    //     { index : 3, isShow : true, url : require('@/assets/img/product/4.jpg'), label  : '未来可期',},
    //     { index : 4, isShow : true, url : require('@/assets/img/product/5.jpg'), label  : '未来可期',},
    //     { index : 5, isShow : true, url : require('@/assets/img/product/6.jpg'), label  : '未来可期',},
    //   ],
    //   content: '<p><strong>完美摄影-未来可期</strong></p><p>这里是人物写真介绍</p>',},
    // {
    //   index  : 8,
    //   isShow : true,
    //   label  : '联系我们',
    //   banner : [
    //     { index : 0, isShow : true, url : require('@/assets/img/product/1.jpg'), label  : '联系我们',},
    //   ],
    //   content: '很荣幸在这里给您介绍我司的主要产品，产品功能还有很多不一一介绍了，若您有意向可点击“联系我们”联系我们哦~~',
    // },
  ],
  promise:[
    { index : 1, icon : 'el-icon-star-off', label : '独特审美角度' ,content: '名牌正货，型号齐全，品牌多样。知名外墙保温、塑料、化工、行业产品、维修及方案解决、建材配件、建材为主的高新技术企业。'},
    { index : 2, icon : 'el-icon-shopping-bag-2', label : '专业的技术支持',content: '针对行业提供最专业的应用与操作、维护与维修；一年内用户可享受3次申请免费上门保养；一对一为您提供解决方案，量身设计适合自己的加工需求。'},
    { index : 3, icon : 'el-icon-pie-chart', label : '强大的生产能力', content: '引进顶级器械设备、先进的研发制造工艺；多重严谨安全认证检测、保障玻璃钢产品的性能；每件产品严格把控、确保出厂产品都100%合格。'},
    { index : 4, icon : 'el-icon-setting', label : '尊贵优质的服务', content: '拥有专业的管理团队和服务团队；服务用户多达13000多家，口碑俱佳；我们坚信品质源自专业，服务提升价值我们承诺，不满意可随时提出退换。'}
  ],
}
