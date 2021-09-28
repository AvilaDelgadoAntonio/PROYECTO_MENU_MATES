"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_teclado_1 = require("./util/entrada_teclado");
console.log(`Hola, bienvenido al menú`);
//creamos la variable función main que llamamos main
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    let respuesta;
    const selecciona = yield (0, entrada_teclado_1.leerTeclado)(`Elije una opción (1-4)`);
    respuesta = parseInt(selecciona);
    switch (respuesta) {
        case 1:
            console.log(`Has elegido la opción 1: SUMAR`);
            break;
        case 2:
            console.log(`Has elegido la opción 2: RESTAR`);
            break;
        case 3:
            console.log(`Has elegido la opción 3: MULTIPLICAR`);
            break;
        case 4:
            console.log(`Has elegido la opción 4: DIVIDIR`);
            break;
        default:
            console.log(`Esta opción no es posible`);
    }
});
//invocamos a la función
main();
