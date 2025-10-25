interface TeamGreetingQuoteProps {
  greeting?: string;
  size?: "small" | "large";
}

export default function TeamGreetingQuote({
  greeting,
  size = "large",
}: TeamGreetingQuoteProps) {
  if (!greeting) return null;

  const isLarge = size === "large";

  return (
    <div className="bg-numun-beige border-l-4 border-t-4 border-numun-gold rounded-lg p-6 relative h-full">
      <div
        className={`absolute ${isLarge ? "-top-4 left-6 text-4xl" : "-top-3 left-4 text-3xl"} text-numun-gold`}
      >
        "
      </div>
      <p
        className={`text-center ${isLarge ? "text-lg mb-4 mt-4" : "mb-2 mt-2"} whitespace-pre-line`}
      >
        {greeting}
      </p>
      <div
        className={`absolute ${isLarge ? "-bottom-4 right-6 text-4xl" : "-bottom-3 right-4 text-3xl"} text-numun-gold`}
      >
        "
      </div>
    </div>
  );
}
