// la funcion flecha, nos da una sintaxis mas "limpia" y facil de leer.

const hola = (a,b,c) => a+b/c;
console.log(hola(1,2,3));

//funciones iife y anonimas
(function(hola,adios){
    console.log('soy anonima'+hola+adios);
})(" Juan"," pedro");

(()=>{
    console.log('soy anonima y arrow')
})();

//callbacks

function modales(mensaje,intro){
    console.log(intro);
    let m = mensaje(saludar);
    return m
}

function saludar()

//xhr.js - callbacks / fetch en promesas

"use strict";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

function getData(url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(JSON.parse(xhttp.responseText), null);
      } else {
        callback(null, "Algo salio mal intente mas tarde");
      }
    }
  };
  xhttp.send();
}

getData(url, (data, error) => {
  console.log(data, error);
});

// Promises



