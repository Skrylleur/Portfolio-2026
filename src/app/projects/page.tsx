"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ImageWithFallback } from "@/components/figma/ImageWithFallback"
import { ExternalLink, Code2, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  // Les 3 projets phares
  const featuredProjects = [
    projects.find(p => p.id === "cabinet-chemin"), // Frontend
    projects.find(p => p.id === "azurimmo-gestion-immobilier"), // Backend
    projects.find(p => p.id === "automatisation-excel-cabinets") // Automatisation
  ].filter(Boolean) as typeof projects

  // Descriptions personnalisées pour les cartes
  const customDescriptions: Record<string, string> = {
    "cabinet-chemin": "Refonte moderne, responsive et optimisée SEO du site d’un cabinet comptable.",
    "azurimmo-gestion-immobilier": "Application complète : mobile Kotlin, web Next.js et API Spring Boot.",
    "automatisation-excel-cabinets": "150+ fichiers automatisés en VBA pour optimiser le traitement des données financières."
  }

  const projectTypes = [
    { 
      label: "Frontend", 
      color: "from-[#afc8ad]/30 to-[#2d4205]/30",
      bgColor: "bg-[#afc8ad]/10",
      borderColor: "border-[#afc8ad]/30",
      textColor: "text-[#2d4205] dark:text-[#afc8ad]"
    },
    { 
      label: "Backend", 
      color: "from-[#afc8ad]/30 to-[#2d4205]/30",
      bgColor: "bg-[#afc8ad]/10",
      borderColor: "border-[#afc8ad]/30",
      textColor: "text-[#2d4205] dark:text-[#afc8ad]"
    },
    { 
      label: "Automatisation", 
      color: "from-[#afc8ad]/30 to-[#2d4205]/30",
      bgColor: "bg-[#afc8ad]/10",
      borderColor: "border-[#afc8ad]/30",
      textColor: "text-[#2d4205] dark:text-[#afc8ad]"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              {["M", "e", "s", " ", "3", " ", "P", "r", "o", "j", "e", "t", "s", " ", "P", "h", "a", "r", "e", "s"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.05,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Voici une sélection de mes projets les plus représentatifs, réalisés en entreprise, en formation ou dans un cadre personnel avancé.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Ils reflètent mon niveau technique, ma rigueur et ma capacité à mener un projet complet du besoin initial jusqu&apos;à la mise en production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => {
              const projectType = projectTypes[index]
              if (!projectType) return null
              return (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/projects/${project.id}`} className="block h-full">
                    <Card className="overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative bg-background/50 backdrop-blur-sm cursor-pointer group-hover:border-primary/50 border-border hover:-translate-y-2">
                      {/* Glowing Border Effect - Toujours visible au hover */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${projectType.color} rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <div className="relative w-full h-full">
                          {project.websiteUrl ? (
                            <iframe
                              src={project.websiteUrl}
                              className="w-full h-full border-0 group-hover:scale-110 transition-transform duration-700"
                              title={`Aperçu du projet ${project.title}`}
                              loading="lazy"
                              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            />
                          ) : (
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          )}
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <CardContent className="p-6 flex-1 flex flex-col relative z-10">
                        {/* Type Label - Visible aussi dans le contenu */}
                        <div className="mb-3">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${projectType.bgColor} ${projectType.borderColor} border`}>
                            <span className={`text-xs font-bold uppercase tracking-wider ${projectType.textColor}`}>
                              {projectType.label}
                            </span>
                          </div>
                        </div>
                        
                        {/* Title and Description */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed line-clamp-4">

                            {customDescriptions[project.id] || project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Code2 className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold">Technologies</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="outline" 
                                className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* View Details Link */}
                        <div className="mt-auto pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                            <span className="text-sm font-medium">Voir les détails</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* View All Projects Button */}
      <section className="px-6 pb-20 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/projects/all">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir mes autres projets
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
