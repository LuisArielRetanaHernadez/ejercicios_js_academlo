function destroyer(arr,...rest) {
  const arrayNew = []
  const valid = []
  console.log(rest)
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < rest.length; j++){
      if(arr[i] != rest[j]){
        console.log('arr: ', arr[i], ' es igual a ', rest[j])
        valid.push(j)
      }
    }
    if(valid.length === rest.length){
      arrayNew.push(arr[i])
      valid.splice(0)
    }else{
      valid.splice(0)
    }
  }
  return arrayNew
}

console.log(destroyer([1, 2, 3, 1, 2, 4, 3], 2, 3, 4))