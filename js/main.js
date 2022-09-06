// Ejercicio 3

// Escribir una función que permita saber si un número se repite dentro de un arreglo.

// 1. Se define el arreglo de entrada (en este ejemplo, tres casos de prueba)

let caso1 = [1, 22, 5, 17, 10, 5, 40, 5];
let caso2 = [7, 41, 5, 7, 10, 13, 2];
let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];

// 2. Se define la función

function numeroRepetido(arreglo) {
    
// Se declara un valor booleano por defecto para almacenar la respuesta.
    
    let respuesta = true;

// Inicia un ciclo que compara el primer valor con todos los valores y después se va reocrriendo hasta acabar la lista.

    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            if ((arreglo[i] == arreglo[j]) && (i != j)) {

                // Si encuentra un número igual, cambia el valor de respuesta, se almacena el número y rompe el ciclo.

                respuesta = false;
                num = arreglo[j]
                console.log(`El número ${num} se encuentra más de una vez`);
            }
        }
    }

    if (respuesta) {
        console.log("No hay números repetidos");
    }  
}
// Se imprimen los resultados de las funciones en la consola

console.log(numeroRepetido(caso1));
console.log(numeroRepetido(caso2));
console.log(numeroRepetido(caso3));
