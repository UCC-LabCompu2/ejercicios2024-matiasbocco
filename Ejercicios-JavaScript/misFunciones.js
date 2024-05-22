/**
 * Descripción
 * @method convertirUnidades de la función
 * @param {string} id
 * @param {string} valor
  */

function convertirUnidades(nombre,valor){
    if(isNaN(valor)){
        alert("El valor ingresado no es correcto");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";

    }else if(nombre==="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value=valor*3.28084;
        document.getElementById("yarda").value=valor*1.09361;}
    else if (nombre==="pulgada"){
        document.getElementById("metro").value = valor*0.0254;
        document.getElementById("pie").value=valor*0.0833;
        document.getElementById("yarda").value=valor*0.027777777777778;}
    else if (nombre==="pie"){
        document.getElementById("metro").value = valor*0.3048;
        document.getElementById("pulgada").value=valor*12;
        document.getElementById("yarda").value=valor*0.333333333;}
    else if (nombre==="yarda"){
        document.getElementById("metro").value = valor* 0.9144;
        document.getElementById("pulgada").value=valor*36;
        document.getElementById("pie").value=valor*3;}

    if (nombre==="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value=valor*3.28084;
        document.getElementById("yarda").value=valor*1.09361;}
    if (nombre==="pulgada"){
        document.getElementById("metro").value = valor*0.0254;
        document.getElementById("pie").value=valor*0.0833;
        document.getElementById("yarda").value=valor*0.027777777777778;}
    if (nombre==="pie"){
        document.getElementById("metro").value = valor*0.3048;
        document.getElementById("pulgada").value=valor*12;
        document.getElementById("yarda").value=valor*0.333333333;}
    if (nombre==="yarda"){
        document.getElementById("metro").value = valor* 0.9144;
        document.getElementById("pulgada").value=valor*36;
        document.getElementById("pie").value=valor*3;}
}

/**
 * Permite convertir grados a radianes y viceversa
 * @metod convertirGR
 * @param {string} id - grados - radianes
 */
function convertirGR(id){
    if (id=== "grados"){
        let grad = document.getElementById("grados").value;
        let rad = grad*Math.PI/180;
        document.getElementById("radiante").value = rad;
    }
    if (id=== "radianes"){
        let rad = document.getElementById("radianes").value;
        let grad = rad/Math.PI*180;
        document.getElementById("grados").value = grad;
    }
}