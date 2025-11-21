import { Metadata } from "next";
import { ChevronRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import GalleryModule from "@/components/gallery-module";
import ReasonsModule from "@/components/reasons-module";
import FinalMessage from "@/components/final-message";

export const metadata: Metadata = {
  title: "Nuestro jardín de memorias",
  description: "Galería, razones y mensajes románticos listos para personalizar"
};

export default function HomePage() {
  return (
    <div className="relative flex-1 pb-16">
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-rose/50 via-peach/30 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-12">
        <header className="glass-panel card-hover flex flex-col gap-6 bg-white/70 p-8">
          <div className="flex items-center gap-3 text-peach">
            <Sparkles className="h-6 w-6" />
            <p className="text-sm uppercase tracking-[0.2em] text-dusk/60">Página principal</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="space-y-2">
              <h1 className="font-display text-3xl text-dusk sm:text-4xl">Bienvenida a nuestro refugio</h1>
              <p className="text-lg text-dusk/70">
                Todo está preparado para que agregues tus fotos, razones y mensajes. Solo faltan tus palabras y tus recuerdos.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-peach to-rose px-4 py-2 text-dusk shadow-glow"
            >
              <Heart className="h-5 w-5" />
              <span className="font-medium">Listo para personalizar</span>
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </div>
        </header>

        <section className="grid gap-10">
          <GalleryModule />
          <ReasonsModule />
          <FinalMessage />
        </section>
      </div>
    </div>
  );
}
