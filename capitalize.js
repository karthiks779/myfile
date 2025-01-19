
function capitalise()
 {
  
  var string;
  
  string =  document.getElementById("second").value;
  

     let res=''
   let gh=''
       str=string.split(' ')
      for (let i = 0; i <str.length; i++) {



   res=str[i]
   gh+=res.charAt(0).toUpperCase()+res.slice(1)+" "
       
      } document.getElementById("answer").value =gh;
}
document.getElementById("kk").innerHTML=44;
