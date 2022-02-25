const argv = require("yargs")
  .option("b", {
    alias: "base",//nombre del alias
    type: "number",//tipo de archivo
    demandOption: true, //si la persona no me manda nada
    describe: "Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",//nombre del alias
    type: "boolean",//tipo de archivo
    demandOption: true, //Indica a yargs que es requerido el valor de la variable
    default: false,//valor por defecto de la variable
    describe: "Muestra la tabla en consola"//describe el atajo en consola
  })
  .option("h", {
    alias: "hasta",
    type:"number",
    describe: "Muestra la tabla hasta un valor definido por el usuario"
})
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }

    if (argv.l === undefined) {
      throw "Inserte true o false";
    }

    return true;
  }).argv;

  module.exports = argv;