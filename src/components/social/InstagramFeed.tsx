'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { featuredInstagramPosts } from '@/data/instagramPosts';
import { sections, spacing, typography, layout } from '@/config/styles';
import { scrollAnimations, viewportOptions } from '@/config/animations';

/**
 * InstagramFeed Component
 *
 * Displays curated Instagram posts from NUMUN's Instagram account using Instagram's embed.js.
 * Posts are loaded from the featuredInstagramPosts data file.
 *
 * To update the displayed posts:
 * 1. Edit src/data/instagramPosts.ts
 * 2. Replace the placeholder URLs with actual Instagram post URLs
 */
export default function InstagramFeed() {
  const { t } = useLanguage();

  useEffect(() => {
    // Reprocess Instagram embeds when component mounts or when posts change
    if (typeof window !== 'undefined' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  const handleScriptLoad = () => {
    // Process embeds after Instagram script loads
    if (typeof window !== 'undefined' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  };

  return (
    <>
      <section className={`${sections.contentBeige} ${spacing.section.large}`}>
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={scrollAnimations.fadeIn}
          >
            <h2 className={`${typography.sectionTitle} mb-4`}>
              {t.social.instagramTitle}
            </h2>
            <p className={`${typography.bodyLarge} mb-2`}>
              {t.social.instagramDescription}
            </p>
            <a
              href="https://www.instagram.com/mun.nagoyauniversity/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-numun-green hover:text-numun-green-dark font-semibold transition-colors inline-block"
            >
              {t.social.followUs} →
            </a>
          </motion.div>

          {/* Instagram Posts Grid */}
          <motion.div
            className="flex flex-wrap justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={scrollAnimations.staggerContainer}
          >
            {featuredInstagramPosts.map((post, index) => (
              <motion.div
                key={post.url}
                className="w-full md:w-1/3"
                variants={scrollAnimations.staggerItem}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0',
                    maxWidth: '380px',
                    minWidth: '280px',
                    padding: '0',
                    width: '100%',
                  }}
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%',
                    }}
                  >
                    <div style={{ padding: '40px' }}>
                      <p
                        style={{
                          color: '#3897f0',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '550',
                          lineHeight: '18px',
                        }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </a>
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Load Instagram embed.js script */}
      <Script
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
    </>
  );
}
