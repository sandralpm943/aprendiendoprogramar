// 1. Crea un array que almacene cinco animales

let myAnimals = new Array()

myAnimals = new Array("Cacatua", "Perro",  "Hamster", "Rata", "Elefante")

console.log(myAnimals)

// 2. Añade dos más. Uno al principio y otro al final
//hecho en el primero


// 3. Elimina el que se encuentra en tercera posición
//hecho

// 4. Crea un set que almacene cinco libros

let misLibros = new Set(
)

misLibros = new Set(["La saga de los chicos de tommen", "Caracola",  "lo que susurra la nieve al caer", "poster girl", "saga de empireo", "Caracola"])
//"Afterlove",
console.log(misLibros)
// 5. Añade dos más. Uno de ellos repetido
//hecho
// 6. Elimina uno concreto a tu elección
//hecho
//Set(5) {size: 5, La saga de…de tommen, Caracola, lo que sus…e al caer, poster girl, saga de empireo}

// 7. Crea un mapa que asocie el número del mes a su nombre

let miMapa = new Map()

miMapa = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"], 
    [5, "Mayo"],
    [6, "Junio"], 
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])



// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(miMapa.has(5))


if (miMapa.has(5)){
    console.log(`Mi mapa esta en ${miMapa.has(5)}` )
}else{
    console.log(`Mi mapa esta en ${miMapa.has(5)}`)
}

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

console.log(miMapa.keys(12))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

// 1️⃣ Crear el array
let miArray = ["Elefante", "Canario", "Gato"]

// 2️⃣ Crear el Set a partir del array (después de tener datos)
let miSet = new Set(miArray)

// 3️⃣ Crear el Map y almacenar el Set dentro
let misAnimales = new Map([
  ["animales", miSet]
])

// 4️⃣ Mostrar resultados
console.log(misAnimales)                 // Muestra el Map completo
console.log(misAnimales.get("animales")) // Muestra el Set almacenado


//(5) ['Cacatua', 'Perro', 'Hamster', 'Rata', 'Elefante']