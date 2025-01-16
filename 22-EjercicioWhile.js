let maximo = 5, numero = 1, acumuladorSuma = 0

//While
while(numero <= maximo){
console.log(numero)
acumuladorSuma += numero;
numero++
 }
 
console.log(acumuladorSuma)

//Do While
do {
  console.log(numero)
  acumuladorSuma += numero;
  numero++
  console.log(numero)
}
while(numero <= maximo);
console.log(acumuladorSuma)