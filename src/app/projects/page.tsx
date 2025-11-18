"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ImageWithFallback } from "@/components/figma/ImageWithFallback"
import { ExternalLink, Github, Calendar, User, Code2, CheckCircle2, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState } from "react"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all")

  const filters = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "apis", label: "APIs" },
    { id: "automation", label: "Automatisation" }
  ]

  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => {
        const categories = Array.isArray(project.category) ? project.category : [project.category]
        return categories.includes(selectedFilter)
      })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

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
      <section className="pt-32 pb-4 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-dotted border-primary/30 rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl mb-4">
              {["M", "e", "s", " ", "P", "r", "o", "j", "e", "t", "s"].map((letter, index) => (
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
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes réalisations et l&apos;expertise que je mets au service de vos projets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-6 mb-12 relative pt-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className={`rounded-full transition-all duration-300 ${
                  selectedFilter === filter.id 
                    ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90" 
                    : "border-2 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`} className="block h-full">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative bg-background/50 backdrop-blur-sm cursor-pointer">
                  {/* Glowing Border Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  />
                  
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge 
                        className={`${
                          project.status === 'Livré' 
                            ? 'bg-[#2d4205] text-white border-0' 
                            : 'bg-orange-500/90 text-white border-0'
                        } flex items-center gap-1.5`}
                      >
                        {project.status === 'Livré' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {project.status}
                      </Badge>
                    </div>

                    {/* Project Image */}
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
                      
                      {/* Visit Button */}
                      {project.websiteUrl && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileHover={{ scale: 1.1, rotate: 0 }}
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.open(project.websiteUrl || '', '_blank')
                          }}
                        >
                          <Button
                            size="lg"
                            className="rounded-full shadow-xl"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open(project.websiteUrl || '', '_blank')
                            }}
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Visiter le site
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Title and Description */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4 text-primary" />
                        <span className="truncate">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline" 
                            className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground line-clamp-1">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      {project.features.length > 4 && (
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          +{project.features.length - 4} fonctionnalités supplémentaires
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                Aucun projet trouvé pour ce filtre
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
