// Contenu du site : modifier ici les textes, projets et parcours.

export const contact = {
  email: 'talhahally974@gmail.com',
  phone: '06 48 98 67 32',
  phoneHref: '+33648986732',
  linkedin: 'https://www.linkedin.com/in/talhah-ally-75b0b1175/',
  github: 'https://github.com/Talhah9',
}

export const heroWords = ['applications mobiles', 'SaaS', 'outils IA', 'sites web']

export const stats = [
  { value: '3', label: 'produits lancés' },
  { value: '13', label: 'outils IA dans Savvly' },
  { value: '240', label: 'questions dans Quiz Péi' },
  { value: '150+', label: 'freelances accompagnés' },
]

export const stack = [
  'React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Supabase', 'Stripe',
  'OpenAI', 'Claude API', 'Framer Motion', 'Tailwind', 'Vercel', 'RevenueCat', 'Shopify',
]

export const featured = [
  {
    id: 'noutpei',
    name: 'Nout Péi',
    kind: 'Application mobile iOS & Android',
    year: '2026',
    status: 'Bientôt sur l’App Store',
    tagline: 'Explorer La Réunion comme jamais.',
    pitch:
      'Une application immersive pour découvrir l’île : paysages, cirques, volcan, histoire, culture créole. Avec un quiz pour jouer et un scanner IA qui reconnaît ce que tu photographies.',
    accent: '#2dd4bf',
    icon: '/projects/noutpei-icon.webp',
    link: { href: 'https://nout-pei.app', label: 'nout-pei.app' },
    screens: [
      { src: '/projects/noutpei-accueil.webp', label: 'Accueil' },
      { src: '/projects/noutpei-quiz.webp', label: 'Quiz Péi' },
      { src: '/projects/noutpei-rando.webp', label: 'Randos' },
      { src: '/projects/noutpei-carte.webp', label: 'Carte' },
    ],
    features: [
      ['Carte interactive', 'Lieux, plages, villages et couchers de soleil, avec une fiche détaillée pour chaque spot.'],
      ['Quiz Péi', 'Des missions de 12 questions, environ 240 questions documentées et une saison à compléter.'],
      ['Scan Péi', 'Tu prends une photo, l’IA reconnaît l’animal, la plante, le plat ou le paysage.'],
      ['Histoire & culture', 'Marronnage, engagisme, 20 décembre, kréol, cuisine, personnalités.'],
      ['Randos & volcans', 'Piton de la Fournaise, Piton des Neiges, cirques et biodiversité.'],
      ['Communauté', 'Publications modérées, favoris, notifications de proximité et offre premium.'],
    ],
    tech: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'OpenAI Vision', 'RevenueCat', 'Next.js'],
  },
  {
    id: 'caissepilot',
    name: 'CaissePilot',
    kind: 'Web app installable (PWA)',
    year: '2026',
    status: 'Accès sur invitation',
    tagline: 'La clôture de caisse en une photo.',
    pitch:
      'Une application pour les micro-entrepreneurs et les commerçants qui veulent enregistrer leur caisse sans paperasse. Le salarié photographie l’enveloppe du soir, l’IA lit les montants, le gérant suit tout en temps réel.',
    accent: '#22c55e',
    icon: '/projects/caissepilot-icon.webp',
    screens: [
      { src: '/projects/caissepilot-dashboard.webp', label: 'Dashboard' },
      { src: '/projects/caissepilot-capture.webp', label: 'Capture' },
    ],
    features: [
      ['Lecture IA de l’enveloppe', 'Les montants CB, espèces et fond de caisse sont extraits automatiquement de la photo.'],
      ['Correction assistée', 'Si l’IA hésite, un formulaire prérempli permet de valider en quelques secondes.'],
      ['Dashboard temps réel', 'Chiffre d’affaires du jour, de la semaine et du mois, avec graphique d’évolution.'],
      ['Calendrier & historique', 'Toutes les clôtures filtrables, avec export CSV prêt pour Excel.'],
      ['Équipe & points de vente', 'Invitations des salariés, plusieurs boutiques, notifications push.'],
      ['Sécurisé', 'Données isolées par commerce, stockage privé et tests automatisés.'],
    ],
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'OpenAI Vision', 'Web Push'],
  },
  {
    id: 'savvly',
    name: 'Savvly',
    kind: 'SaaS IA pour freelances',
    year: '2024 – 2025',
    status: 'En ligne',
    tagline: 'Le toolkit IA des freelances.',
    pitch:
      'Un SaaS conçu et développé seul, de bout en bout, pour les freelances et solopreneurs francophones. Contrats, devis, CGV, posts LinkedIn : générés en quelques secondes.',
    accent: '#a78bfa',
    link: { href: 'https://savvly.co', label: 'savvly.co' },
    tools: ['Posts LinkedIn', 'Contrats', 'CGV', 'Devis', 'Visuels', 'Factures', 'Statut juridique', 'Audit SEO', 'Fiches produits', 'Analyse concurrents'],
    features: [
      ['13 outils IA en streaming', 'Génération en temps réel avec Claude et OpenAI.'],
      ['Abonnements Stripe', 'Checkout, webhooks, résiliation, réactivation et accès par plan.'],
      ['Auth complète', 'Email et Google OAuth, JWT, rate limiting et crédits côté serveur.'],
      ['Acquisition', 'Blog SEO de 20 articles, onboarding animé, digest hebdo automatisé.'],
      ['Coaching 1:1', 'Se débloque automatiquement après 2 mois d’abonnement.'],
      ['Communauté', 'Plus de 200 freelances, plus de 150 accompagnés pour se lancer.'],
    ],
    tech: ['React', 'Vite', 'Tailwind', 'Supabase', 'Stripe', 'Resend', 'Claude API', 'OpenAI'],
  },
]

export const more = [
  {
    name: 'LE 13E · Story Command Center',
    kind: 'Outil d’écriture',
    text: 'Un espace de pilotage pour écrire une mini-série : mur narratif infini, personnages, double chronologie, matrice des secrets et audit de continuité.',
    tech: ['Next.js', 'React Flow', 'Zustand', 'Framer Motion'],
  },
  {
    name: 'MarketFormation',
    kind: 'Marketplace de formations',
    text: 'Le backend d’une marketplace de formations connectée à Shopify : espaces formateur et élève, abonnements Stripe, virements aux formateurs, uploads.',
    tech: ['Next.js', 'Prisma', 'Stripe', 'Shopify', 'S3'],
  },
  {
    name: 'Vidéo promo Nout Péi',
    kind: 'Motion design en code',
    text: 'Une vidéo promotionnelle verticale gamifiée pour les réseaux, entièrement générée en React avec Remotion.',
    tech: ['Remotion', 'React'],
  },
  {
    name: 'Karl',
    kind: 'App mobile · en cours',
    text: 'Une application de suivi financier personnel : transactions, bilan, export et onboarding, en cours de développement.',
    tech: ['Expo', 'NativeWind', 'Supabase'],
  },
]

export const services = [
  ['Application mobile', 'iOS et Android avec une seule base de code, publiée sur les stores.'],
  ['SaaS avec abonnement', 'Auth, paiement récurrent, dashboard utilisateur, accès par plan.'],
  ['Outil IA sur mesure', 'Génération de contenu, lecture de documents, vision, chatbot.'],
  ['Outil métier', 'Caisse, réservation, suivi client, reporting : ce dont ton activité a besoin.'],
  ['Site vitrine premium', 'Un site rapide, animé et pensé pour convertir.'],
  ['E-commerce', 'Shopify sur mesure, tunnel optimisé, intégration Stripe.'],
]

export const process = [
  ['Cadrage', 'On clarifie le besoin, les utilisateurs et ce qui compte vraiment pour la v1.'],
  ['Design', 'Maquettes et parcours, pour valider l’expérience avant d’écrire le code.'],
  ['Développement', 'Je construis tout : front, back, paiement, IA, avec des livraisons régulières.'],
  ['Mise en prod & suivi', 'Lancement, mesures, ajustements. Le produit continue d’évoluer.'],
]

export const experiences = [
  {
    period: '2024 · aujourd’hui',
    role: 'Créateur d’applications indépendant',
    org: 'Nout Péi, CaissePilot, Savvly',
    text: 'Conception, design, développement et mise en production d’applications web et mobiles, en solo.',
  },
  {
    period: '2021 · 2023',
    role: 'Chef de projet web, Web analyst',
    org: 'Groupe La Poste · Services Courrier Colis',
    text: 'Webmastering, plans de taggage, analyse AT Internet, suivi Jira, reportings industrialisés, comités et datavisualisation.',
  },
  {
    period: '2021',
    role: 'Chef de projet web',
    org: 'Musée Maillol · Galerie Dina Vierny · Pal Project',
    text: 'Cahiers des charges, suivi et validation des projets graphiques et des phases de développement.',
  },
  {
    period: '2020',
    role: 'Assistant chef de projet web',
    org: 'Groupe Ravate · océan Indien',
    text: 'Définition des objectifs, analyse des métriques avec Google Analytics, reporting.',
  },
]

export const education = [
  ['2021 · 2023', 'MBA Expert Marketing Digital', 'My Digital School Paris'],
  ['2018 · 2021', 'Bachelor Web-marketing, E-business & Social Media', 'My Digital School Paris'],
  ['2016 · 2018', 'Bachelor Sciences de la motricité', 'Université Libre de Bruxelles'],
  ['2015 · 2016', 'BAC S, Sciences de l’ingénieur', 'Lycée Louis Payen'],
]

export const skills = [
  ['Développement', ['React', 'Next.js', 'React Native / Expo', 'TypeScript', 'Supabase', 'Stripe', 'Git']],
  ['IA & automatisation', ['OpenAI', 'Claude API', 'Vision', 'Make', 'Zapier', 'Airtable']],
  ['Produit & projet', ['Roadmap', 'User stories', 'Agile / Scrum', 'Jira', 'Notion']],
  ['Analytics', ['GA4', 'Suivi de KPI', 'Reporting', 'Datavisualisation']],
]
