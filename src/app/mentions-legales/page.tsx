"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
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
              Mentions Légales
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
                <p>
                  Ce <strong className="text-foreground">portfolio</strong> est édité par :
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Antonin Gourinchas</strong><br />
                  Développeur Web & Mobile<br />
                  Email : antonin.gourinchas@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Hébergement</h2>
                <p>
                  Ce site est hébergé par :
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Netlify</strong><br />
                  Netlify, Inc.<br />
                  44 Montgomery Street, Suite 300<br />
                  San Francisco, CA 94104<br />
                  États-Unis
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mt-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse de l&apos;éditeur du site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Données personnelles</h2>
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
                </p>
                <p className="mt-4">
                  Pour exercer ce droit, vous pouvez me contacter à l&apos;adresse suivante : antonin.gourinchas@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Liens externes</h2>
                <p>
                  Le site peut contenir des liens vers d&apos;autres sites. L&apos;éditeur du site n&apos;a aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation de responsabilité</h2>
                <p>
                  L&apos;éditeur du site s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                </p>
                <p className="mt-4">
                  Toutefois, l&apos;éditeur ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site. En conséquence, l&apos;éditeur décline toute responsabilité pour tout dommage résultant d&apos;une imprécision, d&apos;une inexactitude ou d&apos;une omission portant sur des informations disponibles sur ce site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Droit applicable</h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
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

