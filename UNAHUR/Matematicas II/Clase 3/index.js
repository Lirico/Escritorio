


/* 
    1) Dado el conjunto ..

        a) Expresar por extension ambas relaciones y hallar sus matrices adyacentes

        b) Graficar sus correspondientes digrafos
        
        c) Calcular analitica y matricialmente (R ** -1 && S); (R - !S); (S ** -1 && !S), (S - R)** -1 y !(R && S)

        Simbologia:
        && -> Union
        ** -> Elevado a 
        !  -> Complemento
*/

const A = [0, 1, 2, 3]

// R = {(x;y) E A**2 / y-1 <= x}

// Si "y" vale 0 entonces
/* 
    (0;0)
    (1;0)
    (2;0)
    (3;0)
*/
// Si "y" vale 1 entonces
/* 
    (0;1)
    (1;1)
    (2;1)
    (3;1)
*/
// Si "y" vale 2 entonces
/* 
    (1;2)
    (2;2)
    (3;2)
*/
// Si "y" vale 2 entonces
/* 
    (2;3)
    (3;3)
*/

// S: A -> A / S = {(x;y) E A**2 / 2x-2 <= y}

// Si y = 0 entonces
/* 
    (0;0)
    (1;0)
*/
// Si y = 1 entonces
/* 
    (0;1)
    (1;1)
*/
// Si y = 2 entonces
/* 
    (0;2)
    (1;2)
    (2;2)
*/
// Si y = 3 entonces
/* 
    (0;3)
    (1;3)
    (2;3)
*/

// NOTA: El producto de 2 matrices es la relación boleana entre las posiciones de 2 matrices. Y 
// la elevación al cuadrado es el producto de 2 matrices identicas.

/* 
    EJERCICIO 2

    Relacion de alcanzabilidad R*

    T = {(3;1);(1;2);(2;3);(0;0);(1;0);(4;2);(4;4)}
    
    A = {0;1;2;3;4}
*/

// Producto de T**2

const T = [
    // 0 1 2 3 4  
    [1,0,0,0,0], // 0
    [1,0,1,0,0], // 1
    [0,0,0,1,0], // 2
    [0,1,0,0,0], // 3
    [0,0,1,0,1], // 4
]

// Hacemos producto cartesiano de T por T sacando producto booleano de filas por columnas para obtener
// T al cuadrado longitud 2

const TcuadradoLong2 = [
  // 0 1 2 3 4  
    [1,0,0,0,0], //0
    [1,0,0,1,0], //1
    [0,1,0,1,0], //2
    [1,0,1,0,0], //3
    [0,0,1,1,1], //4
]

// Ahora hacemos el producto T por Tlong2 para obtener Tlong3

const TcuadradoLong3 = [
  // 0 1 2 3 4  
    [1,0,0,0,0], //0
    [1,1,0,0,0], //1
    [1,0,1,0,0], //2
    [1,0,0,1,0], //3
    [0,1,1,1,1], //4
]

// Ahora hacemos el producto T por Tlong3 para obtener Tlong4

const TcuadradoLong4 = [
  // 0 1 2 3 4  
    [1,0,0,0,0], //0
    [1,0,1,0,0], //1
    [1,0,0,1,0], //2
    [1,1,0,0,0], //3
    [1,1,1,1,1], //4
]

const TcuadradoLong5 = [
    // 0 1 2 3 4  
      [1,0,0,0,0], //0
      [1,0,0,1,0], //1
      [1,1,0,0,0], //2
      [1,0,1,0,0], //3
      [1,1,1,1,1], //4
  ]

// El proceso continua hasta que ya no aparece ningún 1 nuevo y se repiten "unos" que ya aparecieron previamente
// en longitudes anteriores.

/* 
  Ahora se puede realizar la Relacion de Conectividad donde armamos una matriz con todos los "unos que fueron apareciendo
  a lo largo del proceso de descubrimiento de longitudes

  MR**Infinito = MRLong1 || MRlong2 || MRlong3 || MRlong 4...

  Simbologia:
  || -> OR
  Infinito -> Conectividad
*/
const MatrizR = [
  // 0 1 2 3 4  
    [1,0,0,0,0], //0
    [1,1,1,1,0], //1
    [1,1,1,1,0], //2
    [1,1,1,1,0], //3
    [1,1,1,1,1], //4
]

/* 
    Ahora podemos realizar la Relacion de Alcanzabilidad donde hacemos una comparativa OR entre la MatrizR y una Matriz
    donde solo hay "unos" en la diagonal principal.
    El resultado es la relacion de alcanzabilidad, que en este caso no modifica en absoluto la MatrizR.

    MR* = MR**Infinito || MR**0

    Simbologia:
    * -> Alcanzabilidad
*/

// NOTA: Para que pueda quedar un 1 en una posición, en el producto booleano entre una fila y una columna debe 
// al menos haber una coincidencia de 1 - 1 entre 2 posiciones a lo largo de las comparativas entre las filas y las 
// columnas.


////////////////////////////////////////////////////////////////////////
/* 
    EJERCICIO 3
    
    T = R**-1 && S 

    R = {(1;1);(1;5);(3;3);(5;5)}
    A = {1;3;5}
    S / xsy <==> x >= y

    Los elementos de S salen de A.

    Simbologia:
    && -> Union
    <==> -> Si y solo si
    s -> Se relaciona

    R**-1 = {(1;1);(5;1);(3;3);(5;5)} 

    NOTA: Un conjunto a la -1 consiste en invertir las posiciones de x e y, donde si tengo (1;5) pues lo invierto
    a (5;1).

    Entonces S seria:
    S = {(1;1);(3;1);(3;3);(5;1);(5;3);(5;5)}

    Con esto podemos calcular T que tendria los elementos que coiniciden entre R**-1 y S.
    T = {(1;1);(3;3);(5;1);(5;5)} 

    Domt = {1;3;5}
    Imgt = {1;3;5}
*/

const Mt = [
  // 1 3 5
    [1,0,0], // 1
    [0,1,0], // 3
    [1,0,1]  // 5
]

/* 
    NOTA: Falta hacer el digrafo que es el dibujito donde se muestra que se relaciona con que mediante flechas.
    Repasar esto en papel ya que no se puede representar en codigo.
*/

// Para saber si es REFLEXIVA hay que comprar Mt con la matriz identidad (I) y ver si hay relacion de
// unos entre ambas matrices, donde I <= Mt, es decir que Mt al menos debe conincidir con los unos de "I" COMO
// MINIMO.
const I = [
    [1,0,0], 
    [0,1,0], 
    [0,0,1]  
]

// Como podemos ver todos los elementos se relacionan consigo mismos.

// NOTA: En una matriz REFLEXIVA todos los elementos deben relacionarse consigo mismos, esto implica que cada elemento 
// se relaciona en forma de bucle.

// NOTA: Contrariamente una matriz AREFLEXIVA debe tener al menos un elemento que no se relacione consigmo mismo.

// NOTA:  Una matriz SIMETRICA debe tener igualdad de valores entre X e Y entre MR y MR**-1. Es decir, la 
// original y su traspuesta deben ser identicas. Los bucles estan permitidos (x = y);

// NOTA: Una matriz ANTISIMETRICA debe cumplir que la UNION entre MR y MR**-1 sea <= que la matriz Identidad (I).
// Es decir, pueden haber bucles (x = y). NO DEBEN HABER UNOS FUERA DE LA DIAGONAL PRINCIPAL para que sea ANTISIMETRICA
// aunque pueden faltar unos en la diagonal principal siempre y cuando NO sea NULA.

// NOTA: Una matriz ASIMETRICA (que no es lo mismo que la ANTISIMETRICA) no tiene permitidos los bucles. En este caso
// La UNION entre MR y MR**-1 debe dar como resultado una matriz NULA, es decir, una matriz que tiene 0 en todas las
// posiciones. 
// Formula: Conjunto(x,y) E A: xRy => y!Rx

// NOTA: Una matriz TRANSITIVA cuando un X se dirige a un elemento Y pero Y no se dirige a Z. Tambien es transitiva
// cuando X se dirige a Y, Y a Z y Z a X. Por lo tanto, si Z se dirige (relaciona) con X, no hace falta analizar mas, 
// ya es Transitiva.
// Solo no es transitiva si X se dirige a Y, Y a Z pero Z no se dirige a X. 
// Formula: Conjunto(x,y,z) E A: xRy && yRz => xRz

////////////////////////////////////////////////////////////

/* 
    EJERCICIO 4

    R depende de a, b, c y d.

    a se relaciona con si misma y con b.
    b se relaciona con a.
    c se relaciona con d.
    d se relaciona con si misma.

    R = {(a;a);(a;b);(b;a);(c;d);(d;d)}
*/

const Rej4 = [
  // a b c d
    [1,1,0,0], // a
    [1,0,0,0], // b
    [0,0,0,1], // c
    [0,0,0,1]  // d
] 
// NO ES REFLEXIVA por que hay elementos que no tienen bucle.
// ES AREFLEXIVA 

// R**-1 = {(a;a);(b;a);(a;b);(d;c);(d;d)}
const Rej4T = [
  // a b c d
    [1,1,0,0], // a
    [1,0,0,0], // b
    [0,0,0,0], // c
    [0,0,1,1]  // d
]
// NO ES SIMETRICA por que MR y MRt no son identicas.
/* 
        MR            MRt      
    [1,1,0,0]     [1,1,0,0]      [1,1,0,0]
    [1,0,0,0]     [1,0,0,0]      [1,0,0,0]
    [0,0,0,1]  ^  [0,0,0,0]  =   [0,0,0,0]
    [0,0,0,1]     [0,0,1,1]      [0,0,0,1]
*/

const RyRt = [
    [1,1,0,0],
    [1,0,0,0],
    [0,0,0,0],
    [0,0,0,1]
]

// NO ANTISIMETRICA ya que la union de MR y MRt da como resultado una matriz donde NO se dan relaciones de ida y vuelta
// entre todos los elementos involucrados. Además existen unos fuera de la diagonal principal. Para que sea ANTISIMETRICA
// NO DEBEN haber UNOS fuera de la diagonal principal.
// NO ES ASIMETRICA

const productoDeMR = [
    [1,1,0,0],
    [1,1,0,0],
    [0,0,0,1],
    [0,0,0,1]
]

// NO ES TRANSITIVA por que no se cumple que:
/* 
    si
        x = b
        y = a
        z = b
    No se cumple que bRa ^ aRb => bRb
*/

