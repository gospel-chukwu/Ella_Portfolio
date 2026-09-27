import type { Metadata, Viewport } from 'next';
import { Stack_Sans_Headline, Inter, DM_Sans, Lato } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

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
      className={`${stackSansHeadline.variable} ${inter.variable} ${dmSans.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col font-stack-sans-headline">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
