function getData(url){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url,
            success: function() {
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

const url1='./data1.json'
const url2='./data2.json'
const url3='./data3.json'

getData(url1).then(data=>{
    console.log(data1)
    return getData(url2)
}).then(data=>{
    console.log(data2)
    return getData(url3)    
}).then(data3=>{
    console.log(data3)
}).catch(error=>console.error(err))