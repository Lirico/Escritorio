// PRODUCTO CARTESIANO

/* 
    Ejercicio 1

    En el conjunto de los números naturales N se define la siguiente relación de 
    "S b si y solo si a|b"

    ¿Cuáles de los siguientes pares ordenados pertenecen a S?

    a. (2,3)
    b. (0,8)
    c. (1,3)
    d. (6,18)
    e. (-6,24)
*/

function calcularModulo(a,b) {
    return a <= 0 || b <= 0
        ? "No pertenece a S"
        : b % a !== 0 
            ? "No pertenece a S"
            : "Pertenece a S"
}

console.log(
    `
        ${calcularModulo(2,3)}
        ${calcularModulo(0,8)}
        ${calcularModulo(1,3)}
        ${calcularModulo(6,18)}
        ${calcularModulo(-6,24)}
`)

// MATRIZ DE ADYACENCIA
// Determina que elementos están relacionados por medio de unos y ceros
/*
    | 1 0 1 0 |
    | 0 0 0 1 |
    | 0 1 0 0 |
*/

/* 
    Ejercicio 2

    Determinar el dominio, la imagen, la matriz y su represnetación para cada una
    de las siguientes relaciones.

    2.1. A={a,b,c,d}, B={1,2,3}, R={(a,1),(a,2),(b,1),(c,2),(d,1)}
    2.2. A={1,2,3,4}, B={1,4,6,8,9} a S b si y solo si b=a2.
    2.3. A={1,2,3,4,8} = B; a R b si y solo si a=b
    2.4. A={1,2,3,4,6} = B; a S b si y solo si "a" es multiplo de b. 
*/

// 2.1. A={a,b,c,d}, B={1,2,3}, R={(a,1),(a,2),(b,1),(c,2),(d,1)}
const Mr2_1 = [ // MR significa Matriz Relacional
    // columnas j
    [1, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 0]
]

const dominio2_1 = "A", // Conjunto de donde parten las flechas
    coDominio2_1 = "B", // Conjunto donde se reciben las flechas
    imagen2_1 = [1,2] // Los conjuntos j que tienen al menos un valor 1.


// 2.2. A={1,2,3,4}, B={1,4,6,8,9} a S b si y solo si b=a2.
const Mr2_2 = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]
]

const dominio2_2 = "A", 
    coDominio2_2 = "B", 
    imagen2_2 = [4,6,8] 


// 2.3. A={1,2,3,4,8} = B; a R b si y solo si a=b
const Mr2_3 = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]
    [0, 0, 0, 0, 1]
]

const dominio2_3 = "A", 
    coDominio2_3 = "B", 
    imagen2_3 = [1,2,3,4,8] 

// 2.4. A={1,2,3,4,6} = B; a S b si y solo si "a" es multiplo de b. 
const Mr2_4 = [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 1, 0]
    [1, 1, 1, 0, 1]
]

const dominio2_4 = "A", 
    coDominio2_4 = "B", 
    imagen2_4 = [1,2,3,4,6] 


// RELACION INVERSA -> R ** -1 // Esto lleva a la Transposicion de Matriz Relacional -> MtR
// Es posible representarlo invirtiendo filas y columnas de una matriz

// RELACIONES DE COMPLEMENTO
// Son el conjunto de elementos que no se relacionan entre si. Es decir que en una matriz
// complemente, se invierten los 1 por 0 y viceversa, dando como resultado una imagen
// opuesta. 

// RELACIONES DE OPERACIONES
// Relación OR -> v
// Construcción de una nueva matriz basado en la comparación de 2 matrices donde colocamos
// un 1 en cada posición donde al menos una de las 2 matrices tenia un 1.

/* 
    Ejercicio 3

    Sean R1 = {(1,2),(2,3),(3,4)} y R2={(1,1),(1,2),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3),(3,4)}
    relaciones de {1,2,3} en {1,2,3,4}, hallar por extensión y matricialmente:

    3.1. R1 ** -1
    3.2. Rc
    3.3. (R1 union R2) ** -1
    3.4. (R1 union R2)c
*/

const R1_3 = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]

const R2_3 = [
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 1]
]

// 3.1
const R1_3_Transpuesta = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

// 3.2.
const R2_3_Complemento = [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
]


// 3.3.
const Mr1UnionMr2 = [ // Al ser AND, solo se conservan los unos compartidos en ambas matrices
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]
// Transponiendo -> Invertimos filas por columnas
const MatrizTranspuesta = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]

const Extension3_3 = [(2,1), (3,2), (4, 3)]

// CARDINAL -> length
// La cantidad de elementos que hay dentro de un conjunto. Vease conjunto.length

// COMPOSICION DE RELACIONES -> PRODUCTO BOOLEANO // MrxMt -> Mtor
// En una multiplicacion de matrices, solo queda uno si en la relación fila columna entre
// ambas matrices al menos hay una coinicidencia de 1 - 1 entre las posiciones equivalentes
// de cada matriz.