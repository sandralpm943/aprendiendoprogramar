//Strings

// Concatenación de cadenas
let myName = "sandra"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)
//cuenta 

//acceso a caracteres 
console.log(greeting[0])
console.log(greeting[11])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("sandra"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("sandra"))
console.log(greeting.slice(0, 12))
console.log(greeting.replace("sandra" , "Shishune"))

//Template literals (Plantillas literales)

let message = `Hola, esto es un aprendizaje de 
JavaScript`

console.log(message)

let email = "sandralpm943@gmail.com"
console.log(`hola, ${myName}! Tu email es ${email}.`)
