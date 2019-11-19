//日志记录
const slicingBox            = () => import('@/components/slicing/pc/slicingBox');
const slicingList           = () => import('@/components/slicing/pc/slicingList'); 
const slicingOne            = () => import('@/components/slicing/pc/slicingOne'); 
const email1                = () => import('@/components/slicing/pc/email/email1'); 
const pc_software           = () => import('@/components/slicing/pc/software/pc_software'); 



export default{
    path: '/slicingBox',
    name: 'slicingBox',
    component: slicingBox,
    children: [
        //日志记录
        { path: 'slicingList', component: slicingList, name: 'slicingList', meta: { title: '切图列表' }},
        { path: 'slicingOne', component: slicingOne, name: 'slicingOne', meta: { title: '第一张切图' }},
        { path: 'email1', component: email1, name: 'email1', meta: { title: '邮件模板' }},
        { path: 'pc_software', component: pc_software, name: 'pc_software', meta: { title: '软件平台模板' }},
    ]
}
