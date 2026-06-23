const simDiff = (arrA, arrB, arrC) => {
    const AAndB = []
    const ADiffB = []
    AAndB.push(...arrA.concat(arrB))//
    AAndB.sort((a,b) => a - b)
    for(let i = 0; i < AAndB.length; i++){
        if(AAndB[i] === AAndB[i+1] && AAndB[i+1] === AAndB[i+2]){
        }
    }
    return AAndB
}
const salida = simDiff([1,2,9,5], [6,1,2,3])
console.log(salida)