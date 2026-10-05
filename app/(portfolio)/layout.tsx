import Footer from '@/lib/sub_components/footer/Footer';
import Header from '@/lib/sub_components/header/Header';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
