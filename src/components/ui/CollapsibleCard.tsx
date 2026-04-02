"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { tokens, spacing, typography } from "@/config/styles";
import { scrollAnimations, expandAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";

interface CollapsibleCardProps {
  num: number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function CollapsibleCard({ num, title, isOpen, onToggle, children }: CollapsibleCardProps) {
  return (
    <motion.div
      variants={scrollAnimations.staggerItem}
      className={`bg-numun-beige border-2 rounded-2xl overflow-hidden ${tokens.transition.all} ${isOpen ? 'border-numun-gold/60 shadow-md' : 'border-numun-gold/30 hover:border-numun-gold/50 hover:shadow-sm'}`}
    >
      <button
        onClick={onToggle}
        className={`w-full px-8 py-6 flex items-center justify-between cursor-pointer ${tokens.transition.colors} hover:bg-numun-gold/5`}
      >
        <div className={`flex items-center ${spacing.gap.md}`}>
          <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-numun-green text-white flex items-center justify-center font-bold ${fonts.cerebri}`}>
            {num}
          </span>
          <h2 className={`text-2xl font-bold text-numun-green text-left ${fonts.itcBenguiat}`}>{title}</h2>
        </div>
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
            <div className="px-8 pb-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
