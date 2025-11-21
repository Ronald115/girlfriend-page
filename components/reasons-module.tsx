"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Sparkles } from "lucide-react";

const reasons = Array.from({ length: 9 }, (_, index) => `Razón #${index + 1}`);

export default function ReasonsModule() {
  const [currentReason, setCurrentReason] = useState<string>(reasons[0]);
  const [index, setIndex] = useState<number>(0);

  const nextReason = () => {
    const pool = reasons.filter((_, idx) => idx !== index);
    const random = Math.floor(Math.random() * pool.length);
    const next = pool[random];
    setCurrentReason(next);
    setIndex(reasons.indexOf(next));
  };

  return (
    <section className="glass-panel card-hover space-y-6 bg-white/70 p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.18em] text-dusk/60">Módulo 2</p>
          <h2 className="font-display text-2xl text-dusk">Razones por las que la amo</h2>
          <p className="text-dusk/70">Haz clic para mostrar una razón diferente y reemplázala luego por las tuyas.</p>
        </div>
        <span className="rounded-full bg-peach/40 px-3 py-1 text-sm font-medium text-dusk">Interacción lista</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-[1.2fr_auto] sm:items-center">
        <div className="relative overflow-hidden rounded-2xl border border-peach/50 bg-gradient-to-br from-white/90 via-blush/70 to-peach/60 p-6 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,193,204,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(249,199,160,0.3),transparent_35%)] opacity-70" />
          <div className="relative z-10 flex min-h-[140px] items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentReason}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-display text-2xl text-dusk"
              >
                {currentReason}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={nextReason}
          className="card-hover inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-peach to-rose px-6 py-4 text-base font-semibold text-dusk shadow-lg shadow-rose/30"
        >
          <Shuffle className="h-5 w-5" />
          Mostrar otra razón
          <Sparkles className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}
