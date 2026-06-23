const pairElement = (str) => {
    const arrayADN = []
    const arraStr = str.split("");
    console.log(arraStr)

    arraStr.forEach((element,index,array) => {
        console.log(array)
        if(element === 'A') {
            let numberA = index
            for(let i = numberA; i < array.length; i++) {
                if(array[i] === 'T'){
                    arrayADN.push(['A','T'])
                    break;
                }
                if((i + 1) === array.length){
                    numberA = 0
                    i = 0
                }
            }
        }
        if(element === 'T') {
            let numberT = index
            for(let i = numberT; i < array.length; i++) {
                if(array[i] === 'A'){
                    arrayADN.push(['T','A'])
                    break;
                }
                if((i + 1) === array.length){
                    numberT = 0
                    i = 0
                }
            }
        }
        if(element === 'C') {
            let numberC = index
            for(let i = numberC; i < array.length; i++){
                if(array[i] === 'G'){
                    arrayADN.push(['C','G'])
                    break;
                }
                if((i + 1) === array.length){
                    numberC = 0
                    i = 0
                }
            }
        }
        if(element === 'G') {
            let numberG = index
            for(let i = numberG; i < array.length; i++) {
                if(array[i] === 'C'){
                    arrayADN.push(['G','C'])
                    break;
                }
                if((i + 1) === array.length){
                    numberG = 0
                    i = 0
                }
            }
        }
    })

    return arrayADN

  
}

const salida = pairElement("CGATTA")
console.log(salida)