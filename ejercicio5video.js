// 1. Concatena dos cadenas de texto

let byName = "Sandra"
let greeting2 = "Holii, " + byName + "?"
console.log(greeting2)
console.log( typeof greeting2)

// 2. Muestra la longitud de una cadena de texto

console.log(greeting2.length)

// 3. Muestra el primer y último carácter de un string

console.log(greeting2[0])
console.log(greeting2[11])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting2.toUpperCase())
console.log(greeting2.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Buenas, mi novio me controla, pero me ama!! :)`

console.log(message)

// 6. Interpola el valor de una variable en un string

let puto = "putito"
let caca = "cosa de putos o no?"

let orbit = `holaa, ${puto}  ${caca}`   
console.log(orbit)
console.log (typeof orbit)



// 7. Reemplaza todos los espacios en blanco de un string por guiones


console.log(orbit.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting2.indexOf("Sandra"))

// 9. Comprueba si dos strings son iguales

let texto1 = "Holaaaaaa"
let texto2 = "holaaa"
console.log(texto1 === texto2) // false porque las mayúsculas importan


// 10. Comprueba si dos strings tienen la misma longitud

let string1 ="Guapoo"
let string2 = "hey"
console.log(string1.length === string2.length )