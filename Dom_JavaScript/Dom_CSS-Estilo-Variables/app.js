//CLASE NÚMERO 3.
const $enlace = document.querySelector(".link-dom");
//Asi podemos ver que estilos css tiene nuestra etiqueta html, PERO SOLO LOS ESTILOS EN LINEA.
console.log($enlace.style);
console.log($enlace.getAttribute("style"));
console.log($enlace.style.color);
console.log($enlace.style.backgroundColor);
console.log($enlace.style.border);
console.log($enlace.style.textDecoration);

//Otra forma de ver los estilos pero con getComputedStyle, Creo que se ve muy vervoso, mejor llamar a el metodo Style.
//El mapa muestra el valor por defecto que tiene esa etiqueta HTML, solo que no se muestra en .Style.
//Claro se ve que varias de las propiedades tienen un valor de auton o none.
console.log(getComputedStyle($enlace));

//Asi miramos a travez del mapa getComputedStyle una propiedad en especifia.
console.log(getComputedStyle($enlace).getPropertyValue("border"));

//ACA COLOCAMOS CSS CON JS, HAY VARIAS MANERAS DE AGREGAR, VAMOS A VERLAS.
//Sintaxis normal nada de Uppercase como es una cadena de tecto pues se usa-.
$enlace.style.setProperty("width", "50%");
$enlace.style.setProperty("height", "80px");
$enlace.style.setProperty("background-color", "gold");

//Otra forma de añadir css desde Js.
$enlace.style.backgroundColor = "blue";
$enlace.style.boxShadow = "-15px -15px 15px orange";
$enlace.style.borderRadius = "15rem";
console.log($enlace.style);
console.log($enlace.getAttribute("style"));
console.log(getComputedStyle($enlace));

//

//

//Variables CSS -- Custom Properties.

//Asi extraemos la etiqueta HTML
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue;
