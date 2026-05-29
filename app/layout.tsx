import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavinkumar S — Actor | Assistant Director | Filmmaker",
  description:
    "Portfolio of Kavinkumar S — actor, assistant director, and filmmaker from Tamil Nadu. Emotional storytelling, performance-driven cinema, and disciplined film production.",
  keywords: [
    "Kavinkumar S",
    "Actor",
    "Assistant Director",
    "Filmmaker",
    "Tamil Cinema",
    "Kollywood",
    "Chennai",
  ],
  openGraph: {
    title: "Kavinkumar S — Actor | Assistant Director | Filmmaker",
    description:
      "Portfolio of Kavinkumar S — actor, assistant director, and filmmaker from Tamil Nadu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${display.variable} ${body.variable}`}>
      <body className="bg-bg text-text font-body antialiased selection:bg-accent">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
