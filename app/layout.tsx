import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Serendib Code | Digital Product Studio',
  description: 'Web development, UI/UX design, mobile app development, and cyber security services from Sri Lanka.',
  openGraph: { title: 'Serendib Code | Build. Innovate. Transform.', description: 'Strategy, design, engineering, and security for ambitious digital products.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
