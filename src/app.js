import UssdService from "./services/ussdService.js";
import UssdController from "./controller/ussdController.js";
import InputReader from "./utils/inputReader.js";

const service = new UssdService();
const controller = new UssdController(service);

const inputReader = new InputReader((input) => {
  if (input.trim() === "#111#" && service.getCurrentMenu() === "main") {
    console.log(controller.getMenuMessage());
  } else {
    const result = controller.handleInput(input);
    if (result.exit) {
      console.log("Au revoir !");
      inputReader.close();
    } else if (result.error) {
      console.log(result.error);
      console.log(result.message);
    } else {
      console.log(result.message);
    }
  }
  inputReader.prompt();
});

console.log("Tapez #111# pour démarrer la simulation USSD Mvola.");
inputReader.prompt();
inputReader.prompt();
inputReader.prompt();
