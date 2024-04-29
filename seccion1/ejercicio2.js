let resp1, resp2, resp3, resp4, resp5;
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

alert(`// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`);

resp1 = prompt(
  "Con el codigo anterior que crees que pasara con el " +
    'console.log("Valor de a:", a);'
);
alert(
  "tu respuesta: " +
    resp1 +
    "\nRespuesta real: Este console.log imprimira el valor de 'a' como 'undefained' debido a que las variables creadas con var se pueden acceder antes de su declaracion por ende imprimira 1\n\n" +
    console.log("Valor de a:", a)
);
