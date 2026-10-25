import type { Metadata, Viewport } from 'next';
import {
  Stack_Sans_Headline,
  Inter,
  DM_Sans,
  Lato,
  Nothing_You_Could_Do,
  Geist_Mono,
} from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Toaster } from 'react-hot-toast';
import ScrollRestoration from '@/lib/components/ScrollRestoration';
import BackgroundColorWrapper from '@/lib/wrappers/BackgroundColorWrapper';

config.autoAddCss = false;

const stackSansHeadline = Stack_Sans_Headline({
  variable: '--font-stack-sans-headline',
  subsets: ['latin'],
  adjustFontFallback: false,
  fallback: ['Inter', 'DM Sans', 'Lato', 'sans-serif'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: '--font-nothing-you-could-do',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Ella James',
  description:
    'I Design Brands, Products and Experiences that are Exceptional and cannot be ignored.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} ${inter.variable} ${dmSans.variable} ${lato.variable} ${nothingYouCouldDo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col font-stack-sans-headline">
        <ScrollRestoration />
        <BackgroundColorWrapper>{children}</BackgroundColorWrapper>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
