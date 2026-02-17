import type { Metadata } from 'next';
import './globals.css';
import Header from './.components/Header';
import Footer from './.components/Footer';
import ConsoleArt from './.components/ConsoleArt';

export const metadata: Metadata = {
  title: {
    default: "Miku's Origin — ネットワークコンテンツ研究会",
    template: "%s | Miku's Origin",
  },
  description:
    "ネットワークコンテンツ研究会 Miku's Origin (MO) の公式サイト。活動実績、メンバー紹介、部員募集情報をご覧いただけます。",
  icons: {
    icon: '/mikus-origin_favicon.png',
    apple: '/mikus-origin_favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ConsoleArt />
        <Header />
        <div style={{ paddingTop: '72px' }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
