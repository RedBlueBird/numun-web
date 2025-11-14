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
    id: 'event-1',
    date: '2025-03-15',
    titleKey: 'timeline.events.event1.title',
    descriptionKey: 'timeline.events.event1.description',
    photos: [
      'https://via.placeholder.com/800x600/2C5530/FFFFFF?text=Event+1+Photo+1',
      'https://via.placeholder.com/800x600/2C5530/FFFFFF?text=Event+1+Photo+2',
    ],
    status: 'upcoming',
  },
  {
    id: 'event-2',
    date: '2025-02-20',
    titleKey: 'timeline.events.event2.title',
    descriptionKey: 'timeline.events.event2.description',
    photos: [
      'https://via.placeholder.com/800x600/2C5530/FFFFFF?text=Event+2+Photo+1',
    ],
    status: 'current',
  },
  {
    id: 'event-3',
    date: '2025-01-10',
    titleKey: 'timeline.events.event3.title',
    descriptionKey: 'timeline.events.event3.description',
    photos: [
      'https://via.placeholder.com/800x600/2C5530/FFFFFF?text=Event+3+Photo+1',
      'https://via.placeholder.com/800x600/2C5530/FFFFFF?text=Event+3+Photo+2',
      'https://via.placeholder.com/800x600/2C5530/FFFFFF?text=Event+3+Photo+3',
    ],
    status: 'past',
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
