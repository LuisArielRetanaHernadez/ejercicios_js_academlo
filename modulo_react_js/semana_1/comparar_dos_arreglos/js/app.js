const array1 = [1,3,4,5,2,11]
const array2 = [3,10,1,2,4,5,'Hola']
const newArray = []

const comparatorArray = () =>{
   
    for (let index = 0; index < array1.length; index++) {
        const element = array2.filter(elements => elements === array1[index])
        if(element.length <= 0){ 
            newArray.push(array1[index])
        }
    }
    for (let index = 0; index < array2.length; index++) {
        const element = array1.filter(elements => elements === array2[index])
        if(element.length <= 0){ 
            newArray.push(array2[index])
        }
    }

    return newArray
}
console.log(comparatorArray())