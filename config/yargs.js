const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs').command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar dato mediante la descripción', { descripcion }).help().argv;

module.exports = {
    argv
}