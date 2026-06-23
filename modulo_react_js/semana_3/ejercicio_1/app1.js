function myReplace(str, before, after) {

    const arrCadena = str.split(" ")
    //console.log(arrCadena)
    let valid = true
    arrCadena.forEach((element,index) => {
        if(element === before && valid === true){
            let primeryChart = element[0]
            if(primeryChart === primeryChart.toUpperCase()){
                const char = after[0].toUpperCase()
                console.log(char)
                after.splice(0,1,char)
                arrCadena.splice(index,1,after)
                str = arrCadena
                str = str.join(' ')                
                valid = false
            }else{
                const char = after[0].toLowerCase()
                after.splice(0,1,char)
                arrCadena.splice(index,1,after)
                str = arrCadena
                str = str.join(' ')
                valid = false
            }
        }
    });

    return str;
}


const salida = myReplace("Let us go to the Store", "Store", "mall")
console.log(salida)