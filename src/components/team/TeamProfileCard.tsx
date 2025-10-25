"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { hoverAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TeamProfileCardProps {
  name: string;
  affiliation: string;
  photo: string;
  size?: "small" | "large";
}

export default function TeamProfileCard({
  name,
  affiliation,
  photo,
  size = "large",
}: TeamProfileCardProps) {
  const isLarge = size === "large";
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex justify-center">
      <Card
        variant="decorative"
        className={`w-full ${isLarge ? "max-w-sm" : "max-w-xs"} overflow-hidden`}
      >
        <motion.div
          className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center overflow-hidden"
          whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoomSubtle}
        >
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </motion.div>
        <div className={`${isLarge ? "p-6" : "p-4"} text-center`}>
          <h3
            className={`${
              isLarge ? "text-xl" : "text-lg"
            } font-bold text-numun-green`}
          >
            {name}
          </h3>
          <p className={`${isLarge ? "text-sm" : "text-xs"} text-gray-600`}>
            {affiliation}
          </p>
        </div>
      </Card>
    </div>
  );
}
