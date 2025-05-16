class UssdService {
  constructor() {
    this.state = {
      currentMenu: "main",
      beneficiaire: "",
      montant: "",
    };
  }

  getCurrentMenu() {
    return this.state.currentMenu;
  }

  setCurrentMenu(menuKey) {
    this.state.currentMenu = menuKey;
  }

  setBeneficiaire(num) {
    this.state.beneficiaire = num;
  }

  setMontant(montant) {
    this.state.montant = montant;
  }

  getState() {
    return this.state;
  }
}

export default UssdService;
