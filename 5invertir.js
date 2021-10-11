// Definí una función invertir que tome por parámetro un 
// array array y que devuelva un array con los mismos valores 
// pero en orden invertido.
const invertir = (array)=>{
   return array.reverse()
}
console.log(invertir([1, 2, 3]))
// [3, 2, 1]
console.log(invertir([5, 7, 99, 34, 54, 2, 12]))
// [12, 2, 54, 34, 99, 7, 5]