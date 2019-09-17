export default {
  // 公司基本信息
  title: '回回·摄影工作室',
  name:'I JUST WANNER RUN',
  introduce:'青岛回回·摄影工作室成立于2019年9月16日，回回服务小众，品质高端，主营业务为高端个人写真、儿童私人摄影、商业摄影、毕业摄影等。',
  contact:'王玉双',
  mobile:'15063918700',
  address:'山东省青岛市黄岛区灵山卫街道办事处东岳东路572号',
  email:'1692801028@qq.com',
  mp_code:require('@/assets/img/code.jpg'),
  wx_code:require('@/assets/img/code.jpg'),
  // 走马灯
  banner:[
    {
      index    : 0,
      url      : require('@/assets/img/banner/banner1.jpg'),
      // children : {
      //   title    : '<span style="color:white">第一张图片上的标题</span>',
      //   introduce: '<span style="color:#f9f9f9">第一张图片上的文字</span>',
      // }
    },
    {
      index:1,
      url  : require('@/assets/img/banner/banner2.jpg'),
      // children : {
      //   url      : require('@/assets/img/banner/banner3.jpg'),
      //   title    : '第二张图片上的标题',
      //   introduce: '第二张图片上的文字',
      // }
    },
    {
      index:2,
      url  : require('@/assets/img/banner/banner3.jpg'),
      // children : {
      //   url      : require('@/assets/img/banner/banner5.jpg'),
      //   title    : '第二张图片上的标题',
      //   introduce: '第二张图片上的文字',
      // }
    },
    {
      index:3,
      url  : require('@/assets/img/banner/banner4.jpg'),
      // children : {
      //   url      : require('@/assets/img/banner/banner7.jpg'),
      //   title    : '第二张图片上的标题',
      //   introduce: '第二张图片上的文字',
      // }
    },
    {
      index:4,
      url  : require('@/assets/img/banner/banner5.jpg'),
      // children : {
      //   url      : require('@/assets/img/banner/banner7.jpg'),
      //   title    : '第二张图片上的标题',
      //   introduce: '第二张图片上的文字',
      // }
    },
    {
      index:5,
      url  : require('@/assets/img/banner/banner6.jpg'),
      // children : {
      //   url      : require('@/assets/img/banner/banner7.jpg'),
      //   title    : '第二张图片上的标题',
      //   introduce: '第二张图片上的文字',
      // }
    },
    {
      index:6,
      url  : require('@/assets/img/banner/banner7.jpg'),
      // children : {
      //   url      : require('@/assets/img/banner/banner7.jpg'),
      //   title    : '第二张图片上的标题',
      //   introduce: '第二张图片上的文字',
      // }
    },
  ],
  promise:[
    { index : 1, icon : 'el-icon-star-off', label : '独特审美角度' ,content: '名牌正货，型号齐全，品牌多样。知名外墙保温、塑料、化工、行业产品、维修及方案解决、建材配件、建材为主的高新技术企业。'},
    { index : 2, icon : 'el-icon-shopping-bag-2', label : '专业的技术支持',content: '针对行业提供最专业的应用与操作、维护与维修；一年内用户可享受3次申请免费上门保养；一对一为您提供解决方案，量身设计适合自己的加工需求。'},
    { index : 3, icon : 'el-icon-pie-chart', label : '强大的生产能力', content: '引进顶级器械设备、先进的研发制造工艺；多重严谨安全认证检测、保障玻璃钢产品的性能；每件产品严格把控、确保出厂产品都100%合格。'},
    { index : 4, icon : 'el-icon-setting', label : '尊贵优质的服务', content: '拥有专业的管理团队和服务团队；服务用户多达13000多家，口碑俱佳；我们坚信品质源自专业，服务提升价值我们承诺，不满意可随时提出退换。'}
  ],
}
