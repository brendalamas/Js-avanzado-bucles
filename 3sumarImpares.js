// Definí una función sumarImparesHasta que reciba 
// como argumento un número numero y que devuelva la 
// suma de todos los impares empezando desde 0 hasta 
// dicho numero inclusive.

const sumarImparesHasta = (numero) =>{
    let resultado = 0;
    for(let i = 0; i <= numero;i++){
      if(i%2 !== 0){
        resultado += i;
      }
    }
    return resultado;
  }

console.log(sumarImparesHasta(5)) // (1 + 3 + 5 = 9)
// 9 
console.log(sumarImparesHasta(13))
// 49
console.log(sumarImparesHasta(47))
// 576