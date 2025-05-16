// src/app.js
import controller from '../src/controller/ussdController.js';
import createInputReader from './utils/inputReader.js';

function onInput(line) {
  const resp = controller.handleInput(line);

  if (resp.exit) {
    console.log('Au revoir !');
    inputReader.close();
    return;
  }

  if (resp.error) {
    console.log(resp.error);
  }

  console.log(resp.message);
  inputReader.prompt();
}

function onTimeout() {
  // on utilise maintenant la méthode reset() du controller
  controller.reset();
  console.log(controller.getMenuMessage());
  inputReader.prompt();
}

const inputReader = createInputReader(onInput, onTimeout);

// lancement initial
console.log(controller.getMenuMessage());
inputReader.prompt();
