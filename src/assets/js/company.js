export default {
  // 公司基本信息
  name:'菊房易卖',
  introduce:'青岛菊房易卖网络科技有限公司前身成立于2008年，一家专业从事房地产销售租赁的自营连锁店，经过十年的不懈努力，收集了国内近百家房地产中介公司信息化建设需求，吸取了各地的房地产行业管理经验和思路后，形成了现在的一手房代理、房屋中介服务、行业管理软件开发、网站建设、网络系统集成、技术咨询、技术服务、楼宇智能化工程的现代高科技企业。',
  contact:'程希滨',
  mobile:'15063918700',
  address:'山东省青岛市黄岛区灵山卫街道办事处东岳东路572号',
  email:'1692801028@qq.com',
  mp_code:require('@/assets/img/code.jpg'),
  wx_code:require('@/assets/img/code.jpg'),
  // 走马灯
  banner:[
    {
      index    : 0,
      url      : 'https://15865747.s61i.faiusr.com/2/AD0Ik6-IBxACGAAg6Iyx0gUozoKyzAQwgA84vAU.jpg',
      children : {
        title    : '<span style="color:white">简单高效</span>',
        introduce: '<span style="color:#f9f9f9">云采集云计算，数据安全，匹配高效</span>',
      }
    },
    {
      index:1,
      url  :'https://15865747.s61i.faiusr.com/2/AD0Ik6-IBxACGAAgn4ix0gUohKaR-AcwgA84vAU.jpg',
      children : {
        url      : require('@/assets/img/index/0.png'),
        title    : '楼盘精耕、资源高效管理',
        introduce: '专为中小型房地产销售企业设计',
      }
    },
  ],
  promise:[
    { index : 1, icon : 'el-icon-star-off', label : '五大制造基地' ,content: '名牌正货，型号齐全，品牌多样。知名外墙保温、塑料、化工、行业产品、维修及方案解决、建材配件、建材为主的高新技术企业。'},
    { index : 2, icon : 'el-icon-shopping-bag-2', label : '专业的技术支持',content: '针对行业提供最专业的应用与操作、维护与维修；一年内用户可享受3次申请免费上门保养；一对一为您提供解决方案，量身设计适合自己的加工需求。'},
    { index : 3, icon : 'el-icon-pie-chart', label : '强大的生产能力', content: '引进顶级器械设备、先进的研发制造工艺；多重严谨安全认证检测、保障玻璃钢产品的性能；每件产品严格把控、确保出厂产品都100%合格。'},
    { index : 4, icon : 'el-icon-setting', label : '尊贵优质的服务', content: '拥有专业的管理团队和服务团队；服务用户多达13000多家，口碑俱佳；我们坚信品质源自专业，服务提升价值我们承诺，不满意可随时提出退换。'}
  ],
}
