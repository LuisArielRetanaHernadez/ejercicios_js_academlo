const Abecedario = cadena => {
    if(typeof cadena !== 'string'){return 'el valor no es un string'}
    const cadenaMinuscula = cadena.toLowerCase();
    const inicioLongitud = cadenaMinuscula.charCodeAt(0)
    const finalLongitud =  cadenaMinuscula[cadena.length - 1].charCodeAt(0)
    const asciiLetrasFaltantes = []
    const letrasFaltantes = []

    if(inicioLongitud < finalLongitud) {
        let index = 1
        for(let i = finalLongitud; i >= inicioLongitud; i--) {
            console.log('codigo de letra: ', cadenaMinuscula.charCodeAt(cadenaMinuscula.length - index), ' codigo ascii: ', i)
            
            if (cadenaMinuscula.charCodeAt(cadena.length - index) !== i){
                asciiLetrasFaltantes.push(i)
            }
            index++
        }
    }
    if(inicioLongitud === finalLongitud || asciiLetrasFaltantes.length <= 0){ return 'undefined'}
    console.log(asciiLetrasFaltantes)
    for(let i = 0; i < asciiLetrasFaltantes.length; i++){
        letrasFaltantes.push(String.fromCharCode(asciiLetrasFaltantes[i]))
    }

    return letrasFaltantes.join('')
}

const filtroAscii = (arr, codeAscii) => {
    if (!arr.length <= 0){}
}
const salida = Abecedario('ag')
console.log(salida)
