'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface LinkedInPostProps {
  url: string;
}

function LinkedInPost({ url }: LinkedInPostProps) {
  // Extraire l'ID du post depuis l'URL LinkedIn
  const extractPostInfo = (linkedinUrl: string): { id: string; type: 'activity' | 'ugcPost' } | null => {
    // Essayer d'abord avec activity-
    const activityMatch = linkedinUrl.match(/activity-(\d+)/);
    if (activityMatch && activityMatch[1]) {
      return { id: activityMatch[1], type: 'activity' };
    }
    
    // Ensuite avec ugcPost-
    const ugcPostMatch = linkedinUrl.match(/ugcPost-(\d+)/);
    if (ugcPostMatch && ugcPostMatch[1]) {
      return { id: ugcPostMatch[1], type: 'ugcPost' };
    }
    
    return null;
  };

  const postInfo = extractPostInfo(url);
  
  // URL d'embed LinkedIn
  const embedUrl = postInfo 
    ? `https://www.linkedin.com/embed/feed/update/urn:li:${postInfo.type}:${postInfo.id}`
    : null;

  return (
    <div className="border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
      {embedUrl ? (
        <div className="relative w-full" style={{ minHeight: '400px' }}>
          <iframe
            src={embedUrl}
            className="w-full border-0"
            style={{ minHeight: '400px', height: 'auto' }}
            title="Post LinkedIn"
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">AG</span>
            </div>
            <div>
              <div className="font-semibold text-foreground">Antonin Gourinchas</div>
              <div className="text-xs text-muted-foreground">LinkedIn</div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-4">
              Ce post est disponible sur LinkedIn. Cliquez sur le lien ci-dessous pour le consulter.
            </p>
          </div>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            Voir le post sur LinkedIn
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      )}
      <div className="p-4 border-t border-primary/20 bg-background/50">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Voir le post original sur LinkedIn
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

export default function ActualitesPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
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
              En ce moment
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Card Section */}
      <section className="pt-0 pb-12 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-primary/20 bg-background/50 backdrop-blur-sm">
              {/* Title and Date */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  À la recherche de ma prochaine aventure en alternance
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate('2025-01-15')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <LinkedInPost url="https://www.linkedin.com/posts/antonin-gourinchas_recherche-dune-alternance-en-d%C3%A9veloppement-activity-7399108416939376640-1wqb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEevNoBP1fZg15DbR22kn2RUTVtoUGQBFU" />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-4 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Link href="/blog">
              <Button
                size="lg"
                variant="gradient"
                className="group"
              >
                Découvrir toutes mes actualités
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
