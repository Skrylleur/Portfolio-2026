"use client";

import CookieBanner from "./CookieBanner";
import GoogleAnalytics from "./GoogleAnalytics";

export default function CookieConsentProvider() {
  return (
    <>
      <CookieBanner />
      <GoogleAnalytics />
    </>
  );
}

