// Definí una función obtenerIndice que reciba como 
// argumento un valor cualquiera valor y un array cualquiera 
// array y devuelva el índice del primer ítem con dicho valor 
// en el array, o -1 si no hay ninguno.

const obtenerIndice = (valor, arrayDeNumeros)=>{
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === valor) {
            return arrayDeNumeros.indexOf(arrayDeNumeros[i])
            // return i
        } 
    }
    return -1

}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]))
// 2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]))
// -1