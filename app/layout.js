import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
