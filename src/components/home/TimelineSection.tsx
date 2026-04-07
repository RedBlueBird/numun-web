'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTimelineEvents } from '@/data/timeline';
import ImageCarousel from '@/components/ui/ImageCarousel';
import { FaChevronDown } from 'react-icons/fa';
import {
  sections,
  spacing,
  layout,
  typography,
  components,
  tokens,
} from '@/config/styles';
import {
  scrollAnimations,
  transitions,
  viewportOptions,
  expandAnimations,
} from '@/config/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fonts } from '@/config/fonts';

export default function TimelineSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const timelineEvents = getTimelineEvents();
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const toggleEvent = (id: string) => {
    setExpandedEventId(prev => (prev === id ? null : id));
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Get event title and description from translations
  const getEventText = (titleKey: string, descriptionKey: string) => {
    // Extract the event key (e.g., 'staffRecruitment' from 'timeline.events.staffRecruitment.title')
    const eventKey = titleKey.split('.')[2] as keyof typeof t.timeline.events;
    return {
      title: t.timeline.events[eventKey].title,
      description: t.timeline.events[eventKey].description,
    };
  };

  return (
    <section className={`${sections.standardSectionDark} text-white`}>
      <div className={spacing.container}>
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={viewportOptions}
          variants={scrollAnimations.slideUp}
          className={`${layout.flex.column} ${spacing.gap.md} text-center mb-16`}
        >
          <h2 className={`${typography.sectionTitleLight} ${fonts.itcBenguiat}`}>{t.timeline.title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.timeline.description}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className={`${layout.maxWidth.lg} relative`}>
          {/* Vertical Gold Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-numun-gold transform -translate-x-1/2 hidden sm:block" />

          {/* Timeline Events */}
          <motion.div
            initial={shouldReduceMotion ? {} : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={viewportOptions}
            variants={scrollAnimations.staggerContainer}
            className={`${layout.flex.column} ${spacing.gap.xl}`}
          >
            {timelineEvents.map((event, index) => {
              const { title, description } = getEventText(
                event.titleKey,
                event.descriptionKey
              );
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  variants={scrollAnimations.staggerItem}
                  className="relative"
                >
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      isEven ? '' : 'md:grid-flow-dense'
                    }`}
                  >
                    {/* Date Marker - Hidden on mobile, shown on desktop */}
                    <div
                      className={`hidden md:block ${
                        isEven ? 'text-right pr-12' : 'text-left pl-12 md:col-start-2'
                      }`}
                    >
                      <div className="inline-block">
                        <div className="text-numun-gold font-bold text-xl mb-2">
                          {formatDate(event.date)}
                        </div>
                      </div>
                    </div>

                    {/* Event Content Card */}
                    <div
                      className={`${
                        isEven ? 'md:pl-12' : 'md:pr-12 md:col-start-1'
                      } relative`}
                    >
                      <motion.div
                        transition={transitions.smooth}
                        onClick={() => toggleEvent(event.id)}
                        className={`${components.card.base} bg-white/10 backdrop-blur-sm ${spacing.padding.md} ${tokens.borderRadius.xl} border border-numun-gold/30 cursor-pointer`}
                      >
                        {/* Mobile Date Display */}
                        <div className="md:hidden text-numun-gold font-bold text-sm mb-3">
                          {formatDate(event.date)}
                        </div>

                        {/* Event Title + Chevron */}
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white">
                            {title}
                          </h3>
                          <FaChevronDown
                            className={`text-numun-gold flex-shrink-0 ml-4 transition-transform duration-300 ${expandedEventId === event.id ? 'rotate-180' : ''}`}
                          />
                        </div>

                        {/* Event Description */}
                        {shouldReduceMotion ? (
                          expandedEventId === event.id && (
                            <div className="text-gray-300 leading-relaxed mb-6 space-y-1">
                              {description.split('\n').map((line, i) =>
                                line === '' ? <div key={i} className="h-2" /> : <p key={i}>{line}</p>
                              )}
                            </div>
                          )
                        ) : (
                          <AnimatePresence>
                            {expandedEventId === event.id && (
                              <motion.div
                                key="description"
                                variants={expandAnimations.descriptionReveal}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                style={{ overflow: 'hidden' }}
                                className="mb-6"
                              >
                                <div className="text-gray-300 leading-relaxed space-y-1">
                                  {description.split('\n').map((line, i) =>
                                    line === '' ? <div key={i} className="h-2" /> : <p key={i}>{line}</p>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}

                        {/* Event Photos Carousel */}
                        {event.photos && event.photos.length > 0 && (
                          <ImageCarousel images={event.photos} alt={title} />
                        )}

                        {/* Status Badge (optional) */}
                        {event.status && (
                          <div className="mt-4">
                            <span
                              className={`inline-block px-3 py-1 ${tokens.borderRadius.full} text-xs font-semibold ${
                                event.status === 'upcoming'
                                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                                  : event.status === 'current'
                                  ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                  : 'bg-gray-500/20 text-gray-300 border border-gray-500/50'
                              }`}
                            >
                              {event.status.charAt(0).toUpperCase() +
                                event.status.slice(1)}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
