//async/await = espera el resultado de una promesa, no es neceario utilizar .then y.catch
async function funcionConPromesaYAwait() {
  let miPromesa = new Promise((resolver) => {
    resolver("Promesa con await");
  });

  console.log(await miPromesa);
}
funcionConPromesaYAwait();

//prueba mía
async function miFuncionConPromesa() {
  let miPromesa = new Promise(() => {
    console.log("saludos con promesa async await"); // es como si se llamara a resolver
  });

  console.log(await miPromesa);
}

miFuncionConPromesa();
