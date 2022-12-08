// La funcion flecha, nos da una sintaxis mas "limpia" y facil de leer

// Normalmente, se almacenan en constantes o en variables.
// En las funciones flecha, no existe el objeto this.
const saludar = () => {
  console.log("hola Mundo");
};

saludar();

// short arrow functions
// reglas de sintaxis en arrow functions
// Si mi funcion solo retorna un valor, puedo quitar el return explicito, las llaves y hacer usos del return implicito
const suma = (a, b) => a + b;
console.log(suma(3, 18));

// short arrow functions con un parametro
// Si tienes un solo parametro, le puedes quitar los parentesis
const saludar2 = (persona) => "Hola" + persona;
console.log(saludar2("Arturo"));
