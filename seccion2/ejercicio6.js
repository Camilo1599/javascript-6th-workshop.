console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
  console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);
setTimeout(() => {
  console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
//R/ por que el codigo general se sigue ejecutando mientras el mensaje 2 es pasdo a las colas de event loop

//¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
// nos demuestra que las tareas asincronas las envia a una cola de ejecucion diferente mientras se cumplen los requisitos de ejecucion