const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta=5) => {
  /* //Promesas
  return new Promise((resolve, reject) => {
    console.log("================================");
    console.log(`Tabla del ${base}`);
    console.log("================================");
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    /* fs.writeFile(`tabla-${num}.txt`, salida, (err)=>{
        if(err) throw err;
        console.log("tabla.txt creado");
    }) */
  /*fs.writeFileSync(`tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt creado`);
  }); */

  //async-await

  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${"x"} ${i} ${"="} ${base * i} \n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
    }

    if (listar) {
      console.log("================================" .green);
      console.log(`Tabla del ${colors.blue(base)}`);
      console.log("================================" .green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt `;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
