/**
 * Descripción
 * @method convertirUnidades de la función
 * @param {string} id
 * @param {string} valor
  */

function convertirUnidades(nombre,valor){

    if (valor.includes(",")){
        valor=valor.replace(",",".");
    }
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
        document.getElementById("metro").value = Math.round (metro*100)/100;
        document.getElementById("pulgada").value = Math.round(pulgada*100)/100;
        document.getElementById("yarda").value = yarda.toFixed(2);
        document.getElementById("pie").value = pie.toFixed(2);
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
        document.getElementById("radianes").value = rad;
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
document.getElementById("totalS").innerHTML= s1+s2;
}

let resta = () =>{
    const r1= Number(document.getElementById("numr1").value);
    const r2= Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML= r1-r2;}
let multiplicacion = () =>{
    const m1= Number(document.getElementById("numm1").value);
    const m2= Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML= m1*m2;}
let division = () =>{
    const d1= Number(document.getElementById("numd1").value);
    const d2= Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML= d1/d2;}

function  dibujarCirculoCuadrado(){
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const tamanio =200;
    const margen = 10;
    ctx.fillStyle="#2db0ff";
    ctx.fillRect(0+margen,alturaMax-tamanio-margen,tamanio,tamanio);


    ctx.fillStyle="#334422"
    ctx.arc(anchoMax/2,alturaMax/2, tamanio/2, 0,2*Math.PI,false)
    ctx.stroke();
    ctx.fill();

}

function CargarEventListener(){
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);
}

var bandera;

function dibujar(event){
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");

    const posX=event.clientX;
    const posY=event.clientY;
    console.log(posX,posY);
    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};
    if (bandera==true){
        ctx.fillRect(posX,posY,5,5);
    }
}

function borrarCanvas (){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    canvas.width=canvas.width;
}

function dibujarCuadriculado(){
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");
    const paso=20;
    const anchoMax=canvas.width;
    const alturaMax=canvas.height;
    ctx.strokeStyle ="blue";

    for(let i=paso;i<anchoMax;){
    ctx.beginPath();
    ctx.moveTo(i,0);
    ctx.lineTo(i,alturaMax);
    ctx.strokeStyle= "#2f9ec1"
    ctx.stroke();
    ctx.closePath();
    i+=paso;
    }
    for(let i=paso;i<alturaMax;){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle= "#2f9ec1" ;
        ctx.stroke();
        ctx.closePath();
        i+=paso;
    }

    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle= "#111111";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle= "#111111";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX, posY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    canvas.width = canvas.width;
    const img = new Image();
    img.src = "images/auto.png";
    if (posX<0 || posY<0 || posX>canvas.width || posY<0 || posY>canvas.height){
        mostrarDialog();
    }else{
    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, posX,posY);
    }}
}

let mostrarDialog = ()=> {
    const dialog =document.getElementById("mensajeDeError");
    dialog.showModal();
}
let cierreDialog = () =>{
    const dailog=document.getElementById("mensajeDeError");
    dialog.close();
}

function guardarLocalStorage(){
    let distancia, unidad;
    distancia=document.getElementById('distancia').value;
    unidad=document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS",distancia);
    localStorage.setItem("unidadLS",unidad);
    window.open('segundaWeb.html');
}
function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadLS");

    document.getElementById("dist").value =cant + " " +un;
}

x=0;
dx=2;
function animarAuto(){

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img,x,100);
    }

    if (x>canvas.width){
        x=0;
    }
    x+=dx;


}