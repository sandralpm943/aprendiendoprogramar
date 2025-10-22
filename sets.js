// set 

//declaracion

let mySet = new Set()


console.log(mySet)


// Inicialización

mySet = new Set(["brais", "moure" , "puto", 25, true, "sandralpm943@gmail.com"])

console.log(mySet)

//Metodos comunes


// add y delete 

mySet.add("google.es")

mySet.delete("google.es")
console.log(mySet.delete(5))

console.log(mySet)

console.log(mySet.delete("brais"))

// has

console.log(mySet.has("moure"))
console.log(mySet.has("brais"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)
// Convertir un array a un set 

mySet = new Set(myArray)
console.log(mySet)


// No admite duplicados

mySet.add("google.es")
mySet.add("Google.es")
console.log(mySet)

