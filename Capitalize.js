function capitalizeWords(str)
{ 

     let res=''
   let gh=''
       str=str.split(' ')
      for (let i = 0; i < str.length; i++) {



   res=str[i]
   gh+=res.charAt(0).toUpperCase()+res.slice(1)+" "
       
      }
return gh
 }
 console.log(capitalizeWords('js string '))
