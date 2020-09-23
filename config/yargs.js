const { demand } = require('yargs');

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'

};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la DB', {
        descripcion
    })
    .command('listar', 'Lista los elementos de la DB', {
        completado: {
            alias: 'c',
            type: 'boolean',
            desc: 'Visualiza como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}