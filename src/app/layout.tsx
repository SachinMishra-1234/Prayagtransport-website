import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'QR Studio',
  description: 'Modern QR code generator with pricing tiers',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="container py-6">
          <header className="flex items-center justify-between">
            <a href="/" className="font-semibold">QR Studio</a>
            <nav className="flex items-center gap-3 text-sm">
              <a href="/pricing" className="hover:underline">Pricing</a>
              <a href="/login" className="rounded bg-brand px-3 py-1.5 text-white">Login</a>
            </nav>
          </header>
          <main className="py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
