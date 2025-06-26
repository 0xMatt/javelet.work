import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matthew Javelet - Software Engineer',
  description:
    'A personal landing page with links to my personal contact information, websites & resources.',
  icons: '/public/me.jpg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark relative antialiased`}>
        <div className="relative z-[1000] mx-auto h-screen max-w-[480px] pt-20 md:min-h-fit md:shadow-xl">
          {children}
        </div>
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
