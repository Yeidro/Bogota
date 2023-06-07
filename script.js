const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnUbicación(){
    const textolocalidad = Ubicación(inputTexto.value)
    mensaje.value = textolocalidad;
    /*mensaje.style.backgroundImage = "none"*/
    inputTexto.value = "" 
}

function Ubicación(stringLocalidad){

    var matrizCodigo = [["suba","Norte de la ciudad-------Técnicos: Jhon Abril"],
    ["usaquen","Norte de la ciudad"],
    ["engativa","Noroccidente de la ciudad-------Técnicos: Leonardo Valenzuela, Diego Alba, Felipe Diaz, Javier Mendivelso, Nestor Colmenares"],
    ["barrios unidos","Norte de la ciudad"],["chapinero","Norte de la ciudad"],
    ["teusaquillo","Centro de la ciudad"],["fontibon","Occidente de la ciudad"],["la candelaria","Centro de la ciudad"],["santa fe","Centro de la ciudad"],
    ["puente aranda","Centro de la ciudad"],
    ["martires","Centro de la ciudad"],["kenedy","Suroccidente de la ciudad"],
    ["bosa","Suroccidente de la ciudad"],["tunjuelito","Sur de la ciudad"],
    ["ciudad bolivar","Sur de la ciudad-------Técnicos: Juan David"],["antonio nariño","Sur de la ciudad"],["rafael uribe u","Sur de la ciudad"],
    ["san cristobal","Suroriente de la ciudad-------Técnicos: Yeison Buitrago"],["usme","Suroriente de la ciudad"],
    ["sumapaz","Suroriente de la ciudad"]];
    stringLocalidad = stringLocalidad
    
    
    for(var i = 0; i < matrizCodigo.length; i++ ){

        if(stringLocalidad.includes(matrizCodigo[i][0])){
            stringLocalidad = stringLocalidad.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            
        } 
    }
    return stringLocalidad;
}