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
  status?: 'upcoming' | 'current' | 'past';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'numun-cafe-2024',
    date: '2024-12-06',
    titleKey: 'timeline.events.numunCafe.title',
    descriptionKey: 'timeline.events.numunCafe.description',
    photos: [],
    status: 'upcoming',
  },
  {
    id: 'staff-recruitment-2024',
    date: '2024-10-08',
    titleKey: 'timeline.events.staffRecruitment.title',
    descriptionKey: 'timeline.events.staffRecruitment.description',
    photos: [],
    status: 'current',
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
