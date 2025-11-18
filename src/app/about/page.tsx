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
      skills: [
        { name: "HTML", level: 85, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "CSS", level: 80, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "React", level: 75, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "TypeScript", level: 70, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "Next.js", level: 75, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "Tailwind CSS", level: 75, color: "from-[#afc8ad] to-[#2d4205]" }
      ]
    },
    {
      name: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 70, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "PHP", level: 65, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "Python", level: 65, color: "from-[#afc8ad] to-[#2d4205]" }
      ]
    },
    {
      name: "Base de données",
      icon: Database,
      skills: [
        { name: "SQL", level: 75, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "PrismaORM", level: 70, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "SQLite", level: 65, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "phpMyAdmin", level: 60, color: "from-[#afc8ad] to-[#2d4205]" }
      ]
    },
    {
      name: "Outils & Automatisation",
      icon: Wrench,
      skills: [
        { name: "Excel", level: 85, color: "from-[#afc8ad] to-[#2d4205]" },
        { name: "VBA", level: 80, color: "from-[#afc8ad] to-[#2d4205]" }
      ]
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
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative Quote Marks */}
          <div className="absolute -top-8 left-8 text-6xl text-primary/10 select-none">&ldquo;</div>
          <div className="absolute -bottom-8 right-8 text-6xl text-primary/10 select-none rotate-180">&rdquo;</div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
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
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Passionné par le développement depuis plus de 5 ans, je me spécialise dans la création 
                de solutions web modernes et l&apos;automatisation de processus métier.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mon expertise couvre le développement frontend avec <span className="text-primary">React et TypeScript</span>, 
                la création d&apos;APIs robustes, et l&apos;automatisation Excel avec <span className="text-primary">VBA</span> pour optimiser 
                vos workflows.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Que ce soit pour créer votre présence en ligne ou automatiser vos tâches répétitives, 
                je m&apos;engage à livrer des <span className="text-primary">solutions de qualité</span> qui répondent à vos besoins spécifiques.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative">
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
          
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  </div>
                  <div className="space-y-4 pl-8">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:shadow-lg`}
                          />
                        </div>
                      </motion.div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all border border-primary/10"
              >
                <Languages className="w-6 h-6 text-primary" />
                <div className="text-center">
                  <div className="font-semibold text-foreground mb-1">{language.name}</div>
                  <div className="text-sm text-muted-foreground">{language.level}</div>
                </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Mes Passions</h2>
            <p className="text-lg text-muted-foreground">
              Ce qui m&apos;anime en dehors du développement
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
