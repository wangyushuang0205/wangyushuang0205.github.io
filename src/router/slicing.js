//日志记录
const slicingBox            = () => import('@/components/slicing/pc/slicingBox');
const slicingList           = () => import('@/components/slicing/pc/slicingList'); 
const slicingOne            = () => import('@/components/slicing/pc/slicingOne'); 



export default{
    path: '/slicingBox',
    name: 'slicingBox',
    component: slicingBox,
    children: [
        //日志记录
        { path: 'slicingList', component: slicingList, name: 'slicingList', meta: { title: '切图列表' }},
        { path: 'slicingOne', component: slicingOne, name: 'slicingOne', meta: { title: '第一张切图' }},
    ]
}
