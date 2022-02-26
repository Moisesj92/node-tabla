const fs = require('fs');
const colors = require('colors');

// Promise

// const crearArchivo = (base = 5) => {


//     return new Promise( (resolve, reject) => {

//         console.log('=======================');
//         console.log(`Tabla del ${base}`);
//         console.log('=======================');
    
//         let salida = '';
    
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${ base * index }\n`;
    
//         }
    
//         console.log(salida);
    
//         fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
//             if (err) throw err;
//             console.log("archivo creado");
//         });  
        
//         resolve(`Tabla-${base}.txt`);

//     });


// };




// Asyn Await
const crearArchivo = async (base = 5, top = 10, list = false) => {

  try {
    let salida = '';
    for (let index = 1; index <= top; index++) {
      salida += `${base} x ${index} = ${ base * index }\n`;
    }

    if(list){
      console.log('======================='.green);
      console.log(`Tabla del ${base}`.blue);
      console.log('======================='.green);

      console.log(salida);
    }

    fs.writeFile(`./outputs/Tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
    });

    return `Tabla-${base}.txt`
  } catch (err) {
    throw err;
  }


};

module.exports = {
  crearArchivo
}