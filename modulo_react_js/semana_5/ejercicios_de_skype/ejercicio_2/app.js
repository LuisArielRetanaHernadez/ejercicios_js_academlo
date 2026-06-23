const steamrollArray = (arrAni) => {
    var ret = [];
    for(var i = 0; i < arrAni.length; i++) {
        if(Array.isArray(arrAni[i])) {
            ret = ret.concat(steamrollArray(arrAni[i]))
        } else {
            ret.push(arrAni[i]);
        }
    }
    return ret;
}
console.log(steamrollArray([3,[[[3]]],[4,[[[2]]]]]))