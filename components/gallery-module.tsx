"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

const placeholders = Array.from({ length: 6 }, (_, index) => `Foto #${index + 1}`);

export default function GalleryModule() {
  return (
    <section className="glass-panel card-hover space-y-6 bg-white/70 p-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.18em] text-dusk/60">Módulo 1</p>
          <h2 className="font-display text-2xl text-dusk">Galería de fotos</h2>
          <p className="text-dusk/70">Reemplaza estos marcadores por tus fotos favoritas.</p>
        </div>
        <span className="rounded-full bg-rose/30 px-3 py-1 text-sm font-medium text-dusk">Placeholder listo</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((title, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-rose/40 bg-gradient-to-br from-white/90 via-blush/70 to-peach/60 p-6 shadow-soft"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,193,204,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(249,199,160,0.3),transparent_35%)] opacity-60 transition duration-500 group-hover:opacity-80" />
            <div className="relative z-10 flex h-32 flex-col items-center justify-center gap-3 text-dusk">
              <ImageIcon className="h-8 w-8 text-peach" />
              <span className="text-lg font-semibold">{title}</span>
              <p className="text-sm text-dusk/60">Arrastra tu foto aquí cuando quieras</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
