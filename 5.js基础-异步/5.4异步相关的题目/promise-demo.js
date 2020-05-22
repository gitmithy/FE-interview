

function loadImg(src){
    return new Promise(
        (resolve,reject)=>{
            const img=document.createElement('img')
            img.onload=()=>{
                resolve(img)
            }
            img.onerror=()=>{
                const err=new Error(`图片加载失败 ${src}`)
                reject(err)
            }
            img.src=src
        }
    )
}

const url='https://prprlive.peacha.net/img/000.png'

loadImg(url).then(img=>{
    console.log(img.width)
    return img
}).then(img=>{
    console.log(img.height)
}).catch(ex=>console.error(ex))