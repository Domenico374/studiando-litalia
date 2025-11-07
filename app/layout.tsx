import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studiando_L'Italia",
  description: "App educativa per studiare la geografia italiana nelle scuole elementari."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-white">
        <header className="border-b">
          <div className="max-w-2xl mx-auto py-4 px-4 flex items-center gap-3">
            <img src="/icon.svg" alt="Logo" className="h-7 w-7" />
            <h1 className="text-xl font-semibold">Studiando_L&apos;Italia</h1>
          </div>
        </header>
        <main className="max-w-2xl mx-auto py-8 px-4">{children}</main>
        <footer className="border-t mt-10">
          <div className="max-w-2xl mx-auto py-6 px-4 text-sm text-slate-500">
            © {new Date().getFullYear()} Studiando_L&apos;Italia — Progetto educativo
          </div>
        </footer>
      </body>
    </html>
  );
}
