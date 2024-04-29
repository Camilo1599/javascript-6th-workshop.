let flag = confirm(
  "Este es tu codigo\n" +
    'var globalVariable = "Soy una variable global.";\n\nfunction testScope() {\n\n  var functionVariable = "Soy una variable local.";\n\n  if (true) {\n\n    let blockVariable = "Soy una variable de bloque.";\n      }\n\n*console.log(globalVariable)\n\n  }\n\nel console.log con el * se podra ejecutar?'
);
if (flag == true) {
  alert(
    "correcto, se puede ejecutar porque las variables globales se pueden llamar desde ciualquier parte"
  );
} else {
  alert(
    "Incorrecto, pues al ser una variable global se puede acceder a ella desde cualquier parte del codigo"
  );
}

flag = confirm(
  "Este es tu codigo\n" +
    'var globalVariable = "Soy una variable global.";\n\nfunction testScope() {\n\n  var functionVariable = "Soy una variable local.";\n\n  if (true) {\n\n    let blockVariable = "Soy una variable de bloque.";\n      }\n\n*console.log(blockVariable)\n\n  }\n\nel console.log con el * se podra ejecutar?'
);
if (flag == true) {
  alert(
    "Incorrecto, pues es una variable de bloque la cual solo existe dentro de dicho bloque"
    
  );
} else {
  alert(
    "correcto, no se puede llamar la varibale por que dicha variable por que es una variable de bloque no existe por fuera de ese bloque"
  );
}

flag = confirm(
  "Este es tu codigo\n" +
    'var globalVariable = "Soy una variable global.";\n\nfunction testScope() {\n\n  var functionVariable = "Soy una variable local.";\n\n  if (true) {\n\n    let blockVariable = "Soy una variable de bloque.";\n      }\n\n  }\n\n*console.log(functionVariable)\n\nEl console.log con el * se podra ejecutar?'
);
if (flag == true) {
  alert(
    "incorrecto, esta variable solo existe dentro de la funcion por fuera no esta definida"
  );
} else {
  alert(
    "correcto, no se puede ejecutar por que pertenece solo al ambito de la funcion testScope"
  );
}
