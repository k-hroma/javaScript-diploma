//La funcion setTimeout manda llamar a la funcion callback luego de cierto tiempo
function miFuncionCallback() {
  console.log("saludo asíncrono después de 3 seg");
}
//cuando la funcion pasa como parámetro, pasa sin los paréntesis
setTimeout(miFuncionCallback, 3000); //después de 3 seg

//también se puede pasar una funcion directamente
setTimeout(function () {
  console.log("saludo asíncrono 2");
}, 4000);

// también se puede pasar una funcion flecha
setTimeout(
  (mensaje, mensaje2) => {
    console.log(
      `primer argumento: ${mensaje}`,
      `segundoargumento: ${mensaje2}`
    );
  },
  1000,
  "hola",
  "saludos con argumentos despues de 1 segundo"
);

setTimeout(
  (mensaje) => {
    console.log(mensaje);
  },
  1000,
  "saludo asíncrono con argumento"
);
