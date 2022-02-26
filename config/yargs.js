const { argv } = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'is the number of de table'
  }).option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'show you the calculation'
  }).option('t', {
    alias: 'top',
    type:'number',
    demandOption: false,
    default: 10,
    describe: 'Is the limit of the table'
  }).check((argv, options) => {
    if( isNaN( argv.b ) ){
      throw 'La base tiene que ser un numero'
    }
    return true
  });

module.exports = argv;