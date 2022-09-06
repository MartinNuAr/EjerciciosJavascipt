// Ejercicio 1

// Se define una función que tome arreglo de números y devuelva el número mayor de la lista.

// 1. Se define el arreglo de entrada

let arreglo = [3, 5, 7, 1, 6];

// 2. Se calcula el número mayor con comparaciones en un ciclo

function numeroMayor(max) {
    // 3. Se asigna el primer valor del arreglo

    max = arreglo[0];

    // 4. Se comienza a comparar con el segundo valor del arreglo y continúa hasta recorrer todo el ciclo

    for (let cont = 1; cont < arreglo.length; cont++) {
        if (max < arreglo[cont]) {
            max = arreglo[cont];
        }
    }
    return max;
}

// 5. Devuelve el resultado en la consola

console.log(numeroMayor(arreglo));