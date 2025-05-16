import menus from "../models/menuModel.js";

let currentMenu = "main";
const state = {
  solde: 5000,
  historique: [],
};

const ussdService = {
  getCurrentMenu: () => currentMenu,
  setCurrentMenu: (menu) => {
    currentMenu = menu;
  },
  getState: () => state,
  setBeneficiaire: (numero) => {
    state.beneficiaire = numero;
  },
  setMontant: (montant) => {
    state.montant = montant;
  },
};

export default ussdService;
