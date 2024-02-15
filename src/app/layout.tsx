import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discuss',
  description: 'A small discussion app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // className="light" | className="dark" // -> from nextUI
    <html lang="en" className="light">
      <body className={inter.className}>
        <div className="container mx-auto max-w-6xl px-4">
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
