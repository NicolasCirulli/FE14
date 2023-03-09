console.log( personajes )

// funciones flecha

const sumar = ( num1, num2 ) => num1 + num2
const restar = ( num1, num2 ) => num1 - num2
const multiplicar = ( num1, num2 ) => num1 * num2
function dividir(a,b){
    return a / b
}


// funciones de orden superior

const calculadora = ( num1, num2, operacion ) => {
    const resultado = operacion( num1, num2 )
    console.log( resultado ) 
}

calculadora( 10, 10, sumar )

calculadora( 10, 5, ( num1, num2 ) => num1 - num2 )

calculadora( 10, 5, function(a,b){
    return a * b
} )

calculadora( 10, 5, dividir )


console.log( "Metodos de array" )
// metodos de array

const numeros = [5,67,1,2,354,6,1,2,56]
const alumnos = ["Luis", "David", "Arai", "Benjamin", "Florencia"]


// forEach
const funcionParaMetodo = (numero, indice, arrayOriginal ) => {
   console.log(numero * 2 )
} 
/* 
numeros.forEach( funcionParaMetodo ) */


// map
console.log( "Map" )
const numerosPorDos = numeros.map( numero => numero * 2 )
console.log( numerosPorDos )

// filter
console.log( "Filter" )
const numerosPares = numeros.filter( numero => numero % 2 === 0 )
const alumnosConA = alumnos.filter( alumno => alumno.toUpperCase().includes( "A" ) )
console.log( numerosPares )
console.log( alumnosConA )

// find
console.log("Find")
const luis = alumnos.find( alumno => alumno == "Luis" )
console.log( luis )

// some
console.log( "---Some---" )
const algunoEsPar = numeros.some( numero => numero % 2 === 0 )
console.log( algunoEsPar )
// every
console.log( "--Every---" )
const todosPares = numeros.every( numero => numero % 2 === 0 )
console.log( todosPares )

// reduce
console.log( "---Reduce----" )

const fnReduce = ( acumulador, currentValue ) => {
    return acumulador + currentValue
}
const sumaNumeros = numeros.reduce( fnReduce, 0 )
console.log( sumaNumeros )

const nombresAlumnos = alumnos.reduce( ( acumulador, currentValue ) =>acumulador + ` ${currentValue}` , "Alumnos: " )

console.log( nombresAlumnos )


console.log( personajes )