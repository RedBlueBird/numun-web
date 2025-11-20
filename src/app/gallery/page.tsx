"use client";

import { useState, useMemo } from "react";
import PageTitle from "@/components/ui/PageTitle";
import { motion } from "framer-motion";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections, spacing } from "@/config/styles";
import GalleryImageCard from "@/components/gallery/GalleryImageCard";
import GalleryEventCard from "@/components/gallery/GalleryEventCard";
import galleryData from "@/data/gallery copy.json";

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
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  // Get unique events from the gallery data
  const uniqueEvents = useMemo(() => {
    const events = new Set<string>();
    galleryImages.forEach((image) => events.add(image.event));
    return Array.from(events);
  }, []);

  // Get the first image for each event
  const getFirstImageForEvent = (eventName: string): string => {
    const firstImage = galleryImages.find((image) => image.event === eventName);
    return firstImage?.url || "";
  };

  // Get images for the selected event
  const filteredImages = useMemo(() => {
    if (!selectedEvent) return [];
    return galleryImages.filter((image) => image.event === selectedEvent);
  }, [selectedEvent]);

  // Get display name for event using translations
  const getEventDisplayName = (eventName: string): string => {
    // Type assertion to access the event translations dynamically
    const eventKey = eventName as keyof typeof t.gallery.events;
    return t.gallery.events[eventKey] || eventName;
  };

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

          {/* Show event cards when no event is selected */}
          {selectedEvent === null && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollAnimations.staggerContainer}
            >
              {uniqueEvents.map((eventName) => (
                <GalleryEventCard
                  key={eventName}
                  eventName={eventName}
                  displayName={getEventDisplayName(eventName)}
                  firstImageUrl={getFirstImageForEvent(eventName)}
                  onClick={() => setSelectedEvent(eventName)}
                />
              ))}
            </motion.div>
          )}

          {/* Show images for selected event */}
          {selectedEvent !== null && (
            <>
              {/* Go Back button */}
              <motion.div
                className="mb-8 flex justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-3 bg-numun-green text-white font-semibold rounded-lg hover:bg-numun-green/90 transition-colors duration-200"
                >
                  ← {t.gallery.goBack}
                </button>
              </motion.div>

              {/* Event title */}
              <motion.h2
                className="text-3xl font-bold text-center mb-8 text-numun-green"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {getEventDisplayName(selectedEvent)}
              </motion.h2>

              {/* Image grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollAnimations.staggerContainer}
              >
                {filteredImages.map((image) => (
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
            </>
          )}
        </div>
      </section>
    </div>
  );
}
