"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ImageWithFallback } from "@/components/figma/ImageWithFallback"
import { Code, Globe, Smartphone, FileSpreadsheet, Mail, Github, Linkedin, ExternalLink, ChevronDown, ArrowRight, Zap, Target, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Sites Internet",
      description: "Création de sites web modernes, responsives et optimisés pour votre présence digitale.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600"
    },
    {
      icon: FileSpreadsheet,
      title: "Automatisations Excel",
      description: "Développement de macros VBA et automatisations pour optimiser vos processus métier.",
      technologies: ["VBA", "Excel", "Power Query", "Power Automate"],
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600"
    },
    {
      icon: Code,
      title: "APIs & Backend",
      description: "Conception d'APIs robustes et de solutions backend pour vos applications.",
      technologies: ["Node.js", "Python", "PostgreSQL", "REST"],
      gradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-600"
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles cross-platform performantes.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      gradient: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600"
    }
  ]

  // Auto-play effect for services
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setSelectedServiceIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [autoPlay, services.length])

  const projects = [
    {
      title: "E-commerce Modern",
      description: "Plateforme e-commerce complète avec gestion des stocks et paiements",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      color: "blue"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface de gestion avec tableaux de bord interactifs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Node.js"],
      link: "#",
      color: "purple"
    },
    {
      title: "Automatisation RH",
      description: "Suite d'outils Excel pour la gestion des ressources humaines",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["VBA", "Excel", "Power BI"],
      link: "#",
      color: "green"
    }
  ]

  const stats = [
    { icon: Target, value: "50+", label: "Projets Réalisés" },
    { icon: Users, value: "30+", label: "Clients Satisfaits" },
    { icon: Zap, value: "5+", label: "Années d'Expérience" }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
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

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-xl relative"
            >
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Antonin GOURINCHAS
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent"
              />
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Services", "Projets", "À propos", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-").replace("à", "a")}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Decorative Elements */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-32 h-32 border border-primary/20 rounded-full"
            />
          </div>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 relative"
          >
            {/* Code Symbols Animation */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              {["<", "/", ">"].map((symbol, index) => (
                <motion.span
                  key={symbol}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="text-6xl md:text-8xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  {symbol}
                </motion.span>
              ))}
            </div>
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
            <span className="text-primary">Spécialisé</span> dans la création de sites web modernes et l'automatisation de vos processus métier.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="text-lg px-8 py-6 rounded-full group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Découvrir mes services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
              />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full group border-2 hover:border-primary/50">
              <span className="flex items-center gap-2">
                Voir mes projets
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
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
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  className="text-2xl mb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </motion.div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-12">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="w-0.5 bg-gradient-to-b from-primary to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Parallax Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-12 w-2 h-2 bg-primary rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/4 right-12 w-3 h-3 border border-primary rounded-full opacity-40"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-dotted border-primary/30 rounded-full"
              />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              {["M", "e", "s", " ", "S", "e", "r", "v", "i", "c", "e", "s"].map((letter, index) => (
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
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions sur mesure pour développer votre activité
            </p>
          </motion.div>
          
          {/* Dynamic Services Layout */}
          <div className="space-y-8">
            {/* First Row - 4 Compact Service Cards */}
            <div className="grid grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => {
                    setSelectedServiceIndex(index)
                    setAutoPlay(false) // Stop auto-play when user interacts
                    
                    // Restart auto-play after 10 seconds of inactivity
                    setTimeout(() => {
                      setAutoPlay(true)
                    }, 10000)
                  }}
                  className="group relative cursor-pointer"
                >
                  <Card className={`p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${service.gradient} h-full relative overflow-hidden ${selectedServiceIndex === index ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
                    {/* Animated Border */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <div className="text-center relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 rounded-2xl bg-gradient-to-br from-background to-accent/50 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      >
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </motion.div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Second Row - Detailed Service Card */}
            <motion.div
              key={`service-${selectedServiceIndex}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Card className={`p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${services[selectedServiceIndex].gradient} relative overflow-hidden`}>
                {/* Animated Border */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-background to-accent/50 flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {(() => {
                      const selectedService = services[selectedServiceIndex];
                      const IconComponent = selectedService.icon;
                      return <IconComponent className={`w-12 h-12 ${selectedService.iconColor}`} />;
                    })()}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-3xl mb-4 text-primary font-bold">
                      {services[selectedServiceIndex].title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {services[selectedServiceIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {services[selectedServiceIndex].technologies.map((tech, techIndex) => (
                        <motion.div
                          key={`${selectedServiceIndex}-${tech}`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        >
                          <Badge variant="secondary" className="text-sm hover:bg-primary/10 transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-32 px-6 bg-gradient-to-br from-accent/5 to-background relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              {["P", "r", "o", "j", "e", "t", "s", " ", "R", "é", "c", "e", "n", "t", "s"].map((letter, index) => (
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
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quelques réalisations qui illustrent mon expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                  {/* Glowing Border Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="relative bg-background rounded-lg">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Floating Action Button */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          size="icon"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform group-hover:scale-110"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </motion.div>

                      {/* Project Number */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <div className="p-6 relative">
                      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="text-xs hover:bg-primary/5 transition-colors">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Progress Indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative Quote Marks */}
          <div className="absolute -top-8 left-8 text-6xl text-primary/10 select-none">"</div>
          <div className="absolute -bottom-8 right-8 text-6xl text-primary/10 select-none rotate-180">"</div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl mb-8">
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
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Passionné par le développement depuis plus de 5 ans, je me spécialise dans la création 
                de solutions web modernes et l'automatisation de processus métier.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Mon expertise couvre le développement frontend avec <span className="text-primary">React et TypeScript</span>, 
                la création d'APIs robustes, et l'automatisation Excel avec <span className="text-primary">VBA</span> pour optimiser 
                vos workflows.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Que ce soit pour créer votre présence en ligne ou automatiser vos tâches répétitives, 
                je m'engage à livrer des <span className="text-primary">solutions de qualité</span> qui répondent à vos besoins spécifiques.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-primary/3 to-accent/10 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              {["C", "o", "n", "t", "a", "c", "t", "e", "z", "-", "m", "o", "i"].map((letter, index) => (
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
                  {letter === "-" ? "\u2013" : letter}
                </motion.span>
              ))}
            </h2>
            <p className="text-xl text-muted-foreground">
              Discutons de votre projet ensemble
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 bg-background/70 backdrop-blur-xl shadow-xl relative overflow-hidden">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"
                />
                
                <h3 className="text-2xl mb-6">Informations</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: "antonin.gourinchas@email.com" },
                    { icon: Github, text: "github.com/antonin-gourinchas" },
                    { icon: Linkedin, text: "linkedin.com/in/antonin-gourinchas" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/20 transition-all cursor-pointer group"
                    >
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Disponibilité
                  </h4>
                  <p className="text-muted-foreground">
                    Actuellement disponible pour de nouveaux projets. 
                    <br />
                    <span className="text-primary">Temps de réponse habituel : 24h</span>
                  </p>
                </motion.div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 bg-background/70 backdrop-blur-xl shadow-xl">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Envoyez un message
                </h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Input placeholder="Nom" className="border-primary/20 focus:border-primary" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Input placeholder="Email" type="email" className="border-primary/20 focus:border-primary" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Input placeholder="Sujet" className="border-primary/20 focus:border-primary" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Textarea placeholder="Votre message..." rows={4} className="border-primary/20 focus:border-primary resize-none" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button className="w-full group relative overflow-hidden">
                      <span className="relative z-10 flex items-center center gap-2">
                        Envoyer le message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                      />
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              © 2025 Antonin GOURINCHAS. Développeur Web & VBA.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            />
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
