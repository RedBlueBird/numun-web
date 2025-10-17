import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Gallery - NUMUN",
  description: "View photos from past NUMUN conferences.",
};

export default function GalleryPage() {
  return (
    <div>
      <PageTitle>GALLERY</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl text-gray-600 mb-12">
            Gallery coming soon! Check back later for photos from NUMUN conferences.
          </p>

          {/* Placeholder Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gradient-to-br from-numun-beige to-numun-gold-light rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl">📸</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
