//algotimo para hacer que el formulario tenga 3 requisitos necesarios
const nombre= document.getElementById("nombre");
const email= document.getElementById("email");
const edad= document.getElementById("edad");
const form= document.getElementById("form");
let entrar =true;
localStorage.setItem("nombre",JSON.stringify(nombre));

function aceptar(entrar){
  
if (nombre.value.length >0 &&  email.value.length >0 && edad.value.length>0){
   entrar= true;
 
}
else{
    alert("Faltan información")
}
while (entrar==true){
    return  location.href="pelijack.html";
   
   }
}

//un advenlistener que cumple la funcion: cuando el mouse salga del boton cambie su color
const local= document.getElementById("local");
local.addEventListener('mouseout',function(){
    local.style.background = 'cyan';
});



//localstorage que registra el nombre, correo y edad
function GuardarLocalStorage(){
    let persona = {
        nombre: nombre.value,
        email: email.value,
        edad: edad.value
    }
    localStorage.setItem("Persona",JSON.stringify(persona));
    alert("Se registro satisfactoriamente. *Por favor termina el formulario*")
}
