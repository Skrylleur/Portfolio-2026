"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialitePage() {
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
      <section className="pt-32 pb-4 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Politique de Confidentialité
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-0 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  La présente politique de confidentialité décrit la manière dont vos données personnelles sont collectées, utilisées et protégées lorsque vous visitez ce site web.
                </p>
                <p className="mt-4">
                  En utilisant ce site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Responsable du traitement</h2>
                <p>
                  Le responsable du traitement des données personnelles est :
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Antonin Gourinchas</strong><br />
                  Développeur Web & Mobile<br />
                  Email : antonin.gourinchas@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Données collectées</h2>
                <p>
                  Les données personnelles que je peux collecter incluent :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Les informations que vous fournissez volontairement via le formulaire de contact (nom, email, message)</li>
                  <li>Les données de navigation collectées automatiquement (adresse IP, type de navigateur, pages visitées)</li>
                  <li>Les cookies et technologies similaires</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Utilisation des données</h2>
                <p>
                  Vos données personnelles sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Améliorer l&apos;expérience utilisateur du site</li>
                  <li>Analyser l&apos;utilisation du site (statistiques anonymes)</li>
                  <li>Assurer la sécurité et la prévention de la fraude</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Base légale du traitement</h2>
                <p>
                  Le traitement de vos données personnelles est basé sur :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Votre consentement (formulaire de contact)</li>
                  <li>L&apos;intérêt légitime (amélioration du site, statistiques)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Conservation des données</h2>
                <p>
                  Vos données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Partage des données</h2>
                <p>
                  Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers à des fins commerciales. Elles peuvent être partagées uniquement dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour répondre à une obligation légale</li>
                  <li>Avec des prestataires de services techniques (hébergement) sous contrat de confidentialité</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong className="text-foreground">Droit d&apos;accès</strong> : Vous pouvez demander l&apos;accès à vos données personnelles</li>
                  <li><strong className="text-foreground">Droit de rectification</strong> : Vous pouvez demander la correction de données inexactes</li>
                  <li><strong className="text-foreground">Droit à l&apos;effacement</strong> : Vous pouvez demander la suppression de vos données</li>
                  <li><strong className="text-foreground">Droit à la portabilité</strong> : Vous pouvez demander la récupération de vos données</li>
                  <li><strong className="text-foreground">Droit d&apos;opposition</strong> : Vous pouvez vous opposer au traitement de vos données</li>
                  <li><strong className="text-foreground">Droit de limitation</strong> : Vous pouvez demander la limitation du traitement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-moi à : antonin.gourinchas@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies</h2>
                <p>
                  Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Sécurité</h2>
                <p>
                  Je mets en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications</h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est indiquée ci-dessous. Je vous encourage à consulter régulièrement cette page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez me contacter à :
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Email</strong> : antonin.gourinchas@gmail.com
                </p>
              </div>

              <div className="pt-8 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

