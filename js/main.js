// Ejercicio 2

// Se define una función que tome arreglo de números y devuelva el número más pequeño de la lista.

// 1. Se define el arreglo de entrada

let arreglo = [-1, 3, 4, 2, 6];

// 2. Se calcula el número menor con comparaciones en un ciclo

function numeroMenor(min) {
    // 3. Se asigna el primer valor del arreglo

    min = arreglo[0];

    // 4. Se comienza a comparar con el segundo valor del arreglo y continúa hasta recorrer todo el ciclo

    for (let cont = 1; cont < arreglo.length; cont++) {
        if (min > arreglo[cont]) {
            min = arreglo[cont];
        }
    }
    return min;
}

// 5. Devuelve el resultado en la consola

console.log(numeroMenor(arreglo));