"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ExternalLink } from "lucide-react";
import { posts } from "@/data/posts";
import Link from "next/link";

interface LinkedInPostProps {
  url: string;
}

function LinkedInPost({ url }: LinkedInPostProps) {
  // Extraire l'ID du post depuis l'URL LinkedIn
  const extractPostInfo = (linkedinUrl: string): { id: string; type: 'activity' | 'ugcPost' } | null => {
    // Essayer d'abord avec activity-
    const activityMatch = linkedinUrl.match(/activity-(\d+)/);
    if (activityMatch) {
      return { id: activityMatch[1], type: 'activity' };
    }
    
    // Ensuite avec ugcPost-
    const ugcPostMatch = linkedinUrl.match(/ugcPost-(\d+)/);
    if (ugcPostMatch) {
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
  // Trier les posts par date (plus récent en premier)
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
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
              Mes Actualités
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez mes dernières actualités, réflexions et partages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="pt-0 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {sortedPosts.length === 0 ? (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                Aucun post pour le moment. Revenez bientôt !
              </p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-primary/20 bg-background/50 backdrop-blur-sm">
                    {/* Title and Date */}
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{formatDate(post.date)}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      {post.type === "text" && post.content ? (
                        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                          {post.content.split('\n').map((paragraph, idx) => {
                            // Remplacer "me contacter" par un lien vers la page de contact
                            const parts = paragraph.split(/(me contacter)/i);
                            return (
                              <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                                {parts.map((part, partIdx) => {
                                  if (part.toLowerCase() === 'me contacter') {
                                    return (
                                      <Link
                                        key={partIdx}
                                        href="/contact"
                                        className="font-bold text-primary hover:text-primary/80 underline transition-colors"
                                      >
                                        me contacter
                                      </Link>
                                    );
                                  }
                                  return <span key={partIdx}>{part}</span>;
                                })}
                              </p>
                            );
                          })}
                        </div>
                      ) : post.type === "linkedin" && post.linkedinUrl ? (
                        <LinkedInPost url={post.linkedinUrl} />
                      ) : null}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

