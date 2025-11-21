"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { HeartHandshake, Sparkles } from "lucide-react";
import { cn } from "@/components/utils";

const TARGET_DATE = "2025-04-04";

export default function AccessPage() {
  const router = useRouter();
  const [date, setDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const formattedDate = useMemo(() => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }, [date]);

  const handleAccess = () => {
    if (date === TARGET_DATE) {
      setError("");
      router.push("/home");
      return;
    }

    setError(
      "Esa fecha aún no está escrita en nuestro cielo, pero cada día contigo es un comienzo rosa y dulce."
    );
  };

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="glass-panel relative w-full max-w-3xl overflow-hidden">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-rose/40 blur-3xl" />
        <div className="absolute -right-12 -bottom-12 h-44 w-44 rounded-full bg-peach/40 blur-3xl" />

        <div className="relative z-10 grid gap-8 p-10 sm:p-14">
          <div className="flex items-center gap-3 text-peach">
            <HeartHandshake className="h-8 w-8" />
            <span className="font-script text-2xl tracking-wide">Nuestro instante</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="font-display text-3xl leading-tight text-dusk sm:text-4xl">
              Ingresá la fecha que guardaste en tu corazón
            </h1>
            <p className="text-lg text-dusk/70">
              Una puerta se abre sólo para una fecha muy especial. Si coincidimos, te llevaré a nuestro refugio de recuerdos.
            </p>
          </motion.div>

          <div className="grid gap-6 rounded-2xl bg-white/60 p-6 shadow-soft sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-[0.18em] text-dusk/60">Fecha secreta</label>
              <div className="flex items-center gap-3 rounded-xl border border-peach/50 bg-white/80 px-4 py-3 shadow-inner">
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="w-full bg-transparent text-base text-dusk outline-none"
                />
                <Sparkles className="h-5 w-5 text-peach" />
              </div>
              {formattedDate && (
                <p className="text-sm text-dusk/60">Ingresaste: {formattedDate}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAccess}
              className={cn(
                "card-hover inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-peach to-rose px-6 py-3",
                "text-base font-semibold text-dusk shadow-lg shadow-rose/30"
              )}
            >
              Entrar con amor
            </motion.button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-rose/40 bg-rose/20 p-4 text-dusk"
            >
              {error}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
