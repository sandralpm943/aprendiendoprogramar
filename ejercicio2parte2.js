// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación 
let a = 2
let b = 5
console.log(6 == false)
console.log(2 == false)
console.log(3  == false)
console.log(a >= b)
console.log(a > b)
// 5. utiliza el operador lógico and 
console.log(5 > 10 &&  30 < 10)

// 6. utiliza el operador lógico or
console.log(5 > 10 || 15 > 20)

// 7. combina ambos operadores lógicos 
console.log(5 < 15 || 15 > 17 && 17 > 9)
// 8. añade alguna negación 
console.log(!(5 > 10 && 15 > 20))

// 9. utiliza el operador ternario 
const isRaining  = false 
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

// 10. combina operadores aritméticos, de comparáción y logicos
let a1 = 13
let b1 = 22
console.log(a1 > b1  || a1 > b1)
console.log(5 > 10 && 15 > 20 && 30 > 40)
