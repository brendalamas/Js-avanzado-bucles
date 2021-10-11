// Definí una función crearCuentaRegresiva que reciba 
// como argumento un número entero numeroInicial y que 
// devuelva un array con cuyo primer ítem sea numeroInicial 
// y los demás ítems sean números enteros sucesivos descendientes, 
// hasta llegar a 0.

const crearCuentaRegresiva =(numeroInicial)=>{
    let cuentaRegresiva = [];
    for(let i= numeroInicial; i>=0; i--){
      cuentaRegresiva.push(i)
    }
    return cuentaRegresiva
}

console.log(crearCuentaRegresiva(3))
// [3, 2, 1, 0]
console.log(crearCuentaRegresiva(5))
// [5, 4, 3, 2, 1, 0]