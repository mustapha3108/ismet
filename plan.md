# Spécifications de Design & Plan du Projet : Les Cahiers du Praticien

Ce document résume les spécifications graphiques extraites du logo de la revue ainsi que le plan d'implémentation du site d'archives médicales avec Astro.

---

## 1. Données Graphiques Extraites

### Texte Exact & Hiérarchie
- **Ligne 1 (Titre principal) :** `LES CAHIERS`
- **Ligne 2 (Titre principal) :** `DU PRATICIEN`
- **Ligne 3 (Sous-titre / Description) :** `revue algérienne de médecine pratique`

### Palette de Couleurs
- **Jaune Primaire (Texte) :**
  - Hex : `#FAFB00` (variante web recommandée : `#FFEE00` ou `#FFD700` selon le contraste souhaité)
  - RVB : `rgb(250, 251, 0)`
  - Print équivalent : `CMJN (0%, 0%, 100%, 0%)` (Process Yellow standard)
- **Contour / Ombres :** Noir `#000000`
- **Arrière-plan :** Noir `#000000` (`rgb(0, 0, 0)`)

### Typographie & Polices
1. **Titre Principal (`LES CAHIERS DU PRATICIEN`) :**
   - *Style :* Display rétro années 70/80, formes arrondies/bulbeuses, fûts pincés.
   - *Polices équivalentes commerciales :* Blippo Black, Pump Heavy, Frankfurter Heavy, ITC Ronda.
   - *Alternatives gratuites (Google Fonts) :* Titan One, DynaPuff, Chango, Modak.
2. **Sous-titre (`revue algérienne de médecine pratique`) :**
   - *Style :* Sans-serif géométrique / Grotesk très gras (Heavy/Black), minuscules.
   - *Polices exactes :* Helvetica Black / Helvetica Neue 95 Black, Arial Black.
   - *Alternatives gratuites (Google Fonts) :* Inter (weight: 900), Work Sans (weight: 900).

---

## 2. Structure et Organisation des Données (Astro)

### Modèle de Contenu (`src/content/revues/`)
Chaque numéro ou article de revue sera géré via les Content Collections d'Astro avec le schéma suivant :

```yaml
title: "Titre de l'article ou du numéro"
journal: "Les Cahiers du Praticien"
subtitle: "revue algérienne de médecine pratique"
volume: 12
issue: 3
date: "2024-09"
pdfUrl: "/pdfs/cahiers-du-praticien-vol12-no3.pdf"
fileSize: "4.2 Mo"
specialties: ["Cardiologie", "Médecine Générale"]
authors:
  - "Dr. Nom Prénom"
abstract: "Résumé du contenu..."
keywords: ["Diagnostic", "Thérapeutique"]
```

---

## 3. Plan d'Implémentation du Site

1. **Charte Graphique & Layout de Base :**
   - Intégration de la palette de couleurs (Noir profond + Jaune vif).
   - Intégration des polices Google Fonts correspondantes dans le layout global.
   - Création du header/bannière reproduisant fidèlement le logo original.

2. **Système de Gestion des Numéros (PDFs) :**
   - Configuration de la collection de contenu Astro (`src/content/config.ts`).
   - Dossier public pour stocker les fichiers PDF ou configuration d'un CDN / stockage distant.

3. **Pages Principales :**
   - **Accueil (`/`) :** Bannière vintage "Les Cahiers du Praticien", derniers numéros parus, filtres par année et spécialités.
   - **Catalogue / Archives (`/archives`) :** Liste complète classée par année/volume avec prévisualisations et liens de téléchargement direct.
   - **Fiche Numéro / Article (`/revues/[slug]`) :** Détail complet, résumé, comité/auteurs, bouton de téléchargement PDF et lecteur intégré.
