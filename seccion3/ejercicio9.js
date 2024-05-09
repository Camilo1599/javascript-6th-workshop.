function esperarYMostrarMensaje(segundos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("¡Mensaje mostrado después de " + segundos + " segundos!");
      }, segundos * 1000);
    });
  }
  
  function cargarDatos(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos: ' + response.statusText);
        }
        return response.json();
      });
  }
  
  function mostrarDatos() {
    cargarDatos('https://jsonplaceholder.typicode.com/posts')
      .then(data => {
        console.log("Datos cargados exitosamente:");
        console.log(data);
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error);
      });
  }
  
  // Solicitar al usuario que ingrese el tiempo en segundos
  const segundos = parseInt(prompt("Ingresa la cantidad de segundos para esperar:"));
  
  if (isNaN(segundos) || segundos <= 0) {
    console.error("Por favor, ingresa un número válido de segundos mayor que cero.");
  } else {
    esperarYMostrarMensaje(segundos)
      .then(mensaje => {
        console.log(mensaje);
        console.log("Cargando datos...");
        mostrarDatos();
      })
      .catch(error => {
        console.error("Error al esperar y mostrar el mensaje:", error);
      });
  }
  