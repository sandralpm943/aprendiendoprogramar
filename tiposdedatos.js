//Tipos de datos primitivos

//Cadena de texto (string)
let name = "Brais"
let alias = 'moure'
let email = `sandralpm943@gmail.com`
 
//Números (number)
let age = 25 //entero solo puede ser dos numeros
let height = 1.60 //decimal

//booleanos (boolean)
let isStudent = false
let isTeacher = true 
//solo es verdad o mentira

//Undefined
let undefinedValue
console.log(undefinedValue)
//algo que no esta definido ni tiene nada ni valor

//Null
let nullValue = null
//esta variable es nula por que es intencionada no hay valor 

//Symbol

let mySymbol = Symbol("mysymbol")
//unico 


//BigInt

let myBigInt = BigInt(3546578748454454545224564101648760467457864245870)
let myBigInt2 = 286516579754737965655321013105486544n
//cuando es un numero grande no es habitual pero se puede

//Mostramos los tipos de datos 
console.log(typeof name) 
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)