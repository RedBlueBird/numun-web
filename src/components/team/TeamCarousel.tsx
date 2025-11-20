'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { transitions } from '@/config/animations';
import { tokens, layout, spacing } from '@/config/styles';
import Image from 'next/image';
import { TeamMember } from '@/types';

interface TeamCarouselProps {
  teams: TeamMember[];
}

export default function TeamCarousel({ teams }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teams.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === teams.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // If only one team, display it without carousel controls
  if (teams.length === 1) {
    const team = teams[0];
    return (
      <div className={`${layout.maxWidth.xl} ${layout.flex.column} ${spacing.gap.md}`}>
        {/* Team Image */}
        <div className={`relative w-full aspect-video ${tokens.borderRadius.lg} overflow-hidden bg-gray-200`}>
          <Image
            src={team.photo}
            alt={team.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* Team Info */}
        <div className="text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{team.name}</h3>
          <p className="text-numun-gold text-sm sm:text-base font-semibold mb-4">{team.affiliation}</p>
          {team.description && (
            <p className="text-base sm:text-lg leading-relaxed">{team.description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${layout.maxWidth.xl} relative w-full`}>
      {/* Carousel Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transitions.smooth}
          className={`${layout.flex.column} ${spacing.gap.md}`}
        >
          {/* Team Image */}
          <div className={`relative w-full aspect-video ${tokens.borderRadius.lg} overflow-hidden bg-gray-200`}>
            <Image
              src={teams[currentIndex].photo}
              alt={teams[currentIndex].name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Team Info */}
          <div className="text-center text-white px-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{teams[currentIndex].name}</h3>
            <p className="text-numun-gold text-sm sm:text-base font-semibold mb-4">
              {teams[currentIndex].affiliation}
            </p>
            {teams[currentIndex].description && (
              <p className="text-base sm:text-lg leading-relaxed">
                {teams[currentIndex].description}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors z-10"
        aria-label="Previous team"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors z-10"
        aria-label="Next team"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {teams.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-numun-gold w-8'
                : 'bg-gray-400 hover:bg-gray-500 w-2'
            }`}
            aria-label={`Go to ${teams[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}
