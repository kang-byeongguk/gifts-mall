import '@/styles/globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'GIFTS:Mall', description: '쇼핑몰 GIFTS:Mall' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
