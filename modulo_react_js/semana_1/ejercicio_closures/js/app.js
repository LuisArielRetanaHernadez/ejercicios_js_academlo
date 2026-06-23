const closures = (...rest) =>{
    const number1 = rest
    if(rest.length > 1){
        return rest.reduce((acu,number) => acu + number)
    }else{
        return number2 =>{
            return number1[0] + number2
        }
    }
}
const dobble = closures(1)
console.log(dobble(5))
