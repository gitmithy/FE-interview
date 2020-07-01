//老正则匹配
// function query(name){
//     const search=location.search.substr(1)
//     const reg=new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
//     const res=search.match(reg)
//     if(res===null){
//         return null
//     }
//     console.log(res)
//     return res[2]
// }
// query('a')

//新方法URLSearchParams

function query(name){
    const search=location.search
    const p=new URLSearchParams(search)
    console.log(p)
    return p.get(name)
}
console.log(query('c'))