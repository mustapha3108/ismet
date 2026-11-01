/**
 * Liste des revues médicales — Les Cahiers du Praticien
 * Pour ajouter une nouvelle revue, ajoutez simplement un objet au début du tableau.
 * L'élément à l'index 0 apparaît automatiquement en vedette dans la section Hero.
 */

import cover6 from '../assets/Untitled-5.webp';
import cover3 from '../assets/Untitled-2.webp';
import cover2 from '../assets/Untitled-1.webp';
import cover1 from '../assets/Untitled-4.webp';
import cover0 from '../assets/Untitled-3.webp';

export const books = [
  {
    id: "6",
    edition: "Numéro 06 — Octobre 2022",
    title: "Santé - Médecine — 60ème Anniversaire de l'Indépendance",
    description: "Édition spéciale 60ème Anniversaire (1962-2022) : politiques de santé et ministres en Algérie, 60 ans d'épidémiologie, de médecine interne, de psychiatrie et de diabétologie. Évolution de l'officine de pharmacie, médecine légale et du travail, femmes médecins et hommage aux victimes de la COVID-19.",
    issn: "ISSN 7481-2507",
    coverImage: cover6,
    pdfUrl: "/Untitled-5.pdf"
  },
  {
    id: "3",
    edition: "Numéro 03 — Novembre 2018",
    title: "Diabétologie (II)",
    description: "Dossier diabétologie : génétique et diabète de type 2, Plan stratégique national MNT 2015-2019, cœur et HTA chez le diabétique, syndrome coronarien aigu, syndrome métabolique, prévention des lésions du pied et nouvelles thérapeutiques. En complément : maladie pneumococcique en Algérie.",
    issn: "ISSN 7481-2507",
    coverImage: cover3,
    pdfUrl: "/Untitled-2.pdf"
  },
  {
    id: "2",
    edition: "Numéro 02 — Juin 2017",
    title: "Diabétologie (I)",
    description: "Dossier diabétologie : histoire du diabète et découverte de l'insuline, données épidémiologiques et facteurs de risque, critères diagnostiques du diabète sucré, néphropathie, pied diabétique, atteintes oculaires, diabète et grossesse, Ramadan, cancer, et éducation thérapeutique.",
    issn: "ISSN 7481-2507",
    coverImage: cover2,
    pdfUrl: "/Untitled-1.pdf"
  },
  {
    id: "1",
    edition: "Numéro 01 — Avril 2017",
    title: "Cancérologie (II) — Hématologie (I)",
    description: "Dossier oncologie : actualités cancer 2017, avancées du Plan National Cancer 2015-2019, cancer et génétique, poumon, cancers digestifs non colorectaux, pancréas, rein métastatique, col, ovaire, mélanomes et tomothérapie. Dossier hématologie : diagnostic et traitement de l'hémophilie et des anémies.",
    issn: "ISSN 7481-2507",
    coverImage: cover1,
    pdfUrl: "/Untitled-4.pdf"
  },
  {
    id: "0",
    edition: "Numéro 00 — Avril 2016",
    title: "Cancérologie (I)",
    description: "Numéro inaugural dédié à l'oncologie : Plan National Cancer 2015-2019, épidémiologie et facteurs de risque, stratégies thérapeutiques (chirurgie carcinologique, radiothérapie, chimiothérapie, thérapies ciblées, immunothérapie) et prise en charge des cancers (prostate, vessie, sarcomes, pédiatrie et sein localement avancé).",
    issn: "ISSN 7481-2507",
    coverImage: cover0,
    pdfUrl: "/Untitled-3.pdf"
  }
];

export default books;
