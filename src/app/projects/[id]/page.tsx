"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ImageWithFallback } from "@/components/figma/ImageWithFallback"
import { ExternalLink, ArrowLeft, Calendar, User, Code2, CheckCircle2, Clock, Check } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useParams } from "next/navigation"
import { projects } from "@/data/projects"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params['id'] as string
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
          <Link href="/projects">
            <Button>Retour aux projets</Button>
          </Link>
        </div>
      </div>
    )
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
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-primary/5 rounded-full"
        />
      </div>
      
      <section className="pt-32 pb-8 px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#afc8ad] bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {project.description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
            {project.websiteUrl ? (
              <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden border-b border-primary/20">
                <iframe
                  src={project.websiteUrl}
                  className="w-full h-full border-0"
                  title={`Aperçu de ${project.title}`}
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="relative h-64 md:h-96 overflow-hidden">
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Client</p>
                      <p className="text-foreground">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Durée</p>
                      <p className="text-foreground">{project.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Statut</p>
                      <div className="flex items-center gap-2">
                        {project.status === "Livré" ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-yellow-500" />
                        )}
                        <p className="text-foreground">{project.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {project.fullDescription && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Description du projet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <Code2 className="w-3 h-3 mr-1" />
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Fonctionnalités</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.websiteUrl && (
                <div className="mt-6">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <Button className="w-full md:w-auto">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visiter le site
                    </Button>
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}

