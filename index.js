// index.js
const { registrar, leer } = require('./operaciones');

// process.argv = [node, ruta/index.js, ...argumentos]
const [,, operacion, nombre, edad, animal, color, enfermedad] = process.argv;

if (operacion === 'registrar') {
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
console.log('Operación no válida. Usa:');
console.log('  node index.js registrar <nombre> "<edad>" <animal> <color> <enfermedad>');
console.log('  node index.js leer');
}
