"use client";

import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollAnimations, hoverAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const galleryImages = [
  "/images/gallery/L1008928.jpg",
  "/images/gallery/L1008932.jpg",
  "/images/gallery/L1008934.jpg",
  "/images/gallery/L1008935.jpg",
  "/images/gallery/L1008938.jpg",
  "/images/gallery/SNY00059.jpg",
  "/images/gallery/SNY00062.jpg",
  "/images/gallery/SNY00065.jpg",
  "/images/gallery/SNY00071.jpg",
  "/images/gallery/SNY00077.jpg",
  "/images/gallery/SNY00092.jpg",
  "/images/gallery/SNY00095.jpg",
  "/images/gallery/SNY00097.jpg",
  "/images/gallery/SNY00112.jpg",
  "/images/gallery/SNY00114.jpg",
  "/images/gallery/SNY00117.jpg",
  "/images/gallery/SNY00119.jpg",
  "/images/gallery/SNY00124.jpg",
  "/images/gallery/SNY00126.jpg",
  "/images/gallery/SNY00129.jpg",
  "/images/gallery/SNY00131.jpg",
  "/images/gallery/SNY00135.jpg",
  "/images/gallery/SNY00139.jpg",
  "/images/gallery/SNY00142.jpg",
  "/images/gallery/SNY00145.jpg",
  "/images/gallery/SNY00149.jpg",
  "/images/gallery/SNY00152.jpg",
  "/images/gallery/SNY00164.jpg",
  "/images/gallery/SNY00912.jpg",
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <PageTitle>{t.gallery.title}</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                variants={scrollAnimations.staggerItem}
                whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoom}
              >
                <Image
                  src={image}
                  alt={`${t.gallery.photoAlt} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
