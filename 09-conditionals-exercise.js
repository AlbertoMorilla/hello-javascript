// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let Name = "Alberto"

if (Name == "Alberto") {
    console.log("Tu nombre es Alberto")
} else {
    console.log("Tu nombre no es Alberto")
}
// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

let User = "admin"
let Password = 1234

if (User == "admin" && Password == 1234) {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}
// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.

let number = 3

if (number > 0 ) {
    console.log("El numero es positivo")
} else if (number < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es cero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

let age = 15

if (age >= 18) {
    console.log("Puedes votar")
} else {
    console.log(`No puedes votar, te faltan ${18-age} años mas`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let category = age >= 18 ? "adulto" : "menor"
console.log(category)

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
let month = 7

if (month >= 3 && month <=5) {
    console.log("Primavera")
} else if (month >= 6 && month <= 8) {
    console.log("Verano")
} else if (month >= 9 && month <= 11) {
    console.log("Otoño")
} else {
    console.log("Invierno")
}
// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

if (month === 2) {
    console.log("28 o 29 dias")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 dias")
} else {
    console.log("31 dias")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let idioma = "fr"

switch (idioma) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    case "it":
        console.log("Ciao")
        break
    default:
        console.log("El idioma no esta incluido")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6.

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    default:
        console.log("Invierno")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch (month) {
    case 2: 
        console.log("28 o 29 dias")
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias")
        break
    default:
        console.log("31 dias")
}