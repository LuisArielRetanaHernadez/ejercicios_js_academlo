const searcher = (collection, source) => {
    let arr = [];
    const keys = Object.keys(source)
    let valid = false;
    console.log(source.length)
    collection.forEach(obj => {
        const keyObj = Object.keys(obj)
        for(let i = 0; i < keyObj.length; i++){

            for(let j = 0; j < keys.length; j++){
                if(keyObj[i] === keys[j]){
                    if(obj[keys[j]] === source[keys[j]]){
                        valid = true
                        break;
                    }else{
                        valid =  false
                    }
                }else{
                    valid = false
                }
            }
            
        }
        if(valid){
            arr.push(obj)
        }
        valid = true
    })
    return arr;
}

console.log(searcher([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))