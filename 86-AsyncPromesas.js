//async indica que una función regresa una promesa
async function miFuncionConPromesa() {
  return "saludos con promesa y async"; // es como si se llamara a resolver
}

miFuncionConPromesa().then((valor) => console.log(valor));
