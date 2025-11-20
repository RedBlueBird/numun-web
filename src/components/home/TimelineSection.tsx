'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTimelineEvents } from '@/data/timeline';
import ImageCarousel from '@/components/ui/ImageCarousel';
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
  hoverAnimations,
  transitions,
  viewportOptions,
} from '@/config/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fonts } from '@/config/fonts';

export default function TimelineSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const timelineEvents = getTimelineEvents();

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
                        whileHover={
                          shouldReduceMotion ? {} : hoverAnimations.cardLift
                        }
                        transition={transitions.smooth}
                        className={`${components.card.base} bg-white/10 backdrop-blur-sm ${spacing.padding.lg} ${tokens.borderRadius.xl} border border-numun-gold/30`}
                      >
                        {/* Mobile Date Display */}
                        <div className="md:hidden text-numun-gold font-bold text-sm mb-3">
                          {formatDate(event.date)}
                        </div>

                        {/* Event Title */}
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {title}
                        </h3>

                        {/* Event Description */}
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {description}
                        </p>

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
