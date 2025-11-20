/**
 * Featured Instagram posts for the NUMUN Instagram feed section
 *
 * To update:
 * 1. Go to https://www.instagram.com/mun.nagoyauniversity/
 * 2. Click on a post to open it
 * 3. Copy the URL (format: https://www.instagram.com/p/POST_ID/)
 * 4. Replace the URLs below with your selected posts
 *
 * Note: Keep 6 posts for optimal grid layout (2 rows x 3 columns on desktop)
 */

export interface InstagramPost {
  url: string;
  description: string; // Fallback text shown while loading
}

export const featuredInstagramPosts: InstagramPost[] = [
  {
    url: 'https://www.instagram.com/p/DQ_y8-FgZRG/',
    description: 'NUMUN Conference Highlights',
  },
  {
    url: 'https://www.instagram.com/p/DQ_y4-bAZRk/',
    description: 'Delegate Sessions',
  },
  {
    url: 'https://www.instagram.com/p/DQ_ypMSgZLa/',
    description: 'Opening Ceremony',
  },
  {
    url: 'https://www.instagram.com/reel/DQ-vX7ngYuK/',
    description: 'Committee Discussions',
  },
  {
    url: 'https://www.instagram.com/reel/DQ1fjLOgUcF/',
    description: 'Awards Ceremony',
  },
  {
    url: 'https://www.instagram.com/p/DQwTnhQgS15/',
    description: 'NUMUN Community',
  },
];
