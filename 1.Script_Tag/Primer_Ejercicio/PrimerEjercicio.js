/*Aqui declaramos una constante que recibe/almacena una propiedad del objeto document
  con su ID el metodo para llamar por id es GetElement*/
const boton = document.getElementById("boton");

/*Aca le decimos que al hacer click al boton cuyo ID es boton, se activa una funcion
  pasandola por parametro la cual es Preguntar nombre*/
boton.addEventListener("click" , PreguntarNombre);

/*Declaramos 2 variables mas para usar en una funcion o otro espacio, estamos trayendo 2 textos
  del document, tambien tienen su ID */ 
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

/*Esta funcion es llamada al hacer click sobre el boton, se guarda un texto que el usuario escriba
  con el metodo del documento PROMPT en una variable llamada nombre, justo al darle aceptar se muestra 
  una funcion MOSTRARNOMBRE que recibe como parametro la variable nombre la cual tiene el texto que ingreso el usuario*/ 
function PreguntarNombre() {
  const nombre = window.prompt("cual es tu nombre")
  mostrarnombre(nombre);
}

/*Por ultimo esta funcion se llama despues de que el usuario digite su nombre, esta funcion recibe como parametro
  el nombre digitado y se pasa al H1 con un metodo TEXTContet que cambia el texto en el documento. Ya sea escrito
  dentro del codigo como lo muestra el HOLI o se cambia como valor de una variable de texto la cual es NOMBRE.*/ 
function mostrarnombre(nombre){
  h2.textContent = "Esté es tú nombre!"
  h1.textContent = nombre;
}



/*ESTRUCTURAS DE CONTROL IF/ELSE*/ 

let edad = window.prompt("Ingresa tú edad");

if(edad>=18 && edad<40){
  alert(`tú edad es ${edad}, si eres mayor de edad.`);
}
else if(edad>=40) {
  alert(`Tu edad es ${edad}, no puedes ingresar`)
  
}
else if(edad==null){
  alert(`No ingresaste nada`)
}
else if(edad<18){
  alert(`Eres menor de edad`)
}
else{alert(`Nada.`)};


/*OPERADOR TERNARY
  Primero se coloca la condicion, sin el if ni parentesis.
  despues del interrogante colocamos que pasa si es verdadero y separando
  con : dos puntos la parte falsa.
  
  IMPORTANTE con el operador ternario NO se pueden utilizar mas condiciones IF-ELSE
  Solo un if y un else.*/

let edad2 = 5;
edad2>=18 ? console.log("eres mayor de edad") : console.log("Eres menor de edad"); 


/*Mas corto*/ 
let edad3 = 52;
console.log(edad3>=50 ? "Estas viejo" : "Aun no te vas a morir")
  
