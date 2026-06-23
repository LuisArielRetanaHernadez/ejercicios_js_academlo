
const truthCheck = (coll, pre) =>{
//     const keys = []
//     const keyPre = []
//     coll.forEach(obej => {
//         keys.push(...Object.keys(obej))
//     })

//     keyPre.push(...keys.filter(key => key === pre))
//     console.log(keyPre.length, ' : ', coll.length)

//    if(keyPre.length >= coll.length){
//        return true
//    }else{
//        return false
//    }

    let valid = false

    for(let i = 0; i < coll.length;  i++){
        if(coll[i][pre]){
            valid = true
        }else{
            return false
        }
    }
    if(valid){
        return true;
    }
}

const prueba = truthCheck([{"user": "Layla", "sex": "male"}, {"user": "Kappa", "sex": "male"}, {"user": "Himiko", "sex": "female"}, {"user": "Sassy", "sex": "female"}], "sex")

console.log(prueba)