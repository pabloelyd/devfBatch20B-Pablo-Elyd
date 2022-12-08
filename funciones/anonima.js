// Funciones anonimas autoejecutables//IIFE(Immediately invoked function expressions). Siempre llevan ;
(function () {
  return console.log("Soy anonima, mi pana...");
})();

(() => {
  return console.log("Soy anonima, mi pana... pero en arrow ;)");
})();

// iife con parametros
(function (a, b) {
  return console.log(a + b);
})(12, 78);

((a, b) => console.log(a + b))(2, 32);
