/**
 * Descripción
 * @method convertirUnidades de la función
 * @param {string} id
 * @param {string} valor
  */

function convertirUnidades(nombre,valor){
    if(isNaN(valor)){
        alert("El valor ingresado no es correcto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";

    }else if(nombre==="metro"){
        metro=valor;
        pulgada = valor*39.3701;
        pie=valor*3.28084;
        yarda=valor*1.09361;}
    else if (nombre==="pulgada"){
        pulgada=valor;
        metro = valor*0.0254;
        pie=valor*0.0833;
        yarda=valor*0.027777777777778;}
    else if (nombre==="pie"){
        pie=valor;
        metro = valor*0.3048;
        pulgada=valor*12;
        yarda=valor*0.333333333;}
    else if (nombre==="yarda"){
        yarda=valor;
        metro = valor* 0.9144;
        pulgada=valor*36;
        pie=valor*3;}

    {
        document.getElementById("metro").value = metro;
        document.getElementById("pulgada").value = pulgada;
        document.getElementById("yarda").value = yarda;
        document.getElementById("pie").value = pie;
    }
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

let mostrar_ocultar = (valor) =>{
    if(valor==="val_mostrar"){
        document.getElementById("unDiv").style.display = 'block';
    } else if (valor==="val_ocultar"){
        document.getElementById("unDiv").style.display = 'none';
    }
}

let suma = () =>{
    const s1= Number(document.getElementById("nums1").value);
    const s2= Number(document.getElementById("nums2").value);
document.getElementById("totalS").value= s1+s2;
}

let resta = () =>{
    const r1= Number(document.getElementById("numr1").value);
    const r2= Number(document.getElementById("numr2").value);
    document.getElementById("totalR").value= r1-r2;}
let multiplicacion = () =>{
    const m1= Number(document.getElementById("numm1").value);
    const m2= Number(document.getElementById("numm2").value);
    document.getElementById("totalM").value= m1*m2;}
let division = () =>{
    const d1= Number(document.getElementById("numd1").value);
    const d2= Number(document.getElementById("numd2").value);
    document.getElementById("totalD").value= d1/d2;}