const {crearArchivo} = require('./helpers/multiplicar');
const argv= require('yargs').argv;




console.clear();


console.log(process.argv);
console.log(argv);

console.log('Base: yargs', argv.base);




// const [,,arg3 = 'base = 5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 3;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(error => console.log(error));


