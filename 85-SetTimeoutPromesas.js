//el constructor de la promesa toma una funcion que en este caso solo recibe el argumento resolver y no rechazar
//dentro de la funcion flecha (del cuerpo) se llama a la fx setTimeout
let promesa = new Promise((resolver, rechazar) => {
  console.log("inicio promesa");
  let expresion = true;
  if (expresion) {
    //setTimeout(fx, tiempo)
    setTimeout(() => {
      return resolver("saludos con promesa y timeout");
    }, 3000);
    // setTimeout(() => resolver("saludos con promesa y timeout"), 3000);

    console.log("fin promesa");
  } else rechazar("se produjo un error");
});

promesa
  //.then(function(valor){console.log(valor)})
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
