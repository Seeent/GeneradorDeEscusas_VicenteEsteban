/* eslint-disable */
import "bootstrap";
import "./styles.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generadorExcusas();
  });

  console.log("Hello baby");
};

let generadorExcusas = () => {
  let quien = [
    "Harry Potter",
    "Albus Dumbledore",
    "Dobby",
    "Severus Snape",
    "El sombrero seleccionador",
    "Neville Longbottom",
    "Luna Lovegood",
    "Remus Lupin",
    "Lucius Malfoy",
    "Arthur Weasley",
    "Fred Weasley",
    "George Weasley",
    "Ginny Weasley",
    "Molly Weasley",
    "Percy Weasley",
    "Harry Potter",
    "Ron Weasley",
    "Hermione Granger",
    "Lord Voldemort",
    "Albus Dumbledore",
    "Severus Snape",
    "Rubeus Hagrid",
    "Minerva McGonagall",
    "Draco Malfoy",
    "Sirius Black",
    "Jorge"
  ];
  let accion = [
    " comió",
    " cagó",
    " enfadó",
    " durmió",
    " pescó",
    " cocinó",
    " arañó",
    " meó",
    " sedó",
    " arrancó",
    " cogió",
    " ligó en",
    " besó",
    " lamió",
    " cantó",
    " peleó",
    " saltó",
    " se jugó",
    " estudió",
    " vendió"
  ];
  let cosas = [
    " la mosca",
    " los gamusinos",
    " los caracoles",
    " los calcetines",
    " el boli",
    " la varita",
    " la botella",
    " la escoba bailarina",
    " el pato de goma",
    " el traslador",
    " la tecla",
    " el mechero",
    " el raton",
    " el cigarro",
    " el mando",
    " el movil",
    " la lampara",
    " el moco",
    " el pelo",
    " la cama",
    " las hojas",
    " los anteojos",
    " la puerta",
    " el pantalón",
    " el cuchillo",
    " la rueda",
    " el teclado",
    " la estrella",
    " el martillo",
    " las lentejas",
    " el cinturón",
    " el calor",
    " el agua",
    " la herramienta",
    " el libro",
    " la pestaña",
    " el tenedor",
    " el mensaje",
    " el moño",
    " las lentes",
    " la ensalada",
    " el perro",
    " los caramelos",
    " la guitarra",
    " la mano",
    " la explosión",
    " la lluvia",
    " el ave",
    " el taladro",
    " el metal",
    " el reloj",
    " la flor",
    " el tornillo",
    " el monitor",
    " el plástico",
    " el edificio",
    " la tristeza",
    " el sonido",
    " el césped",
    " el teléfono"
  ];
  let donde = [
    " en la academia Mágica Beauxbatons",
    " en el andén 9 ¾",
    " en Azkaban",
    " en el callejón Diagon",
    " en artículos de Calidad para Quidditch",
    " en el Caldero Chorreante",
    " en Emporio de la Lechuza",
    " en Flourish y Blotts",
    " en Gambol & Japes",
    " en Gringotts",
    " en la Heladería Florean Fortescue",
    " en el boticario Slug & Jigger",
    " en Madame Malkin Túnicas para todas las ocasiones",
    " en la tienda de Varitas Ollivanders",
    " en Sortilegios Weasley",
    " en Terrortours",
    " en la tienda de Animales Mágicos",
    " en la tienda de calderos",
    " en la tienda para pergaminos, plumas y tinta",
    " en la tienda de trastos de segunda mano",
    " en la tienda de Túnicas de Segunda Mano",
    " en Twilfitt y Tatting",
    " en Obscurus Books",
    " en Whizz Hard Books",
    " en el Callejón Knockturn",
    " en Borgin y Burkes",
    " en el Colegio Hogwarts de Magia y Hechicería",
    " en la Cámara de los secretos",
    " en el Bosque Prohibido",
    " en el lago Negro",
    " en el Gran Comedor",
    " en la sala de los Menesteres",
    " en el instituto Durmstrang",
    " en el número 12 de Grimmauld Place",
    " en el Hospital San Mungo de Enfermedades y Heridas Mágicas",
    " en la Madriguera",
    " en el pequeño Hangleton",
    " en la Mansión de los Malfoy",
    " en la Mansión de los Riddle",
    " en el Ministerio de Magia",
    " en Hogsmeade",
    " en el Salón de Té de Madame Pudipié",
    " en la Cabeza de Puerco",
    " en Honeydukes",
    " en las tres Escobas",
    " en Zonko",
    " en la casa de los Gritos",
    " en Nurmengard",
    " en el número 4 de Privet Drive",
    " en el valle de Godric"
  ];
  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let cosasIndex = Math.floor(Math.random() * cosas.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);
  return (
    quien[quienIndex] +
    "" +
    accion[accionIndex] +
    "" +
    cosas[cosasIndex] +
    "" +
    donde[dondeIndex]
  );
};
