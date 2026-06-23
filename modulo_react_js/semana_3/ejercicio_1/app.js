function uniteUnique(...arr) {
    const arrCompara = arr[0]
    const arrUnicos = [...arrCompara]
    let valid = true
    arr.splice(0,1)
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        const arrIter = arr[i]
        arrIter.forEach((element) => {
            for(let j = 0; j < arrUnicos.length; j++){
                if(arrUnicos[j] === element){
                    valid = false
                }
            }
            if(valid){
                valid = true
                arrUnicos.push(element)
            }
            valid = true
        }); 
    }
    return arrUnicos;
}
const salidaDatos = uniteUnique([1, 2, 3], [5,'hola', 2, 1],[8,2,'hola',7,9],['nose',2,'tu',1,5,'dime'])
console.log(salidaDatos)