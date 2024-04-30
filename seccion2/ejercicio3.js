function crearSumador(num) {
  alert("su numero es:" + num);
  function closure(n) {
    return n + num;
  }
  return closure;
}

let sumarCinco = crearSumador(5);
console.log("Valor inicial : 5");
console.log(sumarCinco(3));
console.log(sumarCinco(2));
console.log(sumarCinco(4));

sumarCinco = crearSumador(3);
console.log("Valor inicial : 3");
console.log(sumarCinco(3));
console.log(sumarCinco(2));
console.log(sumarCinco(4));
