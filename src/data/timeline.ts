/**
 * Timeline Events Data
 *
 * Contains events for the "In Motion: Our Current Events" section
 * Events are sorted by date (latest first)
 */

export interface TimelineEvent {
  id: string;
  date: string; // ISO format: YYYY-MM-DD
  titleKey: string; // Translation key for event title
  descriptionKey: string; // Translation key for event description
  photos: string[]; // Array of image URLs/paths
  status?: 'upcoming' | 'current' | 'finished';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'early-bird-delegate-2026',
    date: '2026-03-07',
    titleKey: 'timeline.events.earlyBirdDelegate.title',
    descriptionKey: 'timeline.events.earlyBirdDelegate.description',
    photos: [],
    status: 'current',
  },
  {
    id: 'numun-cafe-2025',
    date: '2025-12-21',
    titleKey: 'timeline.events.numunCafe.title',
    descriptionKey: 'timeline.events.numunCafe.description',
    photos: [],
    status: 'finished',
  },
  {
    id: 'staff-recruitment-2025',
    date: '2025-10-08',
    titleKey: 'timeline.events.staffRecruitment.title',
    descriptionKey: 'timeline.events.staffRecruitment.description',
    photos: [],
    status: 'finished',
  },
];

/**
 * Get timeline events sorted by date (latest first)
 */
export function getTimelineEvents(): TimelineEvent[] {
  return [...timelineEvents].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
