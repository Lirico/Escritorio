

// 1) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//  pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// const recorteTexto = (cadena, recorte) => cadena.substr(cadena, recorte)
// const recorteTexto = (cadena, recorte) => cadena.slice(0, recorte)
  


// 2) Programa una función que dada una cadena te devuelva un Array de textos separados por cierto caracter, 
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// const textosSeparados = (cadena, separacion) => cadena.split(separacion)



// 3) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
// devolverá Hola Mundo Hola Mundo Hola Mundo.
// const repetirTexto = (texto, cantidad) => texto.repeat(cantidad)



// 4) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// const invertirPalabras = (cadena) => cadena.split("").reverse().join("")


// 5) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// const repetirPalabra = (cadena, palabra) => {
//     let array = cadena.split(" ")
//     let contador = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === palabra.toLowerCase()) {
//             contador++
//         }
//     }
//     return contador
// }

// 6) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// const validarPalindromo = (palabra) => {
//     return palabra.toLowerCase() === palabra.toLowerCase().split("").reverse().join("")
// }

// 7) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".
// const eliminarPatron = (texto, patron) => {
//     return texto.replace(new RegExp(patron, "ig"), "")
// }

// 8) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// const obtenerNumeroAleatorio = () => Math.round(Math.random() * 100 + 500)

// 9) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// function evaluarCapicua(numero) {
//     let capicua = Number(numero.toString().split("").reverse().join(""));

//     console.log(capicua)
//     return numero === capicua ? "Es capicúa" : "No es capicúa";
// }

// 10) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
// se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const calcularFactorial = (n) => {
    // Podriamos usar un for -> iterar numeros hasta n inclusive
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
       factorial = factorial * i
    }
    return factorial
}

// 11) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.
function aplicarDescuento(cantidad, descuento) {
    return cantidad - cantidad * (descuento/100)
}

// 12) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (numero, medida) => {
    let grado = medida.toLowerCase()

    return (grado === "c")
        ? ((numero * 9/5 + 32) + "°" + medida.toUpperCase())
        : ((numero - 32) * 5/9 + "°" + medida.toUpperCase())
}

// 13) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBinarioDecima = (num, base) => {
    if(base === 2) {
        return `${num} base ${base} = ${parseInt(num, base)} base 10`
    } else if(base === 10) {
        return `${num} base ${base} = ${num.toString(2)} base 2`
    }
}

// function convertirBase(numero, base) {
//     if (base === 2) {
//       let decimal = 0;
//       let potencia = 0;
//       while (numero > 0) {
//         let digito = numero % 10;
//         decimal += digito * Math.pow(2, potencia);
//         numero = Math.floor(numero / 10);
//         potencia++;
//       }
//       return decimal;
//     } else if (base === 10) {
//       let binario = "";
//       while (numero > 0) {
//         let residuo = numero % 2;
//         binario = residuo.toString() + binario;
//         numero = Math.floor(numero / 2);
//       }
//       return binario;
//     } else {
//       return "Base no válida";
//     }
//   }
  

// Bonus:
// 14) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años.
const CalculaAnios=(fecha)=>{
    //dgetTime devuelve fecha en milisegundos, pero solo desde 1970
    var actual = new Date();//fecha actual
    var edad = actual.getFullYear()-fecha.getFullYear();//años que pasaron            
    var meses = actual.getMonth()-fecha.getMonth();//meses que pasaron
    var dias = actual.getDate() - fecha.getDate();//dias que pasaron
    if (!fecha instanceof Date){ //no pude usar typeof porque date es un objeto (así como también lo es array, etc). Para diferenciarlo se usa instanceof
        return "Debes ingresar una fecha válida"
    }
    if (meses < 0 || (meses===0 && dias<0) ){ //validar de esté en el mes actual o lo haya sobrepasado, sino aún no se cumple el año
        edad--;
    }
    return `${edad} años`;    
}

    

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
const validarEmail = (email) => {
    RegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.exec(email)

    return RegExp
        ? "Verdadero"
        : "Falso"
}



// 17) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const devolverMasAltoYMasBajo = (array) => {

    let masAlto = 0,
      masBajo = array[0],
      masAltoYMasBajo = [masAlto, masBajo]
    
    for (let i = 0; i < array.length; i++) {
  
        if (array[i] > masAlto) {
          masAlto = array[i]
          masAltoYMasBajo[0] = masAlto
        }
  
        if (array[i] < masBajo) {
          masBajo = array[i]
          masAltoYMasBajo[1] = masBajo
        }
    }
  
    return masAltoYMasBajo
  }

// 18) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevarArrayAlCuadrado = array => {

    let elevado  = []

    for (let i = 0; i < array.length; i++) {
        elevado.push(Math.pow(array[i], 2))
    }
    return elevado
}

// 19) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const arraySinDuplicado = (array) => {

    let sinDuplicados = []

    array.map(elemento => {
        !sinDuplicados.includes(elemento) && sinDuplicados.push(elemento)
    })

    return sinDuplicados
}



// 20) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


// 21)
    /* 
        Trolls are attacking your comment section!

        A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

        Your task is to write a function that takes a string and return a new string with all vowels removed.

        For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

        Note: for this kata y isn't considered a vowel.

    */
      const sacarvocales = (cadenaa) => {
        let arraycadena = []
        cadenaa = cadenaa.split("")
          for (let i = 0; i < cadenaa.length; i++) {
            if (cadenaa[i].toLowerCase() !=="a" && cadenaa[i].toLowerCase() !=="e" && cadenaa[i].toLowerCase() !=="i" && cadenaa[i].toLowerCase() !=="o" && cadenaa[i].toLowerCase() !=="u"){
              arraycadena.push(cadenaa[i])
            }
          }
          
          return arraycadena.join("")
        }
        
      
// 22)
    /* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

    Note: The function accepts an integer and returns an integer */

    const cuadradoConcat = entero =>
    ~~entero
        .toString()
        .split("")
        .map(num => num ** 2)
        .join("");

    console.log(cuadradoConcat(9119))