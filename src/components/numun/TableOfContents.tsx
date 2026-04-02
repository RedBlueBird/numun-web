"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { tokens } from "@/config/styles";
import { fonts } from "@/config/fonts";

const SECTIONS = [
  { id: 'committees',   key: 'committees'       },
  { id: 'schedule',     key: 'scheduleOverview' },
  { id: 'awards',       key: 'awards'           },
  { id: 'swags',        key: 'swag'             },
  { id: 'social-night', key: 'socialNight'      },
  { id: 'visit',        key: 'visit'            },
] as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: 'smooth' });
}

type NavListProps = { onSelect?: () => void };

export default function TableOfContents() {
  const { t } = useLanguage();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = SECTIONS.map(s => ({
    id: s.id,
    label: t.conference.sections[s.key],
  }));

  const NavList = ({ onSelect }: NavListProps) => (
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item.id}>
          <button
            onClick={() => { scrollToSection(item.id); onSelect?.(); }}
            className={`flex items-start gap-3 text-left text-xs text-numun-green hover:text-numun-gold w-full ${tokens.transition.colors} ${fonts.cerebri}`}
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-numun-gold flex-shrink-0" />
            <span className="leading-snug">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );

  const Panel = ({ onSelect }: NavListProps) => (
    <div className="bg-white/75 backdrop-blur-md border border-numun-gold/40 rounded-2xl px-6 py-6 shadow-lg w-58">
      <p className={`text-[10px] font-bold text-numun-green/50 uppercase tracking-widest mb-5 ${fonts.cerebri}`}>
        On This Page
      </p>
      <NavList onSelect={onSelect} />
    </div>
  );

  const fabClass = `w-12 h-12 rounded-full bg-numun-green text-white flex items-center justify-center shadow-lg hover:opacity-80 ${tokens.transition.colors}`;

  return (
    <>
      {/* Desktop: panel fixed at vertical centre, FAB at bottom-right */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {desktopOpen && (
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.2 }}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
            >
              <Panel />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setDesktopOpen(p => !p)}
            aria-label="Toggle table of contents"
            className={fabClass}
          >
            {desktopOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile: FAB + slide-up popup above button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Panel onSelect={() => setMobileOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setMobileOpen(p => !p)}
          aria-label="Toggle table of contents"
          className={fabClass}
        >
          {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>
    </>
  );
}
