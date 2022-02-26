
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs.js');


console.clear();

crearArchivo(argv.b, argv.t, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));
