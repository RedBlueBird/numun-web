"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { expandAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function CollapsibleSection({ title, isOpen, onToggle, children }: CollapsibleSectionProps) {
  return (
    <div>
      <button onClick={onToggle} className="w-full flex items-center justify-between cursor-pointer">
        <h3 className={`text-2xl font-bold text-numun-green ${fonts.itcBenguiat}`}>
          {title}
        </h3>
        <FaChevronDown className={`text-numun-green flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={expandAnimations.descriptionReveal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
