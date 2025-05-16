const menus = {
  main: {
    message: "Bienvenue sur Mvola simulé\n1. Solde\n2. Transfert\n3. Quitter",
    options: {
      1: "solde",
      2: "transfert",
      3: "exit",
    },
  },
  solde: {
    message: "Votre solde est de 5000 Ar\n0. Retour",
    options: {
      0: "main",
    },
  },
  transfert: {
    message: "Entrez le numéro du bénéficiaire:",
    input: true,
    next: "montant",
  },
  montant: {
    message: "Entrez le montant à transférer:",
    input: true,
    next: "confirmation",
  },
  confirmation: {
    message: (state) =>
      `Confirmez le transfert de ${state.montant} Ar vers ${state.beneficiaire} ? (oui/non)`,
    options: {
      oui: "fin",
      non: "main",
    },
  },
  fin: {
    message:
      "Transfert effectué avec succès !\nMerci d'avoir utilisé Mvola simulé.",
    options: {},
  },
};

export default menus;
