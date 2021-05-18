
const nombre= document.getElementById("nombre");
const email= document.getElementById("email");
const edad= document.getElementById("edad");
const form= document.getElementById("form");
const local= document.getElementById("local");
let entrar = true;
function aceptar(){
   
if (nombre.value.length >0 &&  email.value.length >0){
 local=location.href="pelijack.html";
}

}

