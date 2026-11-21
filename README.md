# FinNeo — Gestion de patrimoine personnelle

Application web et mobile de gestion, de suivi et d'analyse du patrimoine personnel. L'objectif est de disposer d'une vue consolidée, fiable et à jour de ses comptes bancaires, liquidités, investissements, biens, crédits, dettes et évolution du patrimoine net.

> Projet personnel évolutif. Les chiffres affichés doivent être traçables, datés et distinguer les données synchronisées, saisies manuellement et estimées.

## Objectifs

- Centraliser les actifs, passifs, comptes, placements, crédits et biens immobiliers.
- Visualiser le patrimoine net, sa répartition et son évolution historique.
- Suivre les mouvements, revenus, dépenses, échéances, remboursements et performances.
- Connecter, lorsque cela est possible et autorisé, les banques et plateformes d'investissement par API ou via un fournisseur d'agrégation réglementé.
- Accéder à l'application depuis le web et les appareils mobiles, avec une expérience responsive/PWA.
- Utiliser une connexion par compte utilisateur et prévoir dès la conception la possibilité d'avoir plusieurs utilisateurs/comptes indépendants.
- Héberger l'application sur une plateforme de déploiement web telle que Vercel (ou une solution équivalente) afin qu'elle soit accessible en ligne à tout moment, depuis n'importe quel appareil autorisé.

## Fonctionnalités envisagées

### Tableau de bord
- Patrimoine net total : actifs moins passifs.
- Synthèse des liquidités, placements, immobilier, autres actifs et dettes.
- Historique et graphiques d'évolution (valeurs, variation, allocation).
- Indicateurs avec date de dernière actualisation et état de synchronisation.
- Vue des échéances à venir et alertes utiles.

### Comptes et liquidités
- Comptes courants, comptes joints, livrets et comptes d'épargne.
- Plusieurs établissements et plusieurs comptes par établissement.
- Soldes, transactions, catégories et historique.
- Saisie manuelle possible en complément des connexions automatisées.

### Investissements
- Comptes-titres, ETF, actions, fonds, obligations, actifs non cotés et autres actifs d'investissement.
- Quantités, prix, valorisation, devise, coût d'acquisition, gains/pertes et allocation.
- Historique des opérations et valorisations.
- Cotations et données de marché via des fournisseurs autorisés, avec indication de la date/heure et de la fraîcheur des données.
- Ne pas confondre performance calculée, variation de valorisation et flux de versements/retraits.

### Immobilier et autres actifs
- Biens immobiliers, valeur estimée, date et méthode d'estimation.
- Prix d'achat, frais, éventuels revenus locatifs et dépenses associés.
- Autres actifs : véhicules, objets de valeur ou actifs personnalisés, si activés.

### Crédits et passifs
- Prêts immobiliers, prêts travaux, prêts automobiles, crédits et autres dettes.
- Capital restant dû, taux, mensualité, échéance, durée, assurance et échéancier.
- Historique du remboursement et projections, en distinguant les données contractuelles des estimations.

### Transactions et budget (évolutif)
- Liste des transactions, recherche, filtres, catégories et règles de catégorisation.
- Revenus, dépenses, transferts et opérations d'investissement.
- Budgets mensuels facultatifs et indicateurs de flux de trésorerie.

### Connexions externes
- Connexion aux banques et établissements de paiement par Open Banking/PSD2 ou fournisseur d'agrégation adapté au marché européen.
- Connexion aux plateformes d'investissement et courtiers uniquement si une API officielle, autorisée et suffisamment fiable existe.
- Gestion des consentements, expiration, renouvellement, révocation, erreurs et reconnexion.
- Synchronisation périodique et/ou déclenchée par l'utilisateur, selon les capacités et limites du fournisseur.
- Ne jamais promettre un temps réel absolu : afficher la dernière synchronisation et tenir compte des délais, restrictions et disponibilités des fournisseurs.
- Prévoir une interface d'adaptateurs pour ne pas dépendre d'un seul fournisseur.
- Ne jamais collecter ni stocker les mots de passe bancaires. Utiliser les parcours d'autorisation sécurisés du fournisseur.

## Utilisateurs, comptes et authentification

- Authentification sécurisée (création de compte, connexion, déconnexion, récupération de compte et vérification de l'adresse e-mail selon la solution retenue).
- Prévoir plusieurs utilisateurs dès le modèle de données, même si le premier déploiement est à usage personnel.
- Isolation stricte des données : chaque utilisateur ne peut consulter ni modifier les données d'un autre.
- Prévoir, si pertinent, des espaces patrimoniaux (personnel, conjoint, foyer) et des partages explicites, sans partage par défaut.
- Gestion des sessions, révocation, protections contre les attaques courantes et options MFA lorsque disponibles.

## Plateformes et expérience

- Application web responsive, pensée mobile en priorité pour les usages fréquents.
- PWA installable si cela apporte une expérience pertinente : icône, écran d'accueil, navigation et fonctionnalités adaptées.
- Interface claire, sobre, accessible, avec navigation cohérente sur mobile et desktop.
- Langue initiale : français. Devise principale : EUR, avec support potentiel multi-devises.
- États de chargement, erreurs, données indisponibles, données obsolètes et écrans vides conçus explicitement.

## Architecture et choix technologiques

Les choix de stack ne sont pas figés. Claude doit les comparer et les justifier pendant la phase de conception avant toute implémentation.

Pistes possibles à évaluer :
- Frontend : Next.js/React et TypeScript.
- UI : système de composants accessible et design tokens, avec une solution de styling cohérente.
- Backend : fonctions/server actions ou API dédiée selon les besoins de sécurité, synchronisation et tâches planifiées.
- Base de données : PostgreSQL.
- Authentification : fournisseur éprouvé ou solution self-hosted, à évaluer selon le besoin multi-utilisateur.
- Hébergement : Vercel ou plateforme équivalente pour l'application, hébergement managé adapté pour la base de données et les tâches de fond.
- Graphiques : bibliothèque fiable, accessible et adaptée aux visualisations financières.
- Synchronisation : tâches planifiées, webhooks lorsque disponibles, stratégie de reprise et journalisation.

La décision finale doit documenter les compromis, coûts prévisibles, contraintes de déploiement, sécurité, maintenance et dépendances fournisseurs.

## Principes de sécurité et de confidentialité

- Ne pas committer de secrets, clés API, tokens, identifiants, données personnelles ou exports financiers.
- Utiliser les variables d'environnement et un gestionnaire de secrets côté serveur.
- Toutes les opérations sensibles doivent être validées et autorisées côté serveur.
- Contrôle d'accès systématique au niveau utilisateur et, le cas échéant, au niveau de l'espace patrimonial.
- Minimisation des données, chiffrement en transit, chiffrement au repos lorsque supporté, politique de conservation et suppression.
- Tokens d'intégration stockés de façon sécurisée et jamais exposés au navigateur.
- Journaliser les événements de sécurité sans enregistrer de secrets ou données financières excessives.
- Protection contre CSRF, XSS, injection, abus de requêtes, erreurs d'autorisation et autres risques pertinents.
- Sauvegardes, tests de restauration, migrations contrôlées et procédure de gestion des incidents.
- Prévoir une revue de sécurité et de confidentialité avant toute mise en production.

## Qualité et fiabilité des données

- Chaque donnée externe doit conserver sa source, son identifiant externe lorsque nécessaire et son horodatage de synchronisation.
- Les montants sont stockés avec une précision appropriée (éviter les calculs monétaires en flottants binaires non maîtrisés).
- Gérer les devises, dates, fuseaux horaires, doublons, opérations en attente et corrections de synchronisation.
- Toute estimation doit être identifiée comme telle et ne pas être présentée comme une valeur certaine.
- Les agrégats (patrimoine net, performances, allocations) doivent être définis, testés et documentés.
- Prévoir des tests unitaires, d'intégration, d'autorisation et de parcours critiques.

## Phase de conception obligatoire

Avant de coder, Claude doit produire et faire valider une phase de conception incluant :

1. Clarification des besoins, périmètre MVP, hypothèses et exclusions.
2. Architecture globale, composants, flux de données et choix de stack argumentés.
3. Modèle de données/ERD : utilisateurs, espaces, comptes, actifs, passifs, transactions, valorisations, connexions externes, consentements et synchronisations.
4. Stratégie d'authentification, multi-utilisateur, permissions et isolation des données.
5. Stratégie de sécurité, confidentialité, secrets, sauvegardes et menaces principales.
6. Stratégie d'intégration bancaire/investissement, fournisseur potentiel, limites, coûts et plan de remplacement.
7. Maquettes/wireframes des écrans principaux (mobile et desktop) et parcours utilisateur.
8. Plan de développement découpé en étapes, critères d'acceptation et tests.
9. Risques, coûts d'exploitation, services tiers et décisions restant à prendre.

**Aucun développement fonctionnel ne doit commencer avant la présentation de ces livrables et l'accord explicite du propriétaire du projet.**

## Déploiement

- Déploiement continu depuis le dépôt GitHub vers Vercel ou une plateforme comparable.
- Environnements distincts : local, preview/staging et production.
- URL de production sécurisée et accessible en ligne à tout moment, sous réserve de disponibilité de l'hébergeur et des services externes.
- Variables et secrets séparés par environnement.
- Migrations de base de données contrôlées, sauvegardes et procédure de rollback.
- Vérifications avant publication : tests, build, contrôles de sécurité et revue des changements.

## Roadmap indicative

- **Phase 0 — Conception** : besoins, architecture, stack, modèle de données, sécurité, maquettes et validation.
- **Phase 1 — Fondations** : dépôt, application responsive, authentification, modèle multi-utilisateur, base de données et CI.
- **Phase 2 — Patrimoine manuel** : comptes, actifs, passifs, valorisations, dashboard et graphiques.
- **Phase 3 — Transactions et crédits** : opérations, catégorisation, échéanciers et projections.
- **Phase 4 — Connexions** : intégrations bancaires/investissement, synchronisation, gestion des consentements et erreurs.
- **Phase 5 — PWA et confort** : installation mobile, notifications pertinentes, recherche et amélioration UX.
- **Phase 6 — Production** : audit, sauvegardes, monitoring, documentation et déploiement stable.

Les phases pourront être réordonnées après la conception ; privilégier un MVP utile, fiable et sécurisé plutôt qu'une multitude de fonctionnalités prématurées.


## Démarrage du projet

Stack validée (Phase 0) : Next.js (App Router) + TypeScript strict + Tailwind CSS ; Supabase (Postgres UE, Auth, RLS) et Drizzle à partir du lot L1.

### Prérequis
- Node.js 20.9 ou plus (testé avec Node 22) et npm.

### Installation et lancement local
```bash
npm ci
npm run dev        # http://localhost:3000
```

### Qualité
```bash
npm run lint
npm run typecheck
npm run format:check
npm test
npm run build
```

### Configuration
Copier `.env.example` vers `.env.local` (jamais versionné). Aucune variable n'est requise au lot L0.

### Déploiement
Voir [`docs/deploiement-vercel.md`](./docs/deploiement-vercel.md).

### Workflow Git
`feat/*` → pull request vers `dev` → `staging` → `main` (production). La CI (lint, typecheck, format, tests, build, audit, scan de secrets) doit être verte avant fusion.

> Aucune donnée réelle (soldes, numéros de contrat, échéanciers) ne doit être committée : elles sont saisies uniquement dans l'application déployée.

## Principes de décision

- Simplicité maintenable plutôt que complexité prématurée.
- Sécurité et confidentialité avant commodité.
- Données explicites, datées et traçables.
- Mobile-first et accessibilité.
- Éviter les dépendances verrouillantes lorsque des alternatives raisonnables existent.
- Ne jamais inventer de données, de synchronisations ou de performances de marché.
- Documenter les décisions importantes dans des ADR (Architecture Decision Records) si le projet le justifie.
