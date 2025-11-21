import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import { cn } from "@/components/utils";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Mi rincón romántico",
  description: "Un espacio íntimo y elegante para celebrar el amor"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn(playfair.variable, inter.variable, dancing.variable)}>
      <body className="min-h-screen bg-gradient-to-br from-ivory via-blush to-rose text-dusk antialiased">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,193,204,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(249,199,160,0.25),transparent_30%)]" />
        <main className="relative z-10 flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
