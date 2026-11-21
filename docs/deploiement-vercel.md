# Déploiement sur Vercel

> Les étapes ci-dessous sont à réaliser par le propriétaire (création de compte/projet = action explicite).

## Mise en place (une seule fois)
1. Créer un compte sur vercel.com et choisir **Add New → Project**, puis importer le dépôt GitHub `NeoOrigin404/FinNeo`.
2. Framework détecté automatiquement : **Next.js**. Ne rien changer aux commandes (`npm run build`).
3. **Production Branch** : `main` (Settings → Git).
4. Les branches `dev`, `staging` et les pull requests génèrent des **previews** automatiquement.
5. Activer la **protection des previews** (Settings → Deployment Protection) pour que les previews ne soient pas publiques.
6. Région des fonctions : choisir une région UE (Settings → Functions) avant d'ajouter une base de données.

## Variables d'environnement
- Aucune n'est requise au lot L0.
- À partir du lot L1 : les définir **par environnement** (Production / Preview / Development) dans Vercel ; ne jamais les committer. Voir `.env.example`.
- Une preview ne doit **jamais** pointer vers la base de production.

## Vérification après déploiement
- `GET /api/health` doit renvoyer `{"status":"ok"}`.
- Vérifier les en-têtes de sécurité (CSP, HSTS, X-Frame-Options).

## Rollback
Vercel → Deployments → choisir un déploiement précédent → **Promote to Production**.
