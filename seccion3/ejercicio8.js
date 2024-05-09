let flag = false;

const miContador = crearContador();



while (flag == false){
    let option = prompt("ingrese \n1.para incrementar el contador\n2.Mostrar contador actual\n3.Para Salir")
    if(option == 1){
        miContador.incrementar();
    }
    else if(option == 3){
        alert("Gracias por usarnos")
        flag = true
    }
    else if(option == 2){
        miContador.valorActual();
    }
    else {
        alert("Porfavor ingrese una opcion valida")
    }
}

function crearContador() {
    let contador = 0;

    function incrementar() {
      contador++;
      alert("Contador actual:" + contador);
    }
  
    function valorActual() {
      alert("Contador actual:" + contador);
    }
  
    return {
      incrementar: incrementar,
      valorActual: valorActual
    };
  }

  

  