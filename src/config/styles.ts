/**
 * Centralized Style Configuration for NUMUN Website
 *
 * This file contains all reusable style patterns, design tokens, and layout presets.
 * Import these constants to maintain consistency across the application.
 *
 * Usage example:
 * import { spacing, typography, layout } from '@/config/styles'
 * <div className={spacing.container}>
 *   <h1 className={typography.pageTitle}>Title</h1>
 * </div>
 */

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacing = {
  // Container pattern used across all pages
  container: "container mx-auto px-4",

  // Section vertical padding
  section: {
    small: "py-12",
    medium: "py-16",
    large: "py-20",
  },

  // Common gap values
  gap: {
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
    xxl: "gap-12",
  },

  // Common padding values
  padding: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  },
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typography = {
  // Main page titles (used in PageTitle component and hero sections)
  pageTitle: "text-4xl sm:text-5xl md:text-6xl font-bold text-numun-gold italic",

  // Large hero titles
  heroTitle: "text-6xl sm:text-7xl md:text-8xl font-bold italic",

  // Hero-specific text styles
  heroSubtitle: "text-white text-xl sm:text-2xl italic",
  heroQuote: "text-white text-2xl sm:text-3xl font-bold",
  heroDescription: "text-white text-base sm:text-lg leading-relaxed",

  // Section headings
  sectionTitle: "text-4xl font-bold text-numun-green",
  sectionTitleLight: "text-4xl font-bold text-white",
  sectionTitleGold: "text-4xl font-bold text-numun-gold",

  // Subsection headings
  heading2: "text-2xl sm:text-3xl font-bold text-numun-green",
  heading3: "text-xl sm:text-2xl font-bold text-numun-green",

  // Body text
  bodyLarge: "text-lg text-gray-700 leading-relaxed",
  bodyNormal: "text-base text-gray-700",
  bodySmall: "text-sm text-gray-600",

  // Caption/label text
  caption: "text-xs text-gray-600",
  captionBold: "text-sm font-semibold",

  // Special text styles
  italic: "italic",
  textJustify: "text-justify",
} as const;

// ============================================================================
// LAYOUT PATTERNS
// ============================================================================

export const layout = {
  // Common grid configurations
  grid: {
    oneColumn: "grid grid-cols-1",
    twoColumn: "grid grid-cols-1 md:grid-cols-2",
    threeColumn: "grid grid-cols-1 md:grid-cols-3",
    fourColumn: "grid grid-cols-2 md:grid-cols-4",
    autoFit: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  },

  // Common flex patterns
  flex: {
    centerBoth: "flex items-center justify-center",
    centerVertical: "flex items-center",
    centerHorizontal: "flex justify-center",
    spaceBetween: "flex items-center justify-between",
    column: "flex flex-col",
    columnCenter: "flex flex-col items-center justify-center",
    row: "flex flex-row",
    wrap: "flex flex-wrap",
  },

  // Max-width containers for content
  maxWidth: {
    xs: "max-w-2xl mx-auto",
    sm: "max-w-3xl mx-auto",
    md: "max-w-4xl mx-auto",
    lg: "max-w-5xl mx-auto",
    xl: "max-w-6xl mx-auto",
  },

  // Common aspect ratios
  aspect: {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  },
} as const;

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export const tokens = {
  // Border radius
  borderRadius: {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  },

  // Shadows
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    none: "shadow-none",
  },

  // Transitions
  transition: {
    colors: "transition-colors duration-200",
    shadow: "transition-shadow",
    all: "transition-all duration-200",
    transform: "transition-transform duration-300",
  },

  // Common borders
  border: {
    default: "border",
    thick: "border-2",
    veryThick: "border-4",
    gold: "border-numun-gold",
    goldThick: "border-2 border-numun-gold",
    goldVeryThick: "border-4 border-numun-gold",
  },
} as const;

// ============================================================================
// SECTION BACKGROUND PATTERNS
// ============================================================================

export const sections = {
  // Hero sections with dark green background
  heroDark: "bg-numun-green-darkest text-white",
  heroDarkMedium: "bg-numun-green-dark text-white",
  hero: "bg-numun-green text-white",

  // Content sections
  contentLight: "bg-white",
  contentBeige: "bg-numun-beige",
  contentGreen: "bg-numun-green",
  contentGreenDark: "bg-numun-green-dark",
  contentGreenDarkest: "bg-numun-green-darkest",

  // Full height sections
  fullHeight: "min-h-screen",
  partialHeight: "min-h-[60vh]",

  // Section with padding
  standardSection: "py-16 bg-white",
  standardSectionBeige: "py-16 bg-numun-beige",
  standardSectionDark: "py-16 bg-numun-green-dark",
  standardSectionDarkest: "py-16 bg-numun-green-darkest",
} as const;

// ============================================================================
// COMPONENT-SPECIFIC PATTERNS
// ============================================================================

export const components = {
  // Card patterns
  card: {
    base: "bg-white rounded-lg overflow-hidden",
    withShadow: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow",
    decorative: "bg-white rounded-lg overflow-hidden border-4 border-numun-gold relative",
  },

  // Button base styles (component-specific variants defined in Button.tsx)
  button: {
    base: "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium text-base sm:text-lg transition-colors duration-200",
    large: "px-6 py-3 text-xl",
  },

  // Quote boxes
  quoteBox: {
    base: "bg-numun-beige border-l-4 border-t-4 border-numun-gold rounded-lg p-6 relative",
    light: "bg-white border-l-4 border-t-4 border-numun-gold rounded-lg p-6 relative",
  },

  // Stats/number displays
  stat: {
    container: "bg-white p-8 rounded-lg shadow-lg text-center",
    number: "text-6xl font-bold text-numun-green",
    label: "text-2xl font-bold text-numun-green",
    sublabel: "text-sm text-numun-green font-semibold",
  },

  // Logo circle (used in Header/Footer)
  logoCircle: "w-12 h-12 bg-numun-gold rounded-full flex items-center justify-center",

  // Decorative corners (for cards)
  decorativeCorner: "absolute w-8 h-8 border-numun-gold",

  // Hero section variants
  hero: {
    quoteBox: "border-l-4 border-numun-gold pl-6",
    logoContainer: "w-full h-full",
  },
} as const;

// ============================================================================
// RESPONSIVE PATTERNS
// ============================================================================

export const responsive = {
  // Common responsive spacing
  padding: {
    responsive: "px-4 sm:px-6 lg:px-8",
    responsiveY: "py-8 sm:py-12 lg:py-16",
  },

  // Show/hide at breakpoints
  hide: {
    mobile: "hidden sm:block",
    tablet: "hidden lg:block",
    desktop: "lg:hidden",
  },

  show: {
    mobileOnly: "block sm:hidden",
    tabletUp: "hidden sm:block",
    desktopOnly: "hidden lg:block",
  },
} as const;

// ============================================================================
// GRADIENT OVERLAYS
// ============================================================================

export const gradients = {
  // Background overlays for hero sections
  heroOverlay: "absolute inset-0 bg-gradient-to-b from-numun-green-darkest/90 to-numun-green-dark/80",

  // Decorative gradients
  greenGradient: "bg-gradient-to-br from-numun-green to-numun-green-dark",
  greenGradientDark: "bg-gradient-to-br from-numun-green-dark to-numun-green-darkest",
  goldGradient: "bg-gradient-to-br from-numun-gold-light to-numun-gold",
  goldGradientDark: "bg-gradient-to-br from-numun-gold to-numun-gold-darkest",
  beigeGradient: "bg-gradient-to-br from-numun-beige to-white",

  // Placeholder gradients (for image placeholders)
  placeholder: {
    gray: "bg-gradient-to-br from-gray-300 to-gray-400",
    blue: "bg-gradient-to-br from-blue-200 to-blue-300",
    green: "bg-gradient-to-br from-blue-200 to-green-200",
  },
} as const;

// ============================================================================
// UTILITY COMBINATIONS
// ============================================================================

export const utils = {
  // Centered container with max width
  centeredContainer: "container mx-auto px-4 max-w-6xl",

  // Text center
  textCenter: "text-center",

  // Absolute positioning helpers
  absoluteFill: "absolute inset-0",
  absoluteCenter: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",

  // Overflow
  overflow: {
    hidden: "overflow-hidden",
    auto: "overflow-auto",
    scroll: "overflow-scroll",
  },

  // Relative positioning
  relative: "relative",

  // Z-index layers
  zIndex: {
    base: "z-0",
    overlay: "z-10",
    decorative: "z-20",
    content: "z-30",
    header: "z-50",
  },
} as const;

// ============================================================================
// TYPE EXPORTS (for TypeScript autocomplete)
// ============================================================================

export type SpacingKey = keyof typeof spacing;
export type TypographyKey = keyof typeof typography;
export type LayoutKey = keyof typeof layout;
export type TokenKey = keyof typeof tokens;
export type SectionKey = keyof typeof sections;
export type ComponentKey = keyof typeof components;
