// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName= "Sandra"
if (myName === "Sandra") {
console.log(myName)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Shishune"
let password = "kuki2013"
if (user=== "Shishune" && password === "kuki2013"){
    console.log("Usuario y contraseña correcto")
} else {console.log("No es correcto el usuario, porfavor vuelva a intentarlo")}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 10
if ( numero= "10"){
    console.log("numero alto")
}else if (numero < 0) {(numeroMenor ="1")
    console.log(numeroMenor)
} else {
    console.log("el numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
if (age = 18) {
    console.log("La edad es mayor de edad")
}  else {
    console.log(`La edad que dice no es 18 y es menor de edad ${18 - age}`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//dependiendo de la edad

const message = age >=18 ? "La edad es 18 y es mayor de edad" : "La edad no es 18 y es menor"
console.log(`la persona es ${message}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

function obtenerEstacion( ){

    const mes = new Date().getMonth() + 1;
    
}
if (mes >= 3 && mes <= 5){
    return "Primavera";
}else if (mes >= 6 && mes <= 8){
    return "Verano";
} else if (mes >= 9 && mes <= 11){
    return "Otoño";
}else 
{
    return "Invierno";
    
}
console.log("Estamos en:", obtenerEstacion())


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let mes1 = new Date();
let dia2= mes1.getDate();

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 0
let mensaje1
switch(idioma){
    case 0:
        mensaje1= "Hola como estas?"
    break

    case 1:
        mensaje1= "hello how are you?"
    break

    case 2:
        mensaje1= "Hallo, wie geht es dir"
    break

    case 3:
        mensaje1= "Salut comment vas-tu"
        break
    default:
        mensaje1= "Idioma no reconocido"
}
let resultado1 = `el idioma que ha elegido es: ${idioma} , ${mensaje1}`
console.log(resultado1)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mesActualm = new Date().getMonth() + 1
let estacion
switch(true){
    case mesActualm >= 3 && mesActualm <= 5:
        estacion= "Primavera"
    break
    
    case mesActualm >= 6 && mesActualm <= 8:
        estacion= "Verano"
    break

    case mesActualm >= 9 && mesActualm <= 11:
        estacion= "otoño"
    break

    default: 
        frio= "Invierno"
    
}
let resultado2 = `la estacion en la que estamos es ${estacion} `
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes2 = 10
let diasMes 
switch(mes2){
    case 2:
        diasMes = 28
        break
    case 4: 
    case 6: 
    case 9: 
    case 11:
        diasMes = 30
        break
    default:
        diasMes = 31
}

console.log(`el mes ${mes2} tiene ${diasMes} dias`)
