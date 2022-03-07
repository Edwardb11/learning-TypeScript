"use strict";
var saludo = "HolaMundo desde TypeScript";
saludo = "cambio";
var numero;
numero = 10;
var cualquiera;
cualquiera = "cadena";
cualquiera = 10;
var PI_NUMERO = 3.14;
function saludar() {
  console.log(saludo);
  console.log(numero);
  console.log(PI_NUMERO);
}
saludar();

// tsc -w
// para automatico compliar los  cambios
