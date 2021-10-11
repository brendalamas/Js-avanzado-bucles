// Definí una función repetirLetras que reciba como argumento 
// un string palabra y un número entero cantidad, y devuelva una 
// string donde cada letra de palabra esté repetida cantidad de veces.

const repetirLetras = (palabra, cantidad)=>{
    let array = palabra.split("")
    let arrayRepetido = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < cantidad; j++) {
            arrayRepetido.push(array[i])
        }
    }
    return arrayRepetido.join("")
}

console.log(repetirLetras('hola', 2))
// 'hhoollaa'
console.log(repetirLetras('ada', 3))
// 'aaadddaaa'
console.log(repetirLetras('ah!', 5))
// aaaaahhhhh!!!!!'
console.log(repetirLetras('basta', 1))
// 'basta'