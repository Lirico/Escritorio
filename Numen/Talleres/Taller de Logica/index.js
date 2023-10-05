

// 1) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarTexto = (cadena, recorte) => cadena.slice(0, recorte)

// 2) Programa una función que dada una cadena te devuelva un Array de textos separados por cierto caracter, 
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const separarTexto = (cadena, separador) => cadena.split(separador)

// 3) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
// devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirCadena = (cadena, repetir) => {

   return (cadena + " ").repeat(repetir)
}

// 4) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const revertirCadena = (cadena) => {

    return cadena.split('').reverse().join('')
}

// console.log(revertirCadena("Hola Mundo"))

// 5) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// const repetirPalabra = (cadena, palabra) => {
//     const palabras = cadena.split(" ")
//     let contador = 0;

//     for (let i = 0; i < palabras.length; i++) {
//         if (palabras[i].toLowerCase() === palabra.toLowerCase()) {
//             contador++
//         }
//     }
//     return contador
// }

// console.log(repetirPalabra("hola mundo adios mundo", "mundo"))

// 6) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// const validarPalindromo = (palabra) => palabra.toLowerCase() === palabra.split("").reverse().join("").toLowerCase()


// console.log(validarPalindromo("menem"))

// 7) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".
// const eliminarPatron = (cadena, patron) => {
//     return cadena.replace(new RegExp(patron, "ig"), "")
// }

// 8) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const aleatorio = () => console.log(Math.round(Math.random() * 100) + 500 ) 
 
// 9) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero) => {
    
    let alReves = numero.toString().split("").reverse().join("");
  
    return (numero === parseInt(alReves)) 
      ? `${numero} es capícua`
      : `${numero} No es capícua`
  };

// 10) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
// se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (numero  = undefined) => {
    if(numero === undefined) return console.log("No ingresaste un numero")

    if(typeof numero !== "number") return console.log("${numero}no es valido");
    
    if(numero === 0) return console.log("no puede ser 0");

    if(Math.sign(numero) === -1) return console.log("no puede ser negativo");

    let factorial = 1;

    for(let i = numero; i > 1; i--) {
        factorial *= i
    }

    return factorial
}

// 11) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (cantidad, descuento) => cantidad - cantidad * (descuento / 100)

// 12) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.
const convertirTemperatura = (temperatura, unidad) => {    
  switch (unidad) {
    case "C":
        let fahrenheit = (temperatura * 1.8) + 32;
        return fahrenheit.toFixed(2) + "°F";
    case "F":
        let celsius = (temperatura - 32) / 1.8;
        return celsius.toFixed(2) + "°C";
    default:
        return "Unidad de medida no válida";
  }
 }
 console.log(convertirTemperatura(0, "C"));

// 13) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.
function conversion(number, base) {
    if(base === 2){
        var final = parseInt(number, 2)
    }else{
        var final = number.toString(2);
    }
    return console.log(final)
}

conversion(5, 10)

// 14) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años.
function calcularEdad(fecha) {
    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    let mes = hoy.getMonth() - fecha.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }
    return edad;
  }
  console.log(calcularEdad(new Date(1984, 4, 23)));

// 15) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena) => {
    let vocales = 0,
      consonantes = 0;
  
      cadena = cadena.toLowerCase()
      let array = cadena.split("")
    
    for (let i = 0; i < array.length; i++) {
      if (/[aeiouáéíóúüäëö]/.test(array[i])) {
        vocales++
      } else if(/[bcdfghjklmnpqrstvwxyz]/.test(array[i])) {
        consonantes++
      }
    }
  
    return `Vocales: ${vocales}, Consonantes: ${consonantes}`
  }

// 16) Programa una función que valide que un texto sea un email válido, pe. miFuncion("academia@numen.com") devolverá verdadero.

// 17) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

// 18) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// 19) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// 20) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados 
// en forma ascendente y el segundo de forma descendiente,  pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

// 21)
    /* 
        Trolls are attacking your comment section!

        A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

        Your task is to write a function that takes a string and return a new string with all vowels removed.

        For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

        Note: for this kata y isn't considered a vowel.

    */

// 22)
    /* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

    Note: The function accepts an integer and returns an integer */