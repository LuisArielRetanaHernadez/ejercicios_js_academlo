function translatePigLatin(str) {
    strArray = str.split("")
    let valid = true
    const vocales = ["a","e","i","o","u"]
    strArray.forEach((element,index) => {
       if(index == 0 ){
           for(let i = 0; i < vocales.length; i++){
               if(element === vocales[i]){
                   console.log("hola")
                   str += "way"
                   console.log(str)
                   valid =  false
                   return str
               }
           }
       }
       if(element == vocales[0] || element == vocales[1] || element == vocales[2] || element == vocales[3] || element == vocales[4]){
           if(valid){
               valid = false
                const removeArray = strArray.splice(0,index)
                //console.log(removeArray)
                strArray.push(...removeArray)
                strArray.push("ay")
                str = strArray.join("")
                return str
           }
       }
    });
  return str;
}
console.log(translatePigLatin("california"))
