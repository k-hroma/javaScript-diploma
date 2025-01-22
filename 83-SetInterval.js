//la funcion SetInterval manda llamar a la funcion callback varias veces cada cierto tiempo
let reloj = () => {
  let fecha = new Date();
  console.log(
    `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

setInterval(reloj, 1000); //1 seg
