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
                  <li>Les informations que vous fournissez volontairement via le formulaire de contact (nom, email, sujet, message)</li>
                  <li>Les données de navigation collectées automatiquement via Google Analytics (uniquement avec votre consentement) : adresse IP anonymisée, type de navigateur, pages visitées, durée de visite, source de trafic</li>
                  <li>Les cookies et technologies similaires (uniquement avec votre consentement)</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Important</strong> : Les données analytiques ne sont collectées qu&apos;après votre consentement explicite via la bannière de cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Utilisation des données</h2>
                <p>
                  Vos données personnelles sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Répondre à vos demandes de contact (formulaire de contact via Formspree)</li>
                  <li>Améliorer l&apos;expérience utilisateur du site</li>
                  <li>Analyser l&apos;utilisation du site via Google Analytics (uniquement avec votre consentement) pour comprendre comment les visiteurs utilisent le site et améliorer son contenu</li>
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
                  <li>Avec des prestataires de services techniques sous contrat de confidentialité :
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong className="text-foreground">Formspree</strong> : pour le traitement des formulaires de contact (données : nom, email, sujet, message)</li>
                      <li><strong className="text-foreground">Google Analytics</strong> : pour l&apos;analyse du trafic (uniquement avec votre consentement, données anonymisées)</li>
                      <li><strong className="text-foreground">Netlify</strong> : pour l&apos;hébergement du site</li>
                    </ul>
                  </li>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies et technologies de suivi</h2>
                <p>
                  Ce site utilise des cookies et technologies similaires uniquement avec votre consentement explicite.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.1. Gestion du consentement</h3>
                <p>
                  Lors de votre première visite, une bannière vous permet de choisir d&apos;accepter ou de refuser les cookies analytiques. Votre choix est enregistré dans votre navigateur (localStorage) et ne vous sera plus redemandé lors de vos prochaines visites.
                </p>
                <p className="mt-4">
                  Vous pouvez modifier votre choix à tout moment en supprimant les données de votre navigateur ou en me contactant.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.2. Cookies utilisés</h3>
                <p className="mb-3">
                  <strong className="text-foreground">Cookies analytiques (Google Analytics)</strong> :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ces cookies sont utilisés uniquement si vous acceptez la bannière de consentement</li>
                  <li>Ils permettent d&apos;analyser l&apos;utilisation du site (pages visitées, durée de visite, source de trafic)</li>
                  <li>Les données sont anonymisées et agrégées</li>
                  <li>Service utilisé : Google Analytics (ID de mesure : G-B4DE9DFW56)</li>
                  <li>Politique de confidentialité de Google : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.3. Cookies techniques</h3>
                <p>
                  Certains cookies techniques peuvent être nécessaires au fonctionnement du site (mémorisation de vos préférences de consentement). Ces cookies ne nécessitent pas de consentement préalable.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.4. Gestion des cookies dans votre navigateur</h3>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, cela peut affecter certaines fonctionnalités du site. Pour plus d&apos;informations sur la gestion des cookies :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2d9463b5390a" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Google Analytics</h2>
                <p>
                  Ce site utilise Google Analytics, un service d&apos;analyse web fourni par Google LLC (&quot;Google&quot;), uniquement avec votre consentement explicite.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.1. Données collectées par Google Analytics</h3>
                <p>
                  Google Analytics utilise des cookies pour analyser votre utilisation du site. Les informations générées par ces cookies concernant votre utilisation du site (y compris votre adresse IP anonymisée) sont transmises et stockées par Google sur des serveurs situés aux États-Unis.
                </p>
                <p className="mt-4">
                  Les données collectées incluent :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
                  <li>Type d&apos;appareil et navigateur utilisé</li>
                  <li>Localisation géographique approximative (pays, ville)</li>
                  <li>Adresse IP (anonymisée)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.2. Utilisation des données</h3>
                <p>
                  Google utilise ces données pour évaluer l&apos;utilisation du site, compiler des rapports sur l&apos;activité du site et fournir d&apos;autres services liés à l&apos;activité du site et à l&apos;utilisation d&apos;Internet.
                </p>
                <p className="mt-4">
                  Google peut également transmettre ces informations à des tiers lorsque la loi l&apos;exige ou lorsque ces tiers traitent ces informations pour le compte de Google.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10.3. Désactivation de Google Analytics</h3>
                <p>
                  Vous pouvez refuser l&apos;utilisation de cookies Google Analytics en refusant la bannière de consentement lors de votre première visite, ou en installant le module complémentaire de navigateur disponible à l&apos;adresse suivante : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>
                </p>
                <p className="mt-4">
                  Pour plus d&apos;informations sur la manière dont Google utilise vos données, consultez la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">politique de confidentialité de Google</a> et les <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">conditions d&apos;utilisation de Google Analytics</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Sécurité</h2>
                <p>
                  Je mets en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
                </p>
                <p className="mt-4">
                  Les données transmises via le formulaire de contact sont sécurisées via HTTPS et traitées par Formspree, qui utilise des mesures de sécurité conformes aux standards de l&apos;industrie.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Modifications</h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est indiquée ci-dessous. Je vous encourage à consulter régulièrement cette page.
                </p>
                <p className="mt-4">
                  En cas de modification substantielle, je vous en informerai par un avis sur le site ou par email si vous avez fourni votre adresse email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact</h2>
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

