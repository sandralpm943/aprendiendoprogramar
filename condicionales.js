//if, else if, else

//if (Si)
let age = 37
if (age == 37) {
console.log("La edad es 37")    //bloque
}

//else (si no)

if (age = 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad que dice no es correcta")
}

//else if( si no, si)
if (age = 37) {
    console.log("La edad es 37")
} else if(age < 18){
 console.log("Es menor de edad")
} else {
    console.log("La edad que dice no es 37 ni es menor de edad")
}


//Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch 
//Obtenemos la fecha entera con new Date()
let fecha = new Date()
//De la fecha entera anterior tenemos dos funciones para conseguir la semana con getDay() y el dia del mes con getDate()
let semana = fecha.getDay()
let dia = fecha.getDate() 
console.log(dia, semana )
//para comprobar la fecha 

let dayName 
//Una vez obtenida la semana el domingo se convierte en 0 y el sabado en 6 
switch(semana){
    case 0:
        dayName = "Domingo"
        break
    case 1:
        dayName = "Lunes"
        break
    case 2: 
        dayName = "Martes"
        break
    case 3:
        dayName = "Miercoles"
        break
    case 4:
        dayName = "Jueves"
        break
    case 5: 
        dayName = "Viernes"
        break
    case 6:
        dayName = "Sabado"
        break
    }

//Con los datos de la semana y el dia formamos un mensaje de buenos dias y lo imprimimos en la consola
let resultado = `Buenos dias hoy es ${dayName} , ${dia}` 
console.log(resultado)

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
//aprender poner la hora para si ha de decir buenos dias, buenas tardes o buenas noches


