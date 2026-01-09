"use client";

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState, useCallback } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { ChevronDown, ArrowRight, Zap, Target, Users, Download } from "lucide-react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const stats = [
    { icon: Target, value: "170+", label: "Projets réalisés" },
    { icon: Users, value: "5+", label: "Clients satisfaits" },
    { icon: Zap, value: "3+", label: "Années d'expérience" }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating Geometric Shapes */}
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

        {/* Nouveau carré gris mouvant */}
        <motion.div
          animate={{ 
            rotate: 180,
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-gray-400 to-white rounded-lg shadow-lg opacity-40"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(90deg, currentColor 1px, transparent 1px),
                   linear-gradient(180deg, currentColor 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }} 
          />
        </div>

        {/* Cursor Follower */}
        <motion.div
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="absolute w-48 h-48 bg-gradient-radial from-primary/5 to-transparent rounded-full pointer-events-none opacity-60"
        />
      </div>

      <Navigation />

      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Decorative Elements */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2" aria-hidden="true">
            <motion.div
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-32 h-32 border border-primary/20 rounded-full"
            />
          </div>
          
          {/* Nom et Prénom */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              {/* Animation de frappe pour "Bonjour, je suis " */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-block"
              >
                Bonjour, je suis
              </motion.span>
              
              {/* Espace entre les deux éléments */}
              <span>{" "}</span>
              
              {/* Animation de révélation pour le nom */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="relative inline-block"
              >
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                  Antonin GOURINCHAS
                </span>
                
                {/* Ligne de surlignage qui apparaît progressivement */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                />
                
                {/* Effet de pulsation subtile */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg -z-10"
                />
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl md:text-7xl mb-6"
          >
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Développeur Web & VBA
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Je transforme vos idées en solutions digitales innovantes. 
            <br />
            <span className="text-primary">Spécialisé</span> dans la création de sites web modernes et l&apos;automatisation de vos processus métier.
            <br />
            <span className="text-primary">Je recherche un entreprise</span> pour m'accompagner dans mon bachelor développeur web.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full group border-2 hover:border-primary/50">
              <a href="/projects" className="flex items-center gap-2" aria-label="Voir mes projets">
                Voir mes projets
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>

          {/* Télécharger CV */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center mb-16"
          >
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full group text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              <a href="/CV%20Antonin%20GOURINCHAS.pdf" download="CV Antonin GOURINCHAS.pdf" className="flex items-center gap-2" aria-label="Télécharger mon CV">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                Télécharger mon CV
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
            role="region"
            aria-label="Statistiques professionnelles"
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
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors"
                  aria-hidden="true"
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  className="text-2xl mb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>

        {/* Parallax Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-12 w-2 h-2 bg-primary rounded-full opacity-60"
          aria-hidden="true"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/4 right-12 w-3 h-3 border border-primary rounded-full opacity-40"
          aria-hidden="true"
        />
      </main>

      <Footer />
    </div>
  )
}
