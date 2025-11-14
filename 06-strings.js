// Strings
// Concatenacion

let myName = "Alberto"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[10])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.includes("Fernandez"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Hola", "Buenos dias"))

// Template literals (plantillas literales)

let email = "alberto@alberto.es"
let message = `Hola, este es un 
mensaje de javascript`

console.log(message)

console.log(`Hola, ${myName}! Tu email es ${email}`)