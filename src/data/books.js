/**
 * Liste des revues médicales — Les Cahiers du Praticien
 * Pour ajouter une nouvelle revue, ajoutez simplement un objet au début du tableau.
 * L'élément à l'index 0 apparaît automatiquement en vedette dans la section Hero.
 */

import cover7 from '../assets/cover7.webp';
import cover6 from '../assets/cover6.webp';

export const books = [
  {
    id: "7",
    edition: "Numéro 05 — Mai 2020",
    title: "Gériatrie (I) — Maladies Rares (I)",
    description: "Dossier gériatrie : vieillissement réussi, profil clinique, cœur et diabète du sujet âgé, douleur chronique. Dossier maladies rares : dystrophies musculaires, maladie de Pompe et mucopolysaccharidoses.",
    issn: "ISSN 7481-2507",
    coverImage: cover7,
    pdfUrl: "/pdf7.pdf"
  },
  {
    id: "6",
    edition: "Numéro 04 — Juin 2019",
    title: "Cancérologie (III) — Hématologie (II)",
    description: "Dossier oncologie : 13ème Post Chicago Alger, dépistage du cancer du sein, cancer du cavum, foie et voies biliaires. Dossier hématologie : hémopathies professionnelles et hémophilie de l'enfant.",
    issn: "ISSN 7481-2507",
    coverImage: cover6,
    pdfUrl: "/pdf6.pdf"
  }
];

export default books;
