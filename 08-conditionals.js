// if, else if, else

//if (si)

let age = 38

if (age == 38) {
    console.log("La edad es 38")
}

// else (si no)

if (age == 38) {
    console.log("La edad es 38")
} else {
    console.log("La edad no es 38")
}

// else if (si no, si)

if (age == 38) {
    console.log("La edad es 38")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 38 ni es menor de edad")
}

// Operadores ternarios

const message = age == 38 ? "La edad es 38" : "La edad no es 38"
console.log(message)

// switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)