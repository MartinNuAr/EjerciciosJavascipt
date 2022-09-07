// Algoritmo 5

// Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros



let btnRes = document.getElementById("btnRes");


btnRes.addEventListener("click", function (e) {
    e.preventDefault();
    
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
    let res = document.getElementById("respuesta");

    res.innerHTML = "";
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        res.innerHTML = `Favor de no dejar campos vacíos ni utilizar letras o símbolos`;
        flag = false;
    }

    if (n1 == (n2+ n3)) {
        res.innerHTML = `El número ${n1} es igual ${n2} + ${n3}`;
    }
    else if (n2 == (n1+ n3)) {
        res.innerHTML = `El número ${n2} es igual ${n1} + ${n3}`;
    }
    else if (n3 == (n2+ n1)) {
        res.innerHTML = `El número ${n3} es igual ${n1} + ${n2}`;
    }
    else{
        res.innerHTML = `No existe ningún número que sea la suma de los otros dos`;
    }
    }
);