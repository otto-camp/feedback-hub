import Header from '@/layouts/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';
import Footer from '@/layouts/Footer';
import Analytics from '@/layouts/Analytics';
import { description, keywords, title } from '../MetadataDefault';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
