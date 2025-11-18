"use client";

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, ExternalLink, ArrowRight, Zap, MapPin, Phone } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, text: "Mon mail", link: "mailto:antonin.gourinchas@gmail.com" },
    { icon: Github, text: "Mon compte GitHub", link: "https://github.com/Skrylleur" },
    { icon: Linkedin, text: "Mon Linkedin", link: "https://www.linkedin.com/in/antonin-gourinchas/" },
    { icon: MapPin, text: "Caen, France", link: null }
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
      <section className="pt-32 pb-8 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
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
            </h1>
            <p className="text-xl text-muted-foreground">
              Discutons de vos projets ensemble
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="pt-0 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 bg-background/70 backdrop-blur-xl shadow-xl relative overflow-hidden h-fit">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"
                />
                
                <h3 className="text-2xl mb-6">Informations de Contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/20 transition-all cursor-pointer group ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                      onClick={() => {
                        if (item.link) {
                          if (item.link.startsWith('mailto:') || item.link.startsWith('tel:')) {
                            window.location.href = item.link
                          } else {
                            window.open(item.link, '_blank')
                          }
                        }
                      }}
                    >
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">{item.text}</span>
                      {item.link && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                      )}
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
                    <span className="text-primary">Temps de réponse habituel : moins de 24h</span>
                  </p>
                </motion.div>

                {/* Additional Info */}
                <Separator className="my-6" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg"
                >
                  <h4 className="font-medium mb-3">Pourquoi me contacter ?</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Vous recherchez <span className="text-primary font-medium">votre futur alternant</span> en développement web et mobile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Vous recherchez un <span className="text-primary font-medium">esprit jeune et efficace</span>, prêt à relever de nouveaux défis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Vous souhaitez intégrer un <span className="text-primary font-medium">développeur passionné</span> avec une solide expérience pratique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Vous avez besoin de quelqu&apos;un capable de <span className="text-primary font-medium">s&apos;adapter rapidement</span> et d&apos;apporter des solutions innovantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Vous valorisez l&apos;<span className="text-primary font-medium">autonomie</span> et la <span className="text-primary font-medium">proactivité</span> dans votre équipe</span>
                    </li>
                  </ul>
                </motion.div>
              </Card>
            </motion.div>
            
            {/* Contact Form */}
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

                {/* Form Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4 bg-accent/10 rounded-lg"
                >
                  <p className="text-sm text-muted-foreground text-center">
                    Je réponds généralement dans les 24h. Pour les urgences, n&apos;hésitez pas à me contacter directement par téléphone.
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
