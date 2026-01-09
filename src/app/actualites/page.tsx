'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Images du carrousel
const carouselImages = [
  '/Carrousel LinkedIn - recherche alternance décembre 2025/1.png',
  '/Carrousel LinkedIn - recherche alternance décembre 2025/2.png',
  '/Carrousel LinkedIn - recherche alternance décembre 2025/3.png',
  '/Carrousel LinkedIn - recherche alternance décembre 2025/4.png',
  '/Carrousel LinkedIn - recherche alternance décembre 2025/5.png',
  '/Carrousel LinkedIn - recherche alternance décembre 2025/6.png',
];

export default function ActualitesPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const today = new Date().toISOString().split('T')[0] as string;

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
                  Recherche active d&apos;une alternance pour la rentrée de septembre 2026
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(today)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Je recherche activement une alternance pour la rentrée de septembre 2026 dans le cadre de mon <strong className="text-foreground">bachelor développeur web</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Passionné par le développement web depuis plusieurs années, je souhaite rejoindre une entreprise qui me permettra de mettre en pratique mes compétences techniques tout en continuant ma formation. Mon parcours m&apos;a permis d&apos;acquérir une solide expérience en développement front-end (React, Next.js, TypeScript) et back-end (Java Spring Boot, Node.js, PHP), ainsi qu&apos;en automatisation avec VBA.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Je suis autonome, rigoureux et motivé à contribuer à des projets concrets. Si votre entreprise recherche un alternant développeur web pour septembre 2026, je serais ravi d&apos;échanger avec vous !
                  </p>
                </div>

                {/* Carousel */}
                <div className="mt-8">
                  <Carousel images={carouselImages} alt="Carrousel recherche alternance" />
                </div>
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
