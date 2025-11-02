// operaciones.js
const fs = require('fs');

const RUTA = './citas.json';

// Lee el JSON y devuelve el arreglo (si no existe, lo crea vacío)
function leerArchivo() {
    if (!fs.existsSync(RUTA)) {
    fs.writeFileSync(RUTA, '[]', 'utf8');
}
    const data = fs.readFileSync(RUTA, 'utf8');
    return JSON.parse(data);
}

// Sobrescribe el JSON con el arreglo actualizado
function escribirArchivo(citas) {
    fs.writeFileSync(RUTA, JSON.stringify(citas, null, 2), 'utf8');
}

// Agrega una nueva cita: nombre, edad, animal, color, enfermedad
function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = leerArchivo();

  // (Opcional) Validaciones mínimas
    if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log('Faltan argumentos: nombre, edad, animal, color, enfermedad');
    return;
}

const nuevaCita = { nombre, edad, animal, color, enfermedad };
citas.push(nuevaCita);
escribirArchivo(citas);

console.log('✅ Cita registrada con éxito:');
console.log(nuevaCita);
}

// Muestra por consola todas las citas registradas
function leer() {
const citas = leerArchivo();
if (citas.length === 0) {
    console.log('No hay citas registradas.');
    return;
}
console.log('📋 Citas registradas:');
citas.forEach((cita, i) => {
    console.log(`${i + 1}. ${cita.nombre} | ${cita.edad} | ${cita.animal} | ${cita.color} | ${cita.enfermedad}`);
});
}

module.exports = { registrar, leer };
