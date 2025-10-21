//Operadores
 
//Operadores Aritméticos
let a = 5 
let b = 10
console.log(a + b)//Suma
console.log(a - b)//Resta
console.log(a * b)//Multiplicación
console.log(a / b)//Divison

console.log(a % b)//modulo es el resto de la división 
console.log(a  **  b)//Exponente
a++//incremento
console.log(a)

b--//decremento
console.log(b)

//operadores de asignacion

let myViariable = 2
console.log(myViariable)
myViariable += 2
console.log(myViariable)

myViariable -= 2
myViariable *= 2
myViariable /= 2
myViariable %= 2
myViariable **= 2

//Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6")
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)
//console.log(a === 5)

//truthy values (valores verdaderos)
// todos los numeros positivos y negativos menos el cero
//Todos los boolean
//todas las cadenas de texto menos las vacías

//Falsy values (valores falsos)

//0
//null
//undefined
//NaN
//boolean false
// cadenas de texto vacías

//Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operarios  ternarios

const isRaining  = false 
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

