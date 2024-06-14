function validar(){
    //elementos del form
    //inputs
    const inputValues = [];
    let diaNac = document.getElementById("dia");
    let mesNac = document.getElementById("mes");
    let anioNac = document.getElementById("anio");
    inputValues.push(document.getElementById("nombre"), document.getElementById("apellido"), document.getElementById("email"), document.getElementById("obras_sociales"));
    //obj fecha
    let fechaNacimiento = new Date(null, null, null);

    fechaNacimiento.setDate(diaNac.value)
    fechaNacimiento.setMonth(mesNac.value)
    fechaNacimiento.setFullYear(anioNac.value)

    //validacion de fecha de nacimiento
    const anio = fechaNacimiento.getFullYear();
    const anioBisiesto = (anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0);
    const fechaNegativa = diaNac.value <= 0 || mesNac.value <= 0 || anioNac.value <= 0
    const inputFechaLlenado = fechaNacimiento.getDate() && fechaNacimiento.getMonth() && fechaNacimiento.getFullYear();
    if(!fechaNegativa && inputFechaLlenado && fechaNacimiento.getDate() > 1 && fechaNacimiento.getMonth() > 1 && fechaNacimiento.getFullYear() > 1){
        if([4, 6, 9, 11].includes(fechaNacimiento.getMonth()) && !anioBisiesto && fechaNacimiento.getDate() >= 31){
            highlightManager("add");
        }
        else if(fechaNacimiento.getMonth() == 2 && (anioBisiesto && fechaNacimiento.getDate() > 29) || (fechaNacimiento.getMonth() == 2 && !anioBisiesto && fechaNacimiento.getDate() > 28)){
            highlightManager("add");
        }
        else{
            highlightManager("remove");
        }
    }else{
        if(fechaNegativa){
            highlightManager("add")
        }else{
            highlightManager("remove")
        }
    }
    let i = 0;
    let formNoTerminado = true;
    console.log(fechaNacimiento);
    while ((i < inputValues.length && formNoTerminado)) {
        if(!inputValues[i].value){
            console.log("if");
            inputValues[i].classList.add("highlight");
        }
        else{
            console.log("else");
            highlightManager("remove")
            inputValues[i].classList.remove("highlight");
            formNoTerminado = false;
        }
        i++;
    }
}   

function highlightManager(instruccion){
    if(instruccion == "add"){
        document.getElementById("dia").classList.add("highlight");
        document.getElementById("mes").classList.add("highlight");
        document.getElementById("anio").classList.add("highlight");
    }
    else{
        document.getElementById("dia").classList.remove("highlight");
        document.getElementById("mes").classList.remove("highlight");
        document.getElementById("anio").classList.remove("highlight");
    }
}


