// Ejercicio 4

// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado.

// 1. Se define el arreglo de entrada

let ejemplo = [1, 2, 5, 14, 24, 31, 50, 105]

function desorden(arreglo) {
    i = arreglo.length;
    while (i > 0) {
        j = Math.floor(Math.random()*i);
        i--;
        [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
    }
    return arreglo;
}

console.log(desorden(ejemplo));