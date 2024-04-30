console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/*¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
R/ al llamar las funciones antes de su declaracion las funciones declaradas pusieron retornar su mensaje sin problema mientras que las funciones expresadas no pudieron correrse y se producia un error */

/*¿Cómo difieren los resultados entre la función declarada y la función expresada?
R/ principalmente en es las funciones expresadas solo funcionan cuando se llaman despues de su declaracion*/

/*¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
R/ java scrip inicializa y declara funciones y variables en diferentes tiempos ssiempre y cuando las funciones sean declaradas cuando las funciones son expresadas javascrip la inicializa al tiempo de declaracion*/
