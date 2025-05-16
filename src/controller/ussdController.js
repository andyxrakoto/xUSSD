import menuModel from "../models/menuModel.js";

function displayMenu() {
  console.log(menuModel.mainMenuText);
}

function handleInput(input) {
  if (input === "1") {
    console.log(menuModel.soldeText);
  } else if (input === "2") {
    console.log("Entrez le numéro du bénéficiaire:");
  } else if (input === "3") {
    console.log("Au revoir !");
    process.exit(0);
  } else {
    console.log("Option invalide, veuillez réessayer.");
  }
}

export default {
  displayMenu,
  handleInput,
};
