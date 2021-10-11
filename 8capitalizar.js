// Definí una función capitalizarPalabras tome un 
// string y devuelva un string donde cada palabra está 
// capitalizada (con la primera letra mayúscula). Dejá 
// las demás letras como están.

const capitalizarPalabras = (string)=>{
    let palabrasCapitalizadas = []
    for (let i = 0; i < string.length; i++) {
        if (string[i].charAt(0) !== string[i].charAt(0).toUpperCase) {
            palabrasCapitalizadas.push(string[i].charAt(0).toUpperCase)
        }else{
            palabrasCapitalizadas.push(string[i].charAt(0).toUpperCase)
        }
    }
    return palabrasCapitalizadas.join("")
}

console.log(capitalizarPalabras('Esto es un título'))
// 'Esto Es Un Título'
console.log(capitalizarPalabras('había una vez'))
// 'Había Una Vez'
console.log(capitalizarPalabras('OMG'))
// 'OMG'