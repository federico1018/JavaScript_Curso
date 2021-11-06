const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animalas"),
  $section = document.querySelector("#section");

//
$img.setAttribute("src", "https://placeimg.com/250/250/animals");
$img.setAttribute("alt", "Animals");
//
$figcaption.appendChild($figcaptionText);
//
$figure.classList.add("card");
$figure.appendChild($img);
$figure.appendChild($figcaption);
//
$section.appendChild($figure);

//Integrando datos dinamicamente.
const estaciones = [
    "primavera",
    "otoño",
    "verano",
    "verano",
    "verano",
    "verano",
    "verano",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
    "invierno",
  ],
  $ul = document.createElement("ul"),
  $sec = document.querySelector(".dos");

document.write("<h3>Estaciones del año</h3>");
$sec.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});
