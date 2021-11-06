const $text = document.getElementById("que-es");

console.log($text.style);

let texto = "Cmbiando el texto con Js.";

$text.innerHTML = texto;

//RECORRIENDO EL DOM // DOM Traversing:

const $contenedor = document.querySelector(".container");
console.log($contenedor.children);
console.log($contenedor.children[1]);
console.log($contenedor.children[2]);
console.log($contenedor.firstElementChild);
console.log($contenedor.lastElementChild);
console.log($contenedor.previousElementSibling);
console.log($contenedor.nextElementSibling);
console.log($contenedor.childNodes);
console.log($contenedor.closest("article"));
console.log($contenedor.closest("body"));
console.log($contenedor.children[2].closest("section"));
