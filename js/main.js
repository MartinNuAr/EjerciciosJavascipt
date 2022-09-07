// Algoritmo 1

// 1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor



let btnRes = document.getElementById("btnRes");


btnRes.addEventListener("click", function (e) {
    e.preventDefault();
    
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
    let res = document.getElementById("respuesta");
    let flag = true;

    res.innerHTML = "";
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        res.innerHTML = `Favor de no dejar campos vacíos ni utilizar letras o símbolos`;
        flag = false;
    }

    let max = n1;
    if (max < n3) {
            max = n3;
        }
    if (max < n2) {
            max = n2;
        }
    

    if (n1 < 1 || n1 > 100) {
        res.innerHTML += `El número ${n1} no se encuentra en el rango especificado<br>`;
        flag = false;
    }
    if (n2 < 1 || n2 > 100) {
        res.innerHTML += `El número ${n2} no se encuentra en el rango especificado<br>`;
        flag = false;
    }
    if (n3 < 1 || n3 > 100) {
        res.innerHTML += `El número ${n3} no se encuentra en el rango especificado<br>`;
        flag = false;
    }
    if (flag) {
        res.innerHTML = `El número mayor es ${max}`;
    }

    }
);