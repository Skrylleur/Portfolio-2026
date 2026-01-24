import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Optimisations d'images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimisations de sécurité
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },

  // Optimisations de build
  compress: true,
  
  // Optimisations de webpack
  webpack: (config, { dev, isServer }) => {
    // Exclure le dossier "dossier sans titre" du build
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    // Exclure le dossier "dossier sans titre" de tous les loaders
    const excludePattern = /dossier sans titre/;
    config.module.rules.forEach((rule: any) => {
      if (rule.exclude) {
        if (Array.isArray(rule.exclude)) {
          rule.exclude.push(excludePattern);
        } else {
          rule.exclude = [rule.exclude, excludePattern];
        }
      } else {
        rule.exclude = excludePattern;
      }
    });

    // Optimisations pour la production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },

  // Optimisations de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuration Turbopack (requis pour Next.js 16)
  turbopack: {},
};

export default nextConfig;
