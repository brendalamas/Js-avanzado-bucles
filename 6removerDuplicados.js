// Definí una función removerDuplicados que tome por parámetros 
// un array array y que devuelva un array con los mismos valores de 
// array pero sin valores duplicados.

const removerDuplicados = (array)=>{
    let arraySinDuplicados = []
    let elementosEliminados = []
    for(let i = 0; i<array.length; i++){
      if(arraySinDuplicados.includes(array[i])){
          elementosEliminados.push(array[i])
      }
      else {
        arraySinDuplicados.push(array[i])
      }
    }
    return arraySinDuplicados
}

console.log(removerDuplicados([1, 1, 1]))
// [1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3]))
// [1, 2 ,3]
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23]))
// [5, 23 ,8, 44]