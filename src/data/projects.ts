export interface Project {
  id: string
  title: string
  description: string
  image: string
  websiteUrl: string | null
  technologies: string[]
  color: string
  features: string[]
  client: string
  duration: string
  status: "Livré" | "En cours"
  category: string | string[]
  fullDescription?: string
}

export const projects: Project[] = [
  {
    id: "site-vitrine-lptp",
    title: "Site Vitrine LPTP - Travaux Publics",
    description: "Site web professionnel pour LPTP, entreprise spécialisée dans les travaux publics. Design moderne et responsive avec présentation des services, galerie de réalisations et formulaire de contact optimisé.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    websiteUrl: "https://lptp.netlify.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    color: "green",
    features: [
      "Design responsive et moderne",
      "Galerie de projets avec filtres",
      "Formulaire de contact sécurisé",
      "Optimisation SEO",
      "Interface d'administration",
      "Intégration Google Maps"
    ],
    client: "LPTP - Travaux Publics",
    duration: "3 mois",
    status: "Livré",
    category: "web",
    fullDescription: "Ce projet consistait à créer un site web vitrine moderne et professionnel pour LPTP, une entreprise spécialisée dans les travaux publics. Le site présente les services de l'entreprise, une galerie de réalisations avec système de filtres, et un formulaire de contact optimisé. L'interface est entièrement responsive et optimisée pour le SEO."
  },
  {
    id: "portfolio-dan-laine",
    title: "Portfolio Dan LAINE - Recherche d'alternance",
    description: "Portfolio professionnel moderne pour un étudiant en recherche d'alternance. Site vitrine présentant le parcours de formation, l'expérience professionnelle et les compétences techniques.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    websiteUrl: "https://portfolio-dan-laine.netlify.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "green",
    features: [
      "Design moderne et responsive",
      "Présentation du parcours de formation",
      "Section expérience professionnelle",
      "Galerie de projets",
      "Formulaire de contact",
      "Optimisation SEO"
    ],
    client: "Dan LAINE",
    duration: "1 mois",
    status: "Livré",
    category: "web",
    fullDescription: "Portfolio professionnel développé pour Dan LAINE, étudiant en recherche d'alternance pour sa Licence STS Sécurité des Réseaux et Cybersécurité. Le site présente de manière claire et moderne son parcours de formation depuis 2019, son expérience professionnelle en alternance chez Partélios Habitat, ainsi que ses compétences techniques. Le portfolio inclut une section projets, un formulaire de contact et une présentation de ses différentes formations en cybersécurité. Le design est entièrement responsive et optimisé pour le SEO afin de maximiser sa visibilité auprès des recruteurs."
  },
  {
    id: "le-bateau-ivre-cavalaire",
    title: "Le Bateau Ivre - Brasserie Cavalaire",
    description: "Site vitrine moderne pour une brasserie-restaurant au port de Cavalaire-sur-Mer. Projet personnel développé pour améliorer mes compétences en design et développement web.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    websiteUrl: "https://le-bateau-ivre-cavalaire.netlify.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "green",
    features: [
      "Design moderne avec vue sur la mer",
      "Présentation des spécialités culinaires",
      "Section horaires et contact",
      "Bouton de réservation",
      "Galerie photos de l'établissement",
      "Optimisation SEO local"
    ],
    client: "Projet personnel",
    duration: "2 semaines",
    status: "Livré",
    category: "web",
    fullDescription: "Projet personnel développé pour améliorer mes compétences en design et développement web. Inspiré par une brasserie visitée pendant mes vacances à Cavalaire-sur-Mer, j'ai relevé le défi d'améliorer son image en ligne en créant un site vitrine moderne et attractif. Le site présente la brasserie-restaurant 'Le Bateau Ivre' située au port de Cavalaire, avec ses spécialités méditerranéennes, ses fruits de mer frais, et son ambiance chaleureuse face à la mer. Le design met en valeur la vue imprenable sur le port et l'ambiance maritime de l'établissement. Le site inclut une présentation des spécialités culinaires, les horaires d'ouverture, les informations de contact, et un bouton de réservation pour faciliter l'expérience client."
  },
  {
    id: "chez-lulu-snack",
    title: "Chez Lulu Snack - Restaurant Longvic",
    description: "Site web moderne pour un restaurant de proximité à Longvic. Présentation du menu complet, informations de contact et système de commande en ligne à venir.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    websiteUrl: "https://chez-lulu-snack.netlify.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "green",
    features: [
      "Menu complet avec prix",
      "Présentation des spécialités",
      "Informations de contact et localisation",
      "Design moderne et responsive",
      "Interface de commande en ligne (à venir)",
      "Optimisation SEO local"
    ],
    client: "Chez Lulu Snack",
    duration: "En cours",
    status: "En cours",
    category: "web",
    fullDescription: "Site web moderne développé pour Chez Lulu Snack, un restaurant de proximité authentique situé à Longvic depuis 2020. Le site présente le restaurant avec sa terrasse chaleureuse, son menu complet incluant kebabs, burgers, paninis, sandwiches et desserts, ainsi que toutes les informations pratiques (adresse, téléphone, localisation). Le design met en valeur l'ambiance authentique et chaleureuse de l'établissement. Actuellement en cours de développement, une interface de commande en ligne sera prochainement ajoutée pour permettre aux clients de commander directement depuis le site, que ce soit pour manger sur place ou à emporter. Cette fonctionnalité facilitera grandement l'expérience client et modernisera le service du restaurant."
  },
  {
    id: "cabinet-chemin",
    title: "Cabinet Chemin - Refonte site web",
    description: "Refonte complète du site internet du cabinet d'expertise comptable Chemin à Pont-Audemer et Beuzeville. Modernisation du design et optimisation du référencement naturel (SEO).",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    websiteUrl: "https://cabinet-chemin.fr",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    color: "green",
    features: [
      "Refonte complète du design",
      "Présentation des services comptables",
      "Informations sur les deux cabinets",
      "Optimisation SEO et référencement naturel",
      "Design moderne et professionnel",
      "Interface responsive et accessible"
    ],
    client: "Cabinet Chemin",
    duration: "2 mois",
    status: "Livré",
    category: "web",
    fullDescription: "Refonte complète du site internet du cabinet d'expertise comptable Chemin, présent à Pont-Audemer et Beuzeville. Ce projet consistait à moderniser entièrement le site existant avec un nouveau design professionnel et adapté au secteur de l'expertise comptable. La refonte inclut une présentation claire des services proposés (comptabilité, création d'entreprise, gestion sociale, juridique), des informations sur les deux cabinets, ainsi qu'une section recrutement. L'un des objectifs principaux était l'optimisation du référencement naturel (SEO) pour améliorer la visibilité du cabinet dans les résultats de recherche. Le nouveau site offre une meilleure expérience utilisateur avec un design moderne, responsive et accessible, tout en conservant l'image professionnelle et de confiance du cabinet."
  },
  {
    id: "automatisation-excel-cabinets",
    title: "Automatisation Excel - Cabinets Comptables",
    description: "Développement de plus de 150 fichiers Excel automatisés pour le traitement de données financières. Réalisé pour les cabinets Chemin, Tacher-Acogex et Cecob Dulac lors d'une alternance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    websiteUrl: null,
    technologies: ["Excel", "VBA", "Macros", "Power Query"],
    color: "green",
    features: [
      "Plus de 150 fichiers automatisés",
      "Traitement de données financières",
      "Macros VBA personnalisées",
      "Automatisation de processus comptables",
      "Optimisation des workflows",
      "Réduction du temps de traitement"
    ],
    client: "Cabinets Chemin, Tacher-Acogex, Cecob Dulac",
    duration: "Alternance",
    status: "Livré",
    category: "automation",
    fullDescription: "Projet d'automatisation Excel réalisé lors d'une alternance pour trois cabinets d'expertise comptable : Chemin, Tacher-Acogex et Cecob Dulac. J'ai développé plus de 150 fichiers Excel automatisés utilisant VBA pour traiter et analyser des données financières. Ces fichiers ont permis d'automatiser des processus comptables répétitifs, de réduire significativement le temps de traitement des données, et d'optimiser les workflows des équipes. Chaque fichier était personnalisé selon les besoins spécifiques de chaque cabinet et inclut des macros VBA pour automatiser les calculs, les imports de données, et la génération de rapports. Ce projet a démontré ma capacité à comprendre les besoins métier et à créer des solutions d'automatisation efficaces pour améliorer la productivité."
  },
  {
    id: "zaacom-developpement-backend",
    title: "Zaacom - Développement Backend & DevOps",
    description: "Développement et maintenance de trois applications web (Station, Client, Partner) lors d'une alternance. Configuration d'environnements, sécurisation, déploiement automatique et corrections de bugs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    websiteUrl: null,
    technologies: ["PHP", "MySQL", "GitHub Actions", "Git", "SFTP", "SSH", "FileZilla"],
    color: "green",
    features: [
      "Configuration d'environnements (local, préprod, prod)",
      "Sécurisation des projets (variables d'environnement)",
      "Déploiement automatique via GitHub Actions",
      "Corrections de bugs et optimisations SQL",
      "Gestion de bases de données",
      "Workflow CI/CD automatisé"
    ],
    client: "Zaacom",
    duration: "Alternance (7 semaines)",
    status: "Livré",
    category: ["web", "apis"],
    fullDescription: "Alternance de 7 semaines chez Zaacom pour le développement et la maintenance de trois applications web PHP : Station, Client et Partner. J'ai commencé par configurer mon environnement de travail (PHPStorm, GitHub, Git, Composer, FileZilla) et installer les projets en local. J'ai ensuite sécurisé les trois projets en créant des fichiers .env et en modifiant les fichiers de configuration (Db.php, Constants.php) pour gérer automatiquement les différents environnements (local, préprod, production). J'ai mis en place un système de déploiement automatique via GitHub Actions avec authentification SSH, permettant un déploiement automatique sur le serveur de préproduction à chaque commit. J'ai effectué de nombreuses corrections de bugs : optimisation de requêtes SQL pour le système de recherche zRank, correction de l'affichage des budgets et missions en cours, résolution de problèmes de transition de coûts futurs vers coûts réels, correction de bugs d'affichage. J'ai également géré des problèmes de données en base (correction de valeurs inappropriées, correction de données de budgets) et optimisé l'affichage des budgets mensuels. Ce projet m'a permis de développer mes compétences en PHP, MySQL, DevOps (GitHub Actions, SSH, SFTP) et en gestion de projets multi-environnements."
  },
  {
    id: "azurimmo-gestion-immobilier",
    title: "Azurimmo - Gestion de parc immobilier",
    description: "Application complète de gestion de parc immobilier développée pour un projet scolaire (oral BTS SIO). Architecture en trois parties : interface mobile Kotlin, interface web Next.js et API Spring Boot.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    websiteUrl: null,
    technologies: ["Kotlin", "Next.js", "TypeScript", "Spring Boot", "Java", "Android"],
    color: "green",
    features: [
      "Interface mobile Android (Kotlin)",
      "Interface web responsive (Next.js)",
      "API RESTful (Spring Boot)",
      "Gestion de parc immobilier",
      "Architecture microservices",
      "Projet scolaire BTS SIO"
    ],
    client: "Projet scolaire",
    duration: "Projet BTS SIO",
    status: "Livré",
    category: ["mobile", "web", "apis"],
    fullDescription: "Projet scolaire complet développé pour l'oral de BTS SIO : Azurimmo, une application de gestion de parc immobilier. Ce projet présente une architecture moderne en trois parties distinctes : une interface mobile développée en Kotlin pour Android permettant la gestion et la consultation des biens immobiliers sur mobile, une interface web responsive développée avec Next.js et TypeScript offrant une expérience utilisateur complète pour la gestion administrative, et une API RESTful développée avec Spring Boot en Java qui centralise toute la logique métier et la gestion des données. L'architecture suit les principes des microservices, permettant une séparation claire des responsabilités et une scalabilité optimale. Ce projet m'a permis de démontrer mes compétences en développement full-stack, en architecture logicielle, et en intégration de différentes technologies pour créer une solution complète et cohérente."
  }
]

