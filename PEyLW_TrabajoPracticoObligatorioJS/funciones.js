function validar() {
    // Elementos del formulario
    const inputValues = [];
    const diaNac = document.getElementById("dia");
    const mesNac = document.getElementById("mes");
    const anioNac = document.getElementById("anio");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const obraSocial = document.getElementById("obras_sociales");
    inputValues.push(nombre, apellido, email, obraSocial);

    // Validación de fecha de nacimiento
    const dia = parseInt(diaNac.value);
    const mes = parseInt(mesNac.value);
    const anio = parseInt(anioNac.value);

    const fechaActual = new Date();
    const anioBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    const fechaInvalidaGenerica = dia <= 0 || mes <= 0 || anio <= 0 || dia > 31 || mes > 12 || anio > fechaActual.getFullYear();
    const fechaInvalidaFebrero = (mes === 2 && ((anioBisiesto && dia > 29) || (!anioBisiesto && dia > 28)));
    const fechaInvalidaAbrilANoviembre = [4, 6, 9, 11].includes(mes) && dia > 30;

    const fechaValida = !fechaInvalidaGenerica && !fechaInvalidaFebrero && !fechaInvalidaAbrilANoviembre;

    let punto = 0;
    if (fechaValida && dia >= 1 && mes >= 1 && anio >= 1) {
        cambiarEstilo("remove");
        punto += 3;
    } else {
        cambiarEstilo("add");
    }

    let formNoTerminado = true;
    for (let i = 0; i < inputValues.length; i++) {
        if (!inputValues[i].value) {
            inputValues[i].classList.add("highlight");
        } else if ((inputValues[i].value === email.value) && !(verificarEmail(inputValues[i].value))) {
            inputValues[i].classList.add("highlight");
        } else if (inputValues[i].value === nombre.value || inputValues[i].value === apellido.value) {
            if (!verificarInput(inputValues[i].value)) {
                inputValues[i].classList.add("highlight");
            } else {
                inputValues[i].classList.remove("highlight");
                punto++;
                if (punto === 7) {
                    formNoTerminado = false;
                }
            }
        } else {
            punto++;
            inputValues[i].classList.remove("highlight");
            if (punto === 7) {
                formNoTerminado = false;
            }
        }
    }

    if (!formNoTerminado) {
        alert("Enviado");
    }
}

function cambiarEstilo(instruccion) {
    if (instruccion == "add") {
    document.getElementById("dia").classList.add("highlight");
    document.getElementById("mes").classList.add("highlight");
    document.getElementById("anio").classList.add("highlight");
    } else {
    document.getElementById("dia").classList.remove("highlight");
    document.getElementById("mes").classList.remove("highlight");
    document.getElementById("anio").classList.remove("highlight");
    }
}

function verificarInput(valor) {
    let esValido = true;
    const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKL MNOPQRSTUVWXYZ";
    let i = 0;
    while (i < valor.length && esValido) {
        if (!caracteresPermitidos.includes(valor[i])) {
            esValido = false;
        }
        i++;
    }
    return esValido;
}

function verificarEmail(email) {
    let esValido = true;
    let i = 0;
    let encontrado1 = false;
    let encontrado2 = false;
    let c = 0;
    const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.";
    const caracteresNoPermitidos = "&/'¿?%-&#!#+´´|";
    while(i < email.length && !encontrado1){
        if (!caracteresPermitidos.includes(email[i])) {
                esValido = false;
                encontrado1 = true;
        }
        i++;
    }
    while(c < email.length && !encontrado2){
        if (caracteresNoPermitidos.includes(email[c])) {
                esValido = false;
                encontrado2 = true;
        }
        c++;
    }
    if(esValido){
        if(email.includes("@hotmail") || email.includes("@gmail")){
            esValido = true;
        }
    }else if(email.includes(" ") || email.includes("|") || !email.includes("@")) {
        esValido = false;
    }
    return esValido;
}

