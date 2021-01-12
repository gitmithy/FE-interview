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

const src1 = 'https://pics7.baidu.com/feed/f703738da9773912c8dc72edf8eb4d1f347ae2ba.jpeg?token=31826c2e942518faffb008fcdc4d3bc4&s=8CD78B525E634A110FBA31D9030010BB';
!(async function () {
  const img1 = await loadImg(src1)
  console.log(img1.height,img1.width)
})()