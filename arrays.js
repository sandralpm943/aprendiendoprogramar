//array

//declaración

let array =[]
let array2 = new Array()

console.log(array)
console.log(array2)

//Inicialización

array = [ 1 ]
array2 = new Array(1, 2, 3, 4)

console.log(array)
console.log(array2)
//se pueden poner frases o numeros o palabras o con numeros o booleanos
array = ["Brais", "Moure"]
array2 = new Array(1,2 ,3)

console.log(array)
console.log(array2)

array2 = new Array(3)
array2[0] = "Sandra"
array2[1] = "Lopez"
array2[2] = "M"

console.log(array2)

array = []
array2[2] = "Sandra"
array[1] = "lopez"

console.log(array)

//metodos comunes

array = []

//push y pop

array.push("Sandra")
array.push("lopez")
array.push("l")
array.push("25")

console.log(array)
//elimina el ultimo elemento del array
console.log(array.pop())// Elimina el ultimo y lo devuelve
array.pop()

console.log(array)

//shift y unshift
console.log(array.shift())
array.shift()// elimina el primer elemento 
console.log(array)

array.unshift("Brais", "moure") 
console.log(array)//agrega desde el principio

//length

console.log(array.length())//longitud

//clear
array = []
array.length = 0
console.log(array)

//slice 

array.push(25)

array.slice(1, 2)

console.log(array)
