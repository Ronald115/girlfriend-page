"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const floatingHearts = Array.from({ length: 5 }, (_, index) => index);

export default function FinalMessage() {
  return (
    <section className="glass-panel card-hover relative overflow-hidden bg-white/70 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,193,204,0.35),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(249,199,160,0.3),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,193,204,0.2),transparent_40%)]" />

      {floatingHearts.map((id) => (
        <motion.div
          key={id}
          className="absolute text-peach"
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, -20, 0],
            x: [0, Math.sin(id) * 10, 0]
          }}
          transition={{ duration: 6 + id, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: `${15 + id * 18}%`, top: `${20 + id * 10}%` }}
        >
          <Heart className="h-6 w-6" />
        </motion.div>
      ))}

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3 text-peach">
          <Sparkles className="h-6 w-6" />
          <p className="text-sm uppercase tracking-[0.2em] text-dusk/60">Módulo 3</p>
        </div>
        <h2 className="font-display text-2xl text-dusk">Mensaje final</h2>
        <p className="max-w-3xl text-lg text-dusk/80">
          "Aquí colocarás tu mensaje romántico. Este espacio está listo para brillar con tus palabras y nuestras promesas."
        </p>
        <p className="text-sm text-dusk/60">
          El fondo y la animación están listos. Solo edita el texto y, si quieres, ajusta colores o íconos.
        </p>
      </div>
    </section>
  );
}
