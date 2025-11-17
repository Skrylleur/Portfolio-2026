"use client";

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Globe, Code, Smartphone, FileSpreadsheet } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function ServicesPage() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const services = [
    {
      icon: Globe,
      title: "Sites Internet",
      description: "Création de sites web modernes, responsives et optimisés pour votre présence digitale.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-[#afc8ad]/10 to-[#2d4205]/10",
      iconColor: "text-[#2d4205]"
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
      </div>

      {/* Header Section */}
      <section className="py-32 px-6 relative">
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
            <h1 className="text-5xl md:text-6xl mb-6">
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
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions sur mesure pour développer votre activité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* First Row - 4 Compact Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            {(() => {
              const selectedService = services[selectedServiceIndex];
              if (!selectedService) return null;
              
              const IconComponent = selectedService.icon;
              
              return (
                <motion.div
                  key={`service-${selectedServiceIndex}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <Card className={`p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${selectedService.gradient} relative overflow-hidden`}>
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
                        <IconComponent className={`w-12 h-12 ${selectedService.iconColor}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-3xl mb-4 text-primary font-bold">
                          {selectedService.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {selectedService.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {selectedService.technologies.map((tech, techIndex) => (
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
              );
            })()}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 relative" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
            © 2025 Antonin GOURINCHAS. Développeur Full-Stack Web, mobile & VBA.
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
