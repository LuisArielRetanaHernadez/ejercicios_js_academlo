function dropElements(arr, func) {

    let validInit = true

    arr.forEach((element,index) => {

        const returnCallbak = func(element)

        if(returnCallbak && validInit){
            validInit = false
            console.log(index)
            arr.splice(0, index)
        }
        if((arr.length - 1) ===  index && returnCallbak === false && validInit === true){
            validInit = false
            arr = []
        }
    });

    return arr;
}
const consola = dropElements([0, 1, 0, 1], (n) => {return n === 1;})
console.log(consola)