import {leerTeclado} from './util/entrada_teclado'
console.log(`Hola, bienvenido al menú`)
//creamos la variable función main que llamamos main
let main = async () => {
let respuesta: number
const selecciona = await leerTeclado(`Elije una opción (1-4)`)
respuesta = parseInt (selecciona)
switch (respuesta) 
{
case 1:
    console.log(`Has elegido la opción 1: SUMAR`) 
break;

case 2:
    console.log(`Has elegido la opción 2: RESTAR`) 
break;

case 3:
    console.log(`Has elegido la opción 3: MULTIPLICAR`) 
break;

case 4:
    console.log(`Has elegido la opción 4: DIVIDIR`) 
break;

default:
    console.log(`Esta opción no es posible`) ;
}
}
//invocamos a la función
main();