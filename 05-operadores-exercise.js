// 1. Crea una variable para cada operacion aritmetica.

let suma = 5 + 3
let resta = 5 - 4
let multiplica = 4 * 4
let division = 3 / 7
let modulus = 34 % 9
let exponente = 6 ** 5


// 2. Crea una variable para cada tipo de operacion de asignacin, que haga uso de las variables utilizadas para las operaciones aritmeticas.

let numero = 7

numero += suma
numero -= resta
numero *= multiplica
numero /= division
numero %= modulus
numero **= exponente

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion.

console.log(a < 2)
console.log(b > 2)
console.log(a == 0)
console.log(b != 3)
console.log(b >= 2.25)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion.

console.log(a > 5)
console.log(b < 2)
console.log(a == 3)
console.log(b != 2.25)
console.log(a >= 3)

// 5. Utiliza el operador logico and.

let c = 5
let d = 2
console.log(c > 3 && d > 3)

// 6. Utiliza el operador logico or.

console.log(c > 3 || d > 3)

// 7. Combina ambos operadores logicos.

console.log(c > 3 && d > 3 || c > 3)

// 8. Añade alguna negacion.

console.log(!true)

// 9. Utiliza el operador ternario.

const isRun = true

isRun ? console.log("esta corriendo") : console.log("no esta corriendo")

// 10. Combina operadores aritmeticos, de comparacion y logicas.

console.log((a + b) >= 2.25 || c < d )