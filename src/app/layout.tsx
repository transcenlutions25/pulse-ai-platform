import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulse AI - AI Content Creation Platform for Social Media Influencers",
  description: "The ultimate AI tool for influencers to create viral content for their audiences. Generate unlimited videos for brand partnerships, follower engagement, and client work across all social platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Pulsing Living Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Primary Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

          {/* Pulsing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 animate-pulse-slow blur-3xl" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 animate-pulse-slower blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-pink-500/10 animate-pulse-fast blur-3xl" />

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* Breathing Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent animate-breathe" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
