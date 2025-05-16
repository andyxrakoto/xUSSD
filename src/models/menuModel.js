const menus = {
  main: {
    message:
      'Bienvenue sur Mvola\n1. Consultation de Solde\n2. Transfert\n3. Achat d\'offre\n4. Quitter',
    options: {
      1: 'soldeMenu',
      2: 'montant',        // on va d’abord demander le montant
      3: 'achatOffre',
      4: 'exit',
    },
  },

  soldeMenu: {
    message: '1. Mon solde\n2. Voir mes 3 dernières transactions\n0. Retour',
    options: { 1: 'solde', 2: 'historique', 0: 'main' },
  },

  solde: {
    message: state => `Votre solde est de ${state.solde} Ar\n0. Retour`,
    options: { 0: 'soldeMenu' },
  },

  historique: {
    message: state => {
      if (!state.historique.length) {
        return 'Aucune transaction récente.\n0. Retour';
      }
      const lines = state.historique
        .slice(-3)
        .reverse()
        .map((m, i) => `${i + 1}. -${m} Ar`);
      return `Dernières transactions :\n${lines.join('\n')}\n0. Retour`;
    },
    options: { 0: 'soldeMenu' },
  },

  montant: {
    message: 'Entrez le montant à transférer :',
    input: true,
    next: 'beneficiaire',
  },

  beneficiaire: {
    message: 'Entrez le numéro du bénéficiaire :',
    input: true,
    next: 'confirmation',
  },

  confirmation: {
    message: state =>
      `Confirmez le transfert de ${state.montant} Ar vers ${state.beneficiaire} ? (oui/non)`,
    options: { oui: 'executerTransfert', non: 'main' },
  },

  executerTransfert: {
    // La logique de mise à jour du solde et historique est ici
    message: state => {
      const montant = parseInt(state.montant, 10);
      state.solde -= montant;
      state.historique.push(montant);
      return `✅ Transfert de ${montant} Ar effectué !\nRetour au menu principal.`;
    },
    options: { 0: 'main' },
    next: 'main',
  },

  achatOffre: {
    message: '1. Forfait Appel – 500 Ar\n2. Forfait Internet – 1000 Ar\n0. Retour',
    options: { 1: 'achatAppel', 2: 'achatInternet', 0: 'main' },
  },

  achatAppel: {
    message: state =>
      state.solde >= 500
        ? ((state.solde -= 500),
          state.historique.push(500),
          'Forfait Appel activé !\n0. Retour')
        : 'Solde insuffisant.\n0. Retour',
    options: { 0: 'main' },
    next: 'main',
  },

  achatInternet: {
    message: state =>
      state.solde >= 1000
        ? ((state.solde -= 1000),
          state.historique.push(1000),
          'Forfait Internet activé !\n0. Retour')
        : 'Solde insuffisant.\n0. Retour',
    options: { 0: 'main' },
    next: 'main',
  },

  exit: {
    message: 'Merci et à bientôt !',
    options: {},
  },
};

export default menus;
