const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, lista, numerador) => {

    let salida = '';

    for (let index = 1; index <= numerador; index++) {
        salida += `${base} X ${index} = ${base * index}\n`;
    }
    if (lista) {
        console.log('===================='.green);
        console.log(`   Tabla del ${colors.yellow(base)}`);
        console.log('===================='.cyan);
        console.log(salida);
    }

    try {

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        return error;
    }
    // console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearArchivo
};