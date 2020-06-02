const xhr=new XMLHttpRequest();

xhr.open('post','/login',true)//true开启异步

xhr.onreadystatechange=function(){
     if(xhr.readyState===4){
         if(xhr.status===200){


            console.log(JSON.parse(xhr.responseText))

             
         }else{
            alert(xhr.responseText) 
         }
     }
}
const postData={
   userName:'zhangsan',
   password:'xxx'
}
xhr.send(JSON.stringify(postData))