//Sentencia Switch
//Sintaxis

//switch (valor_a_evaluar) {
//case1:
// ----
// break;
//case2:
// ----
// break;
//default:
// ----
//}


// Dia de la semana (switch)
let diaSemana = "uno";
switch(diaSemana){
    case "uno": // diaSemana == 1
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log(`Dia semana erroneo ${diaSemana}`);
        break; //no es necesario
}