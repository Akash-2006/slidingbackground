var i=1;
function changeback(){
  if(i==4){
    i=0
  }

  
 const lk=document.getElementById("ko")
 lk.style.cssText=`transition-duration: 3s;
 transform:translateX(-${i*25}%)
 `
 i+=1
}