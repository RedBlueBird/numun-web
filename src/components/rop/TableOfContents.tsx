"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { tokens } from "@/config/styles";
import { fonts } from "@/config/fonts";

const SECTIONS = [
  { id: 'house-rules',        key: 'houseRules'  },
  { id: 'rules-of-procedure', key: 'fullRop'     },
  { id: 'cheatsheet',         key: 'cheatsheet'  },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function TableOfContents() {
  const { t } = useLanguage();
  const r = t.rop;
  const [open, setOpen] = useState(false);

  const items = [
    { id: 'house-rules',        label: r.houseRules.sectionTitle },
    { id: 'rules-of-procedure', label: r.fullRop.sectionTitle    },
    { id: 'cheatsheet',         label: r.cheatsheet.sectionTitle },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="bg-white/75 backdrop-blur-md border border-numun-gold/40 rounded-2xl px-6 py-6 shadow-lg w-58"
          >
            <p className={`text-[10px] font-bold text-numun-green/50 uppercase tracking-widest mb-5 ${fonts.cerebri}`}>
              On This Page
            </p>
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => { scrollToSection(item.id); setOpen(false); }}
                    className={`flex items-start gap-3 text-left text-xs text-numun-green hover:text-numun-gold w-full ${tokens.transition.colors} ${fonts.cerebri}`}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-numun-gold flex-shrink-0" />
                    <span className="leading-snug">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(p => !p)}
        aria-label="Toggle table of contents"
        className={`w-12 h-12 rounded-full bg-numun-green text-white flex items-center justify-center shadow-lg hover:opacity-80 ${tokens.transition.colors}`}
      >
        {open ? <FaTimes size={16} /> : <FaBars size={16} />}
      </button>
    </div>
  );
}
