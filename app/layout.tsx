import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeSwitch from './theme-switch';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Serendib Code | Digital Product Studio',
  description: 'Web development, UI/UX design, mobile app development, and cyber security services from Sri Lanka.',
  openGraph: { title: 'Serendib Code | Build. Innovate. Transform.', description: 'Strategy, design, engineering, and security for ambitious digital products.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('serendib-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}` }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <ThemeSwitch />
      </body>
    </html>
  );
}
