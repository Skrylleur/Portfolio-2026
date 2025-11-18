"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-B4DE9DFW56";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Vérifier le consentement au chargement
    const checkConsent = () => {
      if (typeof window !== "undefined") {
        const consent = localStorage.getItem("cookieConsent");
        if (consent === "accepted") {
          setConsentGiven(true);
        }
      }
    };

    checkConsent();

    // Écouter l'événement de consentement
    const handleConsent = () => {
      setConsentGiven(true);
    };

    window.addEventListener("cookieConsentAccepted", handleConsent);

    return () => {
      window.removeEventListener("cookieConsentAccepted", handleConsent);
    };
  }, []);

  if (!consentGiven) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}

