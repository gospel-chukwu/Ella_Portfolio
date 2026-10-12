import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about my background, design philosophy, experience, and creative process as a brand and product designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
