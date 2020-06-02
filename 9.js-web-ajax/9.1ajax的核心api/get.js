const xhr=new XMLHttpRequest();

xhr.open('GET','data.json',true)//true开启异步

xhr.onreadystatechange=function(){
     if(xhr.readyState===4){
         if(xhr.status===200){


            console.log(JSON.parse(xhr.responseText))

             
         }else{
            alert(xhr.responseText) 
         }
     }
}

xhr.send(null)