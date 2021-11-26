const os = require('os');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

// Argumentos en la terminal
/*console.log(process.argv);

const [ , , arg3] = process.argv;
console.log(arg3);

const [ , base = 5] = arg3.split('=');
console.log(base);*/
// Fin argumentos en la terminal

crearArchivo(argv.b,argv.l,argv.h)
    .then( nomArchivo => console.log(nomArchivo, 'creado'))
    .catch( err => console.log(err));



// // console.log(os.homedir(),os.hostname(),os.platform());

// rm *.txt  