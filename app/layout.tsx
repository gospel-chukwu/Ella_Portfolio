import type { Metadata, Viewport } from "next";
import { Stack_Sans_Headline} from "next/font/google";
import "./globals.css";


const stackSansHeadline = Stack_Sans_Headline({
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
