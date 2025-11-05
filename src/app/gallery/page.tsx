"use client";

import PageTitle from "@/components/ui/PageTitle";
import { motion } from "framer-motion";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections, spacing } from "@/config/styles";
import GalleryImageCard from "@/components/gallery/GalleryImageCard";
import galleryData from "@/data/gallery.json";

interface GalleryImage {
  id: string;
  name: string;
  url: string;
  year: string;
  event: string;
}

const galleryImages: GalleryImage[] = galleryData;

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />
      <PageTitle>{t.gallery.title}</PageTitle>

      <section className="py-16 bg-white">
        <div className={spacing.container}>
          <p className="text-center text-xl text-gray-600 mb-12">
            {t.gallery.description}
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollAnimations.staggerContainer}
          >
            {galleryImages.map((image) => (
              <GalleryImageCard
                key={image.id}
                id={image.id}
                name={image.name}
                url={image.url}
                year={image.year}
                event={image.event}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
