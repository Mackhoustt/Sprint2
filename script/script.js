
 const nombre= document.getElementById("nombre");
const email= document.getElementById("email");
const edad= document.getElementById("edad");
const form= document.getElementById("form");
const local= document.getElementById();
let entrar =true;
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

