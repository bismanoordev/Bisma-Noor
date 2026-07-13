import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';

// Body text — Inter
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Headings — Manrope (fills the existing --font-space variable used across the site)
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  title: 'Bisma Noor | Web Developer',
  description: 'Portfolio of Bisma Noor — Web Developer specializing in React, Next.js, and modern web technologies.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
