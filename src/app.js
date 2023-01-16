/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pintas = ["Corazones", "Picas", "Clubes", "Diamantes"];
const colores = {
  Corazones: "red",
  Picas: "black",
  Clubes: "black",
  Diamantes: "red"
};
const figuras = {
  Corazones: "♥",
  Picas: "♠",
  Clubes: "♣",
  Diamantes: "♦"
};
const numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let card = document.querySelector("#card");
let cardbody1 = document.querySelector("#cardbody1");
let cardbody2 = document.querySelector("#cardbody2");
let cardbody3 = document.querySelector("#cardbody3");
let altura = document.querySelector("#altura");
let ancho = document.querySelector("#ancho");

function cartaAleatoria(pintas, numeros) {
  let carta = {};
  carta.pinta = pintas[Math.floor(Math.random() * pintas.length)];
  carta.numero = numeros[Math.floor(Math.random() * numeros.length)];
  return carta;
}
function generacionCarta() {
  let { pinta, numero } = cartaAleatoria(pintas, numeros);
  const color = colores[pinta];
  const figura = figuras[pinta];
  cardbody1.innerHTML = figura;
  cardbody2.innerHTML = numero;
  cardbody3.innerHTML = figura;
  cardbody1.style.color = color;
  cardbody2.style.color = color;
  cardbody3.style.color = color;
}

window.onload = function() {
  generacionCarta();
  setInterval(() => {
    generacionCarta();
  }, 10000);
};
document.querySelector("#button").addEventListener("click", generacionCarta);
altura.addEventListener("keypress", validar);
ancho.addEventListener("keypress", validar);

function validar(event) {
  event.preventDefault();
}

document.querySelector("#buttonTamano").addEventListener("click", tamano);
function tamano() {
  let alturaValor = document.getElementById("altura").value;
  let anchoValor = document.getElementById("ancho").value;
  if (alturaValor !== "0" && anchoValor !== "0") {
    console.log("kkk");
    card.style.width = `${anchoValor}vh`;
    card.style.height = `${alturaValor}vh`;
  }
}
