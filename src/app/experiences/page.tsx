"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'scolaire' | 'professionnelle' | 'associative'>('professionnelle');

  const experiences = {
    scolaire: [
      {
        title: 'Licence STS Développement applicatif web et mobile',
        organization: 'CaenSup Sainte Ursule, Caen',
        period: '2025 - 2026',
        description: 'Formation spécialisée en développement web et mobile (Next.js, Kotlin, Java Spring Boot) avec réalisation de projets complets.',
      },
      {
        title: 'BTS SIO en alternance (option SLAM)',
        organization: 'CaenSup Sainte Ursule, Caen',
        period: '2023 - 2025',
        description: 'Formation en développement d\'applications (PHP, Java, Kotlin, Next.js) avec de nombreux projets pratiques.',
      },
      {
        title: 'BTS Comptabilité et gestion en alternance',
        organization: 'Dijon Formation, Quetigny',
        period: '2021 - 2023',
        description: 'Formation spécialisée en gestion comptable et financière.',
      },
      {
        title: 'Licence Sciences et Techniques',
        organization: 'Université de Bourgogne, Dijon',
        period: '2020 - 2021',
        description: 'Initiation avancée aux mathématiques, à la physique et à la chimie.',
      },
      {
        title: 'BAC S Spécialité Sciences de l\'ingénieur',
        organization: 'Lycée Chevalier d\'Éon, Tonnerre',
        period: '2020 - 2023',
        description: 'Diplôme obtenu avec mention bien.',
      },
    ],
    professionnelle: [
      {
        title: 'Développeur web',
        organization: 'Zaacom, Caen',
        period: 'Septembre 2025 - Novembre 2025',
        description: 'Automatisation du déploiement continu (CI/CD) via GitHub Actions et sécurisation de trois applications web. Diagnostic SQL et résolution d\'anomalies en production.',
      },
      {
        title: 'Formateur en bureautique et Excel',
        organization: 'Cours particuliers',
        period: '2025',
        description: 'Formation personnalisée en bureautique et Excel pour renforcer l\'autonomie numérique de l\'élève.',
      },
      {
        title: 'Technicien informatique',
        organization: 'Cabinets Tacher Acogex, Caen',
        period: 'Septembre 2023 - Août 2025',
        description: 'Support informatique (incidents, téléphonie, physique), rédaction de documentation, développement d\'outils automatisés et participation à la refonte SEO du site de l\'entreprise.',
      },
      {
        title: 'Assistant contrôleur de gestion',
        organization: 'Laboratoires Urgo Healthcare, Chenôve',
        period: 'Septembre 2021 - Août 2023',
        description: 'Analyse de données, gestion de notes de frais, tableaux de bord et reportings automatisés sous Excel.',
      },
      {
        title: 'Equipier polyvalent en restauration',
        organization: 'O\'razur, Chevigny-Saint-Sauveur',
        period: 'Juin 2021 - Septembre 2021',
        description: 'Préparation des plats, gestion des stocks et respect des normes d\'hygiène.',
      },
    ],
    associative: [
      {
        title: 'Parade opératique du millénaire de Caen',
        organization: 'Millénaire de Caen',
        period: '9 mai 2025',
        description: 'Gestion des flux, conseil et accompagnement des spectateurs.',
      },
      {
        title: 'Mission de mentorat',
        organization: 'Association: Demain.org',
        period: '2023 - 2025',
        description: 'Accompagnement de jeunes étudiants dans leur orientation et leur recherche d\'école ou d\'alternance.',
      },
      {
        title: 'Tenu d\'un stand d\'école au salon de l\'étudiant',
        organization: 'Edition 2024 du salon de l\'étudiant de Caen',
        period: 'Décembre 2024',
        description: 'Conseil et accueil de lycéens en recherche de formation.',
      },
      {
        title: 'Mission de soutien scolaire',
        organization: 'Association: AFEV',
        period: 'Janvier à Juin 2021',
        description: 'Aide aux devoirs et soutien scolaire pour un enfant HPI et hyperactif.',
      },
      {
        title: 'Organisation d\'une collecte de nourriture au profit des Restos du cœur',
        organization: 'Restos du cœur',
        period: 'Novembre 2019',
        description: 'Organisation d\'une collecte de produits alimentaires et sensibilisation des élèves à la solidarité.',
      },
    ],
  };

  const categories = [
    { id: 'scolaire' as const, name: 'Scolaire', icon: GraduationCap },
    { id: 'professionnelle' as const, name: 'Professionnelle', icon: Briefcase },
    { id: 'associative' as const, name: 'Associative', icon: Heart },
  ];

  const categoryIntroductions = {
    professionnelle: 'Mes expériences professionnelles reflètent mon évolution progressive dans le développement, la bureautique avancée et le support informatique. Elles démontrent ma capacité à être autonome, rigoureux et à m\'adapter rapidement aux environnements de travail.',
    scolaire: 'Mon parcours scolaire m\'a permis d\'acquérir des bases solides en développement, en gestion et en sciences, renforçant ma polyvalence technique.',
    associative: 'Mes engagements associatifs témoignent de mon sens du service, de ma capacité à accompagner, conseiller et à travailler avec des publics variés.',
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-primary/20 rounded-full"
        />
      </div>

      {/* Header Section */}
      <section className="pt-32 pb-4 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-6xl mb-4">
              {["M", "e", "s", " ", "E", "x", "p", "é", "r", "i", "e", "n", "c", "e", "s"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6"
            >
              Mes expériences regroupent mes missions en entreprise, mon parcours scolaire et mes engagements associatifs. Elles reflètent ma capacité à m&apos;adapter à des environnements variés tout en gardant une approche sérieuse, autonome et orientée résultats.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="pt-0 pb-12 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Category Filters */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant="outline"
                  className={`rounded-full transition-all duration-300 ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 border-primary'
                      : 'border-2 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </motion.div>

          {/* Category Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              {categoryIntroductions[selectedCategory]}
            </p>
          </motion.div>

          {/* Experiences List */}
          <div className="space-y-4">
            {experiences[selectedCategory].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-5 hover:shadow-xl transition-all duration-300 border border-primary/20 bg-background/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium">{experience.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full inline-block md:ml-4">
                      {experience.period}
                    </span>
                  </div>
                  <div className="text-muted-foreground leading-relaxed">
                    {experience.description.split('. ').filter(item => item.trim()).map((item, idx, arr) => (
                      <p key={idx} className={idx < arr.length - 1 ? 'mb-1' : ''}>
                        {item.trim().endsWith('.') ? item.trim() : `${item.trim()}.`}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

