"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Section principale - À propos (prend 7 colonnes sur 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-xl font-bold mb-4 text-foreground bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Antonin Gourinchas
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md">
              Développeur web et mobile passionné, étudiant en Licence STS Développement applicatif web et mobile. 
              Futur créateur d&apos;applications web et mobiles.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/Skrylleur"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                  GitHub
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/antonin-gourinchas/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                  LinkedIn
                </span>
              </Link>
              <Link
                href="mailto:antonin.gourinchas@gmail.com"
                className="group relative p-2 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                  Email
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Section regroupée - Navigation et Liens utiles (prend 5 colonnes sur 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-8"
          >
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Navigation</h3>
              <ul className="space-y-2.5">
                {[
                  { href: "/about", label: "À propos" },
                  { href: "/experiences", label: "Expériences" },
                  { href: "/projects", label: "Projets" },
                  { href: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Liens utiles</h3>
              <ul className="space-y-2.5">
              {[
                { href: "/CV Antonin GOURINCHAS.pdf", label: "Télécharger mon CV", download: true },
                { href: "#", label: "Veille technologique" },
                { href: "#", label: "Mentions légales" },
                { href: "#", label: "Politique de confidentialité" },
              ].map((item, index) => (
                  <li key={index}>
                    {item.download ? (
                      <a
                        href="/CV%20Antonin%20GOURINCHAS.pdf"
                        download="CV Antonin GOURINCHAS.pdf"
                        className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary/10 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Antonin Gourinchas. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

