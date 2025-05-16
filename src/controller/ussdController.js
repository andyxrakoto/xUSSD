import menus from '../models/menuModel.js';

class UssdController {
  constructor(service) {
    this.service = service;
  }

  getMenuMessage() {
    const current = this.service.getCurrentMenu();
    const menu = menus[current];
    if (typeof menu.message === 'function') {
      return menu.message(this.service.getState());
    }
    return menu.message;
  }

  handleInput(input) {
    const current = this.service.getCurrentMenu();
    const menu = menus[current];
    input = input.trim();

    if (menu.input) {
      if (current === 'transfert') {
        this.service.setBeneficiaire(input);
        this.service.setCurrentMenu(menu.next);
        return { nextMenu: this.service.getCurrentMenu(), message: this.getMenuMessage() };
      }
      if (current === 'montant') {
        this.service.setMontant(input);
        this.service.setCurrentMenu(menu.next);
        return { nextMenu: this.service.getCurrentMenu(), message: this.getMenuMessage() };
      }
    } else if (menu.options[input]) {
      this.service.setCurrentMenu(menu.options[input]);
      if (this.service.getCurrentMenu() === 'exit') {
        return { exit: true };
      }
      return { nextMenu: this.service.getCurrentMenu(), message: this.getMenuMessage() };
    }
    return { error: "Option invalide, veuillez réessayer.", message: this.getMenuMessage() };
  }
}

export default UssdController;
