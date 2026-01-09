export interface Post {
  id: string;
  title: string;
  date: string; // Format: 'YYYY-MM-DD'
  type: 'text' | 'linkedin';
  content?: string; // Pour les posts texte brut
  linkedinUrl?: string; // Pour les posts LinkedIn
  linkedinEmbedId?: string; // ID pour l'embed LinkedIn si nécessaire
}

export const posts: Post[] = [
  {
    id: 'post-obtention-bts-sio',
    title: 'Obtention de mon BTS SIO option SLAM 🎓',
    date: '2025-06-30',
    type: 'linkedin',
    linkedinUrl: 'https://www.linkedin.com/posts/antonin-gourinchas_%C3%A7a-y-est-nous-y-sommes-apr%C3%A8s-un-d%C3%A9but-activity-7346291426931949568-w6yy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEevNoBP1fZg15DbR22kn2RUTVtoUGQBFU',
  },
  {
    id: 'post-rosalie-trophy',
    title: 'L\'esprit d\'équipe, c\'est aussi du sport - Episode 2 🚴‍♂️ - Rosalie Trophy 2025',
    date: '2025-06-28',
    type: 'linkedin',
    linkedinUrl: 'https://www.linkedin.com/posts/laura-lecoeur_nos-%C3%A9quipes-ont-pris-le-d%C3%A9part-de-la-rosalie-activity-7346448308338409472-etox?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEevNoBP1fZg15DbR22kn2RUTVtoUGQBFU',
  },
  {
    id: 'post-semi-marathon-liberte-caen',
    title: 'L\'esprit d\'équipe, c\'est aussi du sport 🏃‍♂️ - Mon premier semi-marathon',
    date: '2025-06-15',
    type: 'linkedin',
    linkedinUrl: 'https://www.linkedin.com/posts/laura-lecoeur_un-immense-bravo-%C3%A0-nos-collaborateurs-qui-ugcPost-7345723813050937345-mazo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEevNoBP1fZg15DbR22kn2RUTVtoUGQBFU',
  },
  {
    id: 'post-debut-licence-sts',
    title: 'Début de mon bachelor développeur web en alternance',
    date: '2025-08-25',
    type: 'text',
    content: 'Aujourd\'hui marque le début d\'un nouveau chapitre passionnant : je démarre mon bachelor développeur web en alternance.\n\nCette formation de niveau Bac+3 me permettra d\'approfondir mes compétences en développement web et mobile, avec un focus sur les technologies modernes et les meilleures pratiques du secteur.\n\nL\'alternance est pour moi une opportunité unique de mettre en pratique les connaissances acquises en cours tout en contribuant à des projets concrets en entreprise. Je suis impatient de relever de nouveaux défis techniques et de continuer à progresser dans ce domaine qui me passionne.\n\nUne nouvelle aventure commence !',
  },
  {
    id: 'post-clap-de-fin-tacher-acogex',
    title: 'Clap de fin 🎬 - Fin de deux années d\'alternance chez TACHER ACOGEX',
    date: '2025-07-11',
    type: 'linkedin',
    linkedinUrl: 'https://www.linkedin.com/posts/antonin-gourinchas_clap-de-fin-ce-vendredi-marquait-la-fin-activity-7350571999645065216-Zuj_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEevNoBP1fZg15DbR22kn2RUTVtoUGQBFU',
  },
  {
    id: 'post-debut-alternance-tacher-acogex',
    title: 'Début de mon alternance chez TACHER ACOGEX comme technicien informatique',
    date: '2023-09-01',
    type: 'text',
    content: 'Aujourd\'hui marque le début d\'une nouvelle aventure professionnelle : je démarre mon alternance en tant que technicien informatique chez TACHER ACOGEX à Caen.\n\nCette opportunité s\'inscrit dans ma reconversion vers l\'informatique et me permettra d\'acquérir des compétences techniques solides tout en poursuivant ma formation en BTS SIO option SLAM.\n\nJe suis enthousiaste à l\'idée de rejoindre l\'équipe et de contribuer aux projets informatiques du cabinet. Une nouvelle page se tourne !',
  },
  {
    id: 'post-clap-de-fin-urgo-reconversion',
    title: 'Clap de fin à Urgo et direction Caen en Normandie pour une nouvelle aventure et une reconversion en programmation',
    date: '2023-08-25',
    type: 'text',
    content: 'Aujourd\'hui marque la fin de mon alternance chez Urgo Healthcare. Deux années riches en expériences qui m\'ont beaucoup appris sur le monde de l\'entreprise et la gestion.\n\nMais c\'est aussi le début d\'un nouveau chapitre : je quitte la région pour m\'installer à Caen en Normandie et entamer une reconversion vers la programmation et l\'informatique.\n\nCette décision représente un tournant important dans mon parcours professionnel. Après avoir obtenu mon BTS Comptabilité et gestion, je ressens le besoin de me diriger vers un domaine qui me passionne davantage : le développement et la technologie.\n\nDirection Caen pour une nouvelle aventure !',
  },
  {
    id: 'post-debut-bts-sio',
    title: 'Début de mon BTS SIO option SLAM',
    date: '2023-08-21',
    type: 'text',
    content: 'Aujourd\'hui marque le début d\'une nouvelle formation : je démarre mon BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers) à Caen.\n\nCette formation s\'inscrit dans ma reconversion vers l\'informatique et le développement. Elle me permettra d\'acquérir des compétences techniques solides en développement d\'applications, en programmation et en gestion de projets informatiques.\n\nJe suis enthousiaste à l\'idée d\'apprendre de nouvelles technologies et de me former aux métiers du développement. Une nouvelle aventure commence !',
  },
  {
    id: 'post-obtention-bts-compta',
    title: 'Obtention de mon BTS Comptabilité et gestion en alternance',
    date: '2023-06-30',
    type: 'text',
    content: 'Aujourd\'hui, j\'ai l\'immense fierté d\'annoncer l\'obtention de mon BTS Comptabilité et gestion en alternance. Ce diplôme marque la fin d\'un parcours de deux années riches en apprentissages.\n\nCette formation m\'a permis d\'acquérir des compétences solides en comptabilité, gestion et finance, tout en développant mon sens de l\'organisation et de la rigueur. L\'alternance a été une expérience formatrice qui m\'a permis de mettre en pratique les connaissances théoriques dans un environnement professionnel concret.\n\nUn grand merci à tous ceux qui m\'ont accompagné et soutenu durant cette période.',
  },
  {
    id: 'post-debut-alternance-urgo',
    title: 'Début de mon alternance comme assistant contrôleur de gestion chez Urgo Healthcare',
    date: '2021-09-01',
    type: 'text',
    content: 'Aujourd\'hui, je démarre mon alternance en tant qu\'assistant contrôleur de gestion chez Urgo Healthcare. C\'est le début d\'une nouvelle expérience professionnelle qui s\'inscrit dans mon parcours de formation en BTS Comptabilité et gestion.\n\nCette opportunité me permettra d\'apprendre les rouages de la gestion financière et du contrôle de gestion dans un environnement industriel. Je suis impatient de mettre en pratique les connaissances acquises en cours et de contribuer aux missions de l\'équipe.\n\nUne belle aventure commence !',
  },
];

