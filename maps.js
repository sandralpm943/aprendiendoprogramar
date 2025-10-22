// Map

//Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Sandra"],
    ["email", "sandralpm943@gmail.com"],
    ["age", 25]
])

console.log(myMap)

// Métodos y propiedades

//set

myMap.set("alias", "sandralpm943")
myMap.set("name", "sandra")

console.log(myMap)

//get

console.log(myMap.get("name"))

//has 

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// keys , values y entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())
// size

console.log(myMap.size)

// delete

myMap.delete("email")

console.log(myMap)

//clear

myMap.clear()

console.log(myMap)

