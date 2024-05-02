let text = `OBSERVA CON ATENCION EL CODIGO
Indice
1.  console.log("Inicio del script");

2.  setTimeout(() => {
        console.log("Primer setTimeout");
    }, 0);

3.  setTimeout(() => {
        console.log("Segundo setTimeout");
    }, 0);

4.  Promise.resolve("Promesa resuelta").then(console.log);

5.  console.log("Fin del script");

¿Cual sera el orden de ejecucion segun su indice?`

let order = prompt(text)
;

if (order == 1) {
  order = prompt(text + "!Muy Bien¡\nCual sera el siguiente bloque en ejecutarse\n2, 3, 4, 5,");
  if (order == 5) {
    order = prompt(text + "!Muy Bien¡\nCual sera el siguiente bloque en ejecutarse\n2, 3, 4");
    if (order == 4) {
      order = prompt(text + "!Muy Bien¡\nCual sera el siguiente bloque en ejecutarse\n2, 3");
      if (order == 2) {
        order = prompt(text + "!Muy Bien¡\nCual sera el siguiente bloque en ejecutarse\n 3");
        if (order == 3) {
          alert("Felicitaciones sabes como funciona el event loop");
        }
      } else if (order == 2 || order == 3) {
        alert(
          "Lo siento los setTimeout son macro tareas por lo cual no se ejecutan aun"
        );
      }
    } else if (order == 2 || order == 3) {
      alert(
        "Lo siento los setTimeout son macro tareas por lo cual no se ejecutan aun"
      );
    }
  } else if (order == 4) {
    alert(
      "Lo siento los setTimeout son macro tareas por lo cual no se ejecutan aun"
    );
  } else if (order == 2 || order == 3) {
    alert(
      "Lo siento los setTimeout son macro tareas por lo cual no se ejecutan aun"
    );
  }
} else if (order == 2 || order == 3) {
  alert(
    "Lo siento los setTimeout son macro tareas por lo cual no se ejecutan aun"
  );
} else if (order == 4) {
  alert(
    "Lo siento pero esta promesa es una microtarea por lo cual no se ejecutara aun"
  );
} else if (order == 5) {
  alert("Esta accion aun no se ejecutara por el orden del codigo");
} else {
  alert("Ingrese una opcion valida");
}
