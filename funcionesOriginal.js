function validar(){
    //elementos del form
    let inputValues = [];
    //inputs
    let diaNac = document.getElementById("dia");
    let mesNac = document.getElementById("mes");
    let anioNac = document.getElementById("anio");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let obraSocial = document.getElementById("obras_sociales");
    inputValues.push(diaNac, mesNac, anioNac, nombre, apellido, email, obraSocial);
    //obj fecha
    let fechaNacimiento = new Date(anioNac.value, mesNac.value, diaNac.value);
    const anio = fechaNacimiento.getFullYear();
    const anioBisiesto = (anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0);
    //verificacion de fecha
    switch (fechaNacimiento.getMonth()) {
        case 2:
            if(anioBisiesto && fechaNacimiento.getDate() > 29) {
                diaNac.classList.add("highlight");
                mesNac.classList.add("highlight");
                anioNac.classList.add("highlight");
                } else if(!anioBisiesto && fechaNacimiento.getDate() > 28) {
                    diaNac.classList.add("highlight");
                    mesNac.classList.add("highlight");
                    anioNac.classList.add("highlight");
                    }else{
                    mesNac.classList.remove("highlight");
                    }
                    break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        if((anioBisiesto && fechaNacimiento.getDate() > 30)) {
                        diaNac.classList.add("highlight");
                        mesNac.classList.add("highlight");
                        anioNac.classList.add("highlight");
                        }
                    break;   
                    default:
                        if((fechaNacimiento.getDate() <= 0 || fechaNacimiento.getDate() <= 0 || fechaNacimiento.getDate() <= 0)){
                            diaNac.classList.add("highlight");
                            mesNac.classList.add("highlight");
                            anioNac.classList.add("highlight");
                        }
                    break;
    }
    //chequeo si los inputs estan vacios
    let i = 0;
    let finalCheck = false;
    inputValues.forEach(input => {
        if(!input.value){
            input.classList.add("highlight");
        }else if(input.value){
            input.classList.remove("highlight");
            i++;
            if(i <= inputValues.length){
                finalCheck = true;
                }
                console.log(i);
                }
                });
                if(finalCheck){
                    alert("Enviado")
    }  
    console.log(inputValues.length)
}   
    // if(Number.isInteger(parseInt(nombre.value)) || Number.isInteger(parseInt(apellido.value))){
    //     nombre.classList.add("highlight");
    //     apellido.classList.add("highlight");
    // }
    // else if(nombre.value.includes("+") || nombre.value.includes("/") || nombre.value.includes("-") || nombre.value.includes("-")
    // || nombre.value.includes("{") || nombre.value.includes("}") || nombre.value.includes("~") || nombre.value.includes("´´")
    // ){
    //     nombre.classList.add("highlight");
    // }else if(apellido.value.includes("+") || apellido.value.includes("/") || apellido.value.includes("-") || apellido.value.includes("-") || apellido.value.includes("{") || apellido.value.includes("}") || apellido.value.includes("~") || apellido.value.includes("´´")){
    //         apellido.classList.add("highlight");
    // }    