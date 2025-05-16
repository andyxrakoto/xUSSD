import menus from '../models/menuModel.js';
import ussdService from '../services/ussdService.js';

class UssdController {
  constructor(service) {
    this.service = service;
  }

  getMenuMessage() {
    const cm = this.service.getCurrentMenu();
    const menu = menus[cm];
    return typeof menu.message === 'function'
      ? menu.message(this.service.getState())
      : menu.message;
  }

  handleInput(input) {
    const current = this.service.getCurrentMenu();
    const menu = menus[current];
    input = input.trim();

    // 1) Si on est sur un menu à saisie (montant ou bénéficiaire)
    if (menu.input) {
      if (current === 'montant') {
        this.service.setMontant(input);
      } else if (current === 'beneficiaire') {
        this.service.setBeneficiaire(input);
      }
      // on suit le next de ce menu-là
      this.service.setCurrentMenu(menu.next);
      return { message: this.getMenuMessage() };
    }

    // 2) Sinon, c'est un choix dans options : on passe juste à nextMenu
    if (menu.options && menu.options[input] !== undefined) {
      const next = menu.options[input];
      this.service.setCurrentMenu(next);

      // si c'est la sortie, on quitte
      if (next === 'exit') {
        return { exit: true };
      }

      // on ne suit PAS automatiquement le .next de ce menu-là
      return { message: this.getMenuMessage() };
    }

    // 3) Choix invalide
    return {
      error: 'Option invalide, veuillez réessayer.',
      message: this.getMenuMessage(),
    };
  }

  reset() {
    this.service.setCurrentMenu('main');
  }
}

export default new UssdController(ussdService);
