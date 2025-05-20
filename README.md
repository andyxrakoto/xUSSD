# 📱 Projet USSD Mvola (Simulation)

Ce projet est une simulation d’une application **USSD de type Mvola**, codée en **Node.js**.  
Il fonctionne en ligne de commande et permet d'effectuer :

- ✅ Consultation de solde
- ✅ Affichage de l'historique des 3 dernières transactions
- ✅ Transfert d'argent (le solde diminue)
- ✅ Achat d'offres (appels ou internet)
- ✅ Navigation par menu dynamique avec saisie utilisateur
- ✅ Timeout automatique (retour au menu principal après 10 secondes d’inactivité)

---

## 🚀 Fonctionnalités

### 🧭 Menu Principal

Bienvenue sur Mvola

Consultation de Solde

Transfert

Achat d'offre

Quitter



---

### 📌 1. Consultation de Solde

Propose deux sous-options :

Mon solde

Voir mes 3 dernières transactions

Retour



- Affiche le solde actuel.
- Affiche les 3 dernières transactions simulées.

---

### 💸 2. Transfert

Permet d’envoyer de l’argent à un autre numéro :

1. Demande **le montant à transférer**
2. Puis demande **le numéro du bénéficiaire**
3. Ensuite affiche la **confirmation**
4. Si l’utilisateur confirme, le **solde est diminué**
5. L’utilisateur est ensuite redirigé vers le **menu principal**

---

### 📶 3. Achat d’offre

Affiche une liste d’offres :

Pack Appel 1000 Ar

Internet 200 Mo 2000 Ar

Retour



- Si l’utilisateur achète une offre, le **montant est déduit du solde**
- Retourne ensuite au menu principal

---

### ⏱️ Timeout automatique

- Si l’utilisateur **n’entre rien pendant 10 secondes**, le menu est automatiquement réinitialisé.
- Cela simule un comportement **réel d’USSD mobile**.

---

## ⚙️ Architecture du projet

Le code est organisé en modules :

| Fichier                          | Rôle |
|----------------------------------|------|
| `src/app.js`                     | Lancement du programme principal |
| `src/utils/inputReader.js`       | Gère les entrées utilisateur et le timeout |
| `src/controllers/ussdController.js` | Logique centrale de navigation USSD |
| `src/services/ussdService.js`    | Gestion des données utilisateurs et de l’état du menu |
| `src/models/menuModel.js`        | Définition des menus et sous-menus |

---

## ▶️ Lancer l’application

```bash
node src/app.js
✅ Prérequis
Node.js v18 ou supérieur

Fichier package.json avec "type": "module"

Aucun package externe requis

📂 Exemple d'utilisation
plaintext
Copier
Modifier
Bienvenue sur Mvola
1. Consultation de Solde
2. Transfert
3. Achat d'offre
4. Quitter
> 2
Entrez le montant à transférer :
> 1000
Entrez le numéro du bénéficiaire :
> 0341234567
Confirmez le transfert de 1000 Ar vers 0341234567 ? (oui/non)
> oui
Transfert effectué avec succès !
Merci d'avoir utilisé Mvola simulé.
🧑‍💻 Auteur
Projet réalisé dans le cadre d'un exercice PROG5 - Simulation d'un système USSD
