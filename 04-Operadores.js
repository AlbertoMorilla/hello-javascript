// Operadores aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a) // Incremento

a-- // Decremento
console.log(a) // Decremento

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignacion
console.log(myVariable)

myVariable -= 2 // Resta con asignacion
myVariable *= 2 // Multiplicacion con asignacion
myVariable /= 2 // Division con asignacion
myVariable %= 2 // Modulo con asignacion
myVariable **= 2 // Exponente con asignacion

// Operadores de comparacion

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igual por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === b) // Igualdad por identidad (por valor y tipo) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != b) // Desigualdad por valor
console.log(a !== b) // Desigualdad estricta (por valor y tipo)
console.log(0 == false)
console.log(1 == false)
console.log(0 == true)
console.log(1 == true)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == null)
console.log(0 == undefined)
console.log(0 == NaN)
console.log(0 == "hola")
console.log(0 === "")
console.log(0 === false)
console.log(undefined == null)
console.log(undefined === null)

/* Truthy values (valores verdaderos)

-Todos los numeros positivos y negativos menos el cero
-Todos las cadenas de textos menos las vacias
-El boolean true
*/

/* Falsy values (Valores falsos)

- 0
- 0n
- null
- undefined
- NaN
- El boolean false
- Las cadenas vacias
*/

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 > 10 && 15 < 20)
console.log(5 < 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 > 10 || 15 < 20)
console.log(5 < 10 || 15 > 20 || 30 > 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 || 15 > 20))
console.log(!(5 < 10 && 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")