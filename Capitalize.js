function capitalizeWords(str)
{ 

     let res=''
   let gh=''
       str=str.split(' ')
      for (let i = 0; i < str.length; i++) {



   res=str[i]
   gh+=res.toUpperCase()+res.slice(1)
       gh=gh.join(" ")
      }
return gh
 }
 console.log(capitalizeWords('js string '))
