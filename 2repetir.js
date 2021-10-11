// Definí una función repetir que tome un valor valor 
// y un número entero cantidad, y devuelva una array con 
// valor repetido cantidad de veces. 
const repetir = (valor,cantidad)=>{
    let nuevoArray = []
    for (let i = 0; i<cantidad; i++) {
       nuevoArray.push(valor)
    }
    return nuevoArray
}

console.log(repetir('lovelace', 3))
// ['lovelace', 'lovelace', 'lovelace']
console.log(repetir('a', 5))
// ['a', 'a', 'a', 'a', 'a']
console.log(repetir('html', 0))
// []