/*
CLASE NÚMERO 1
--------------------------------------------------------------------------
ELEMENTOS, NODOS Y SELECTORES
*/

console.log(document.querySelector(".link-dom"));
console.log(document.querySelector("#id-selector"));
console.log(document.querySelector("h3"));

console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("figure"));
console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".cards")[1]);

console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu")[1]);

/*
CLASE NÚMERO 2
--------------------------------------------------------------------------
ATRIBUTOS Y DATA-ATRIBUTOS=ATRIBUTOS HECHOS POR NOSOTROS
*/

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
//LLAMAR POR PUNTO O POR GetAttribute
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

console.log(document.querySelector(".input"));
console.log(document.querySelector(".input").placeholder);
console.log(document.querySelector(".input").getAttribute("placeholder"));
console.log(document.querySelector(".input").type);
console.log(document.querySelector(".input").getAttribute("type"));
//La forma correcta es llamar por el metodo getAttribut para mejor notación.

// Estableciendo un nuevo valor a los atributos de nuestas etiquetas HTML.
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//El SetAttribute recibe el nombre del atributo LANG y el nuevo valor.
document.documentElement.setAttribute("lang", "es");
console.log(document.documentElement.lang);

//Se puede usar let pero USEMOS CONST para declarar todas las variables que necesitemos del DOM.
// Es una buena practica si nos la piden declarar nuestras variables que alvergaran elementos del dom
// colocarles una $ antes del name.

const $enlace = document.querySelector(".link-dom");

//Asi le añadimos un atributo a nuestras etiquetas html, se muestra en la consola el cambio pero en nuestra hoja html, no.
$enlace.setAttribute("target", "_blank");
$enlace.setAttribute("rel", "noopener");
$enlace.setAttribute("href", "https://www.instagram.com/aldana_1.8");

//Con esto removemos un atributo de algna etiqueta HTML.
$enlace.removeAttribute("class");
// $enlace.removeAttribute("href");
// $enlace.removeAttribute("rel");
// $enlace.removeAttribute("target");

//Con esto Validamos si la etiqueta tiene algun atributo a no.
console.log($enlace.hasAttribute("rel"));
console.log($enlace.hasAttribute("href"));

//Data-Attribute
console.log($enlace.getAttribute("data-description"));
console.log($enlace.setAttribute("data-description", "model"));
// console.log($enlace.removeAttribute("data-description"));
console.log($enlace.hasAttribute("data-description"));

//Con este metodo mostramos un mapa donde se alvergan los DATA-ATTRIBUTE del dom de esa etiqueta.
console.log($enlace.dataset);

//Ensayando Data-Attribute
const $section = document.getElementById("section");
console.log($section);
console.log($section.dataset);
$section.setAttribute("data-card", "holaa");
console.log($section.dataset);

//Asi cambiamos un atributo con el .

$section.dataset.card = "Lo cambiee?";
console.log($section.dataset);
console.log($section.hasAttribute("data-card"));
//Removiendo atributo
// $section.removeAttribute("data-card");
// console.log($section.hasAttribute("data-card"));

console.log(document.querySelectorAll("#menu")[1]);
//LIMPIA LA CONSOLA
console.clear();

const $menu = document.querySelector("#menu");
console.log($menu);
$menu.setAttribute("type", "text");
console.log($menu.hasAttribute("type"));
console.log($menu.dataset);
$menu.removeAttribute("type");
console.log($menu.hasAttribute("type"));

console.log(document.querySelectorAll(".query"[1]));
