"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Afficher la bannière après un court délai pour une meilleure UX
      setTimeout(() => {
        setShowBanner(true);
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    setIsVisible(false);
    // Déclencher l'événement pour charger Google Analytics
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    setIsVisible(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-background/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-2xl p-6 md:p-8 relative"
            >
              <button
                onClick={handleReject}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Gestion des cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ce site utilise des cookies pour analyser le trafic et améliorer votre expérience. 
                    En acceptant, vous autorisez l&apos;utilisation de Google Analytics. 
                    Vous pouvez consulter notre{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-primary hover:underline font-medium"
                    >
                      politique de confidentialité
                    </Link>
                    {" "}pour plus d&apos;informations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    className="border-primary/20 hover:border-primary/40"
                  >
                    Refuser
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Accepter
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

