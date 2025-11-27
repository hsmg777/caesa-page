const { exec } = require('child_process');

const port = 19133;

console.log("Iniciando en el puerto:", port);

exec(`node ./node_modules/serve/build/main.js -s dist -l ${port}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Servidor iniciado:\n${stdout}`);
});
