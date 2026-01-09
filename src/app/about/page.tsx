"use client";

import { motion } from "framer-motion"
import { Target, Users, Zap, Code, Database, Wrench, Camera, Film, Bike, Activity, Waves, Mountain, Sailboat, Languages } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function AboutPage() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"]
    },
    {
      name: "Backend",
      icon: Database,
      skills: ["Java Spring Boot", "Node.js", "PHP"]
    },
    {
      name: "Base de données",
      icon: Database,
      skills: ["SQL", "PrismaORM", "SQLite", "MySQL / phpMyAdmin"]
    },
    {
      name: "Automatisation",
      icon: Wrench,
      skills: ["Excel", "VBA", "Scripts d'automatisation"]
    }
  ]

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Moyen" },
    { name: "Espagnol", level: "Moyen" },
    { name: "Portugais", level: "En apprentissage" }
  ]

  const passions = {
    sport: [
      { name: "Vélo", icon: Bike },
      { name: "Course à pied", icon: Activity },
      { name: "Natation", icon: Waves },
      { name: "Triathlon", icon: Zap },
      { name: "Randonnée", icon: Mountain },
      { name: "Kayak en club", icon: Sailboat }
    ],
    autres: [
      { name: "Cinéma", icon: Film },
      { name: "Photographie", icon: Camera }
    ]
  }

  const stats = [
    { icon: Target, value: "170+", label: "Projets Réalisés" },
    { icon: Users, value: "5+", label: "Clients Satisfaits" },
    { icon: Zap, value: "3+", label: "Années d'Expérience" }
  ]

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
      <section className="pt-32 pb-12 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-8">
              {["À", " ", "P", "r", "o", "p", "o", "s"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
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
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Passionné par le développement depuis plus de 3 ans, je conçois des solutions web modernes et des outils d&apos;automatisation fiables pour optimiser les processus métier.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mon expertise combine le développement front-end (React, Next.js, TypeScript), le back-end (Java Spring Boot, Node.js, PHP) et l&apos;automatisation avancée avec VBA, que j&apos;ai utilisée pour créer plus de 150 outils professionnels en cabinet comptable.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Je travaille avec une approche méthodique et orientée résultats : comprendre un besoin, proposer une solution claire, développer proprement et livrer un produit efficace. Cette rigueur, je l&apos;ai développée à travers mes projets clients, mes alternances et mes projets personnels.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Je suis autonome, sérieux et habitué à gérer des projets du besoin initial jusqu’à la mise en production.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Aujourd&apos;hui, je cherche à rejoindre une entreprise pour poursuivre mon parcours en bachelor développeur web, progresser aux côtés de professionnels expérimentés et contribuer à des projets concrets avec sérieux, autonomie et motivation.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-8 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-3xl mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent font-bold"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Compétences Techniques</h2>
            <p className="text-lg text-muted-foreground">
              Mon expertise couvre un large éventail de technologies modernes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              const isLastCategory = categoryIndex === skillCategories.length - 1
              return (
                <motion.div
                  key={category.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`space-y-4 ${isLastCategory ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 min-h-[60px]">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Langues</h2>
            <p className="text-lg text-muted-foreground">
              Mes compétences linguistiques
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 hover:bg-primary/10 hover:border-primary/30 transition-colors"
              >
                <Languages className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{language.name}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{language.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Mes Passions</h2>
            <p className="text-lg text-muted-foreground mb-4">
              En dehors du développement, je pratique des activités qui renforcent ma discipline, ma persévérance et mon équilibre personnel.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Sport */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Bike className="w-5 h-5 text-primary" />
                Sport
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {passions.sport.map((passion, index) => {
                  const IconComponent = passion.icon
                  return (
                    <motion.div
                      key={passion.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all border border-primary/10"
                    >
                      <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{passion.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Autres */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                Autres
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {passions.autres.map((passion, index) => {
                  const IconComponent = passion.icon
                  return (
                    <motion.div
                      key={passion.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all border border-primary/10"
                    >
                      <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{passion.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
