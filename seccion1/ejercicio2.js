let resp1, resp2, resp3, resp4;
// vars call
console.log("Valor de a:", a);

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

resp1 = prompt(
  `OBSERVA DETENIDAMENTE ESTE CODIGO\n
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
};\n\n` +
    "Que imprimira en consola el :" +
    'console.log("Valor de a:", a)?'
);

alert(
  "tu respuesta: " +
    resp1 +
    "\nRespuesta real: Este console.log imprimira el valor de 'a' como 'undefained' debido a que las variables creadas con var se pueden acceder antes de su declaracion\n\n"
);

resp2 = prompt(
  `OBSERVA DETENIDAMENTE ESTE CODIGO\n
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
};\n\n` +
    "Que imprimira en consola el :" +
    'console.log("Valor de b:", b)?'
);

alert(
  "tu respuesta: " +
    resp2 +
    "\nRespuesta real: Este console.log no imprimira nada debido a que las variables creadas con 'let' no son accesibles antes de declararlas lo mismo pasa con el" +
    'console.log("Valor de c:", c)' +
    " y se mostrara el error:  can't access lexical declaration 'b' before initialization "
);

resp3 = prompt(
  `OBSERVA DETENIDAMENTE ESTE CODIGO\n
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
};\n\n` +
    "Que imprimira en consola el :" +
    'console.log("Resultado de funcionDeclarada:", funcionDeclarada())?'
);

alert(
  "tu respuesta: " +
    resp3 +
    "\nRespuesta real: Este console.log imprimira: \n" +
    console.log("Resultado de funcionDeclarada:", funcionDeclarada()) +
    " ya que las funciones declaradas se puedes acceder independiente de donde fue escrita"
);

resp4 = prompt(
  `OBSERVA DETENIDAMENTE ESTE CODIGO\n
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
};\n\n` +
    "Que imprimira en consola el :" +
    'console.log("Resultado de funcionExpresada:", funcionExpresada())?'
);

alert(
  "tu respuesta: " +
    resp4 +
    "\nRespuesta real: Este console.log no podra imprimir nada ya que las funciones expresada se deben escribir arriba de su llamado\n\n" +
    "aparecera el error: can't access lexical declaration 'funcionExpresada' before initialization "
);
