//el constructor de la promesa toma una funcion que en este caso solo recibe el argumento resolver y no rechazar
//dentro de la funcion flecha (del cuerpo) se llama a la fx setTimeout
let promesa = new Promise((resolver) => {
  console.log("inicio promesa");
  //setTimeout recibe una fx de tipo callback
  setTimeout(() => resolver("saludos con promesa y timeout"), 3000);
  console.log("fin promesa");
});

promesa.then((valor) => console.log(valor));
