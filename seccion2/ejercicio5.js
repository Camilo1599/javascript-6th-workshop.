function manejarAsincronia(callback, promise) {
  promise
    .then((resultado) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error, null);
    });
}

function miPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("La promesa se resolvio correctamente.");
    }, 5000);
  });
}
function miCallback(error, resultado) {
  if (error) {
    console.error("Ocurrio un error:", error);
  } else {
    console.log("Resultado de la promesa:", resultado);
  }
}

manejarAsincronia(miCallback, miPromesa());
