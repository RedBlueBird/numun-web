/**
 * Global type declarations for third-party scripts and libraries
 */

/**
 * Instagram Embed API
 * Loaded via the Instagram embed.js script
 */
interface InstagramEmbeds {
  /**
   * Process all Instagram blockquote elements on the page and convert them to embedded posts
   */
  process(): void;
}

interface Window {
  /**
   * Instagram embed script global object
   * Available after loading //www.instagram.com/embed.js
   */
  instgrm?: {
    Embeds: InstagramEmbeds;
  };
}
