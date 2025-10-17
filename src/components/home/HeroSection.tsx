import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-numun-green-dark overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-numun-green-dark/90 to-numun-green/80 z-10"></div>

      {/* Decorative torn edge - top left */}
      <div className="absolute top-0 left-0 w-full h-64 bg-numun-gold z-20" style={{
        clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 85%)"
      }}></div>

      {/* Decorative torn edge - bottom right */}
      <div className="absolute bottom-0 right-0 w-full h-64 bg-numun-gold z-20" style={{
        clipPath: "polygon(15% 0, 100% 15%, 100% 100%, 0 100%)"
      }}></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        {/* Logo with wreath */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Laurel wreath effect using CSS */}
            <div className="w-48 h-48 rounded-full border-8 border-numun-gold flex items-center justify-center bg-numun-green relative">
              <div className="w-32 h-32 bg-numun-gold rounded-full flex items-center justify-center">
                <span className="text-5xl">🌐</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">NUMUN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon text */}
        <div className="mb-4">
          <p className="text-white text-3xl sm:text-4xl italic font-light mb-2">Coming Soon</p>
          <h1 className="text-numun-gold text-6xl sm:text-7xl md:text-8xl font-bold italic mb-4">
            NUMUN
          </h1>
          <h2 className="text-numun-gold text-5xl sm:text-6xl md:text-7xl font-bold">
            2026
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-white text-xl sm:text-2xl md:text-3xl italic font-light mb-8 max-w-3xl mx-auto">
          "Driving growth, elevating impact"
        </p>

        {/* CTA Message */}
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold italic mb-12">
          Now recruiting sponsors & partners!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href="/about" variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
            🔍 LEARN ABOUT NUMUN
          </Button>
          <Button href="/contact" variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
            ✏️ CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
}
