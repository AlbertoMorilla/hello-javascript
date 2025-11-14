// 1. Concatena dos cadenas de texto.

let myname = "Alberto"
let empresa = "Afertech"
let concatenado = myname + " " + empresa
console.log(concatenado)

// 2. Muestra la longitud de una cadena de texto.

let mystring = "Hola Alberto"
console.log(mystring.length)

// 3. Muestra el primer y ultimo caracter de un string.

console.log(mystring[0])
console.log(mystring[11])

// 4. Convierte a mayusculas y minusculas un string.

console.log(mystring.toLocaleUpperCase())
console.log(mystring.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias li­neas.

let StrinLinea = `Hola Alberto
tu empresa 
es Afertech`
console.log(StrinLinea)

// 6. Interpola el valor de una variable en un string.

let lenguaje = "Javascript"
let message = `Estoy aprendiendo ${lenguaje}`
console.log(message)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

let MymessageWithSpace = "Mi empresa es Afertech"
let StringWithSpace = MymessageWithSpace.replace(/ /g, "-")
console.log(StringWithSpace)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

let Comprobar = "En Afertech trabajamos con webs"
console.log(Comprobar.includes("webs"))

// 9. Comprueba si dos strings son iguales.

let StringFalseTrue1 = "Webs"
let StringFalseTrue2 = "webs"
console.log(StringFalseTrue1 === StringFalseTrue2)

// 10. Comprueba si dos strings tienen la misma longitud.

let LongString1 = "Hola"
let LongString2 = "Pesado"
console.log(LongString1.length === LongString2.length)