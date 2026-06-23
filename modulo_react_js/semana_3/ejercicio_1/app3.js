function smallestCommons(arr) {
    const arrAllNumber = [];
    const arrRank = [];
    const numerOpe = [];
    arr[0] > arr[1] ? arrRank.push(arr[1],arr[0]): arrRank.push(arr[0],arr[1])

    for(let i = arrRank[0]; i <= arrRank[1]; i++){
        arrAllNumber.push(i)
    }
    console.log(arrAllNumber)
    for(let i = 0; i <= arrAllNumber.length; i++){
        console.log(arrAllNumber[i])
        if((arrAllNumber[i] % 2) === 0){
            console.log(arrAllNumber[i], 'es par')
            if(arrAllNumber[i] <=2){
                numerOpe.push(i)
            }else{
                const numberFact = factNumbrs(arrAllNumber[i])
                console.log(numberFact)
                numerOpe.push(numberFact)
            }
        }else{
            console.log(arrAllNumber[i], 'es impar')
            numerOpe.push(arrAllNumber[i])
        }
    }
    console.log(numerOpe)


    return numerOpe;
}
const factNumbrs = (number) =>{
    const fact = []
    while (number <= 2) {
        number/2
        if((number%2) === 0 && (number/2) >= 2){
            fact.push(number)
        }
    }
    return fact;
}
const salida = smallestCommons([1,5])

console.log(salida)