import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata = {
  metadataBase: new URL(site),
  title: { default: 'Nexora Academy | Building the Engineers Behind Tomorrow', template: '%s | Nexora Academy' },
  description: 'Nexora Academy is a fictional demonstration technology academy: practical learning, expert mentorship, and real-world projects for future engineers.',
  openGraph: { title: 'Nexora Academy', description: 'Building the Engineers Behind Tomorrow. A fictional demonstration brand.', type: 'website', siteName: 'Nexora Academy' },
  twitter: { card: 'summary_large_image', title: 'Nexora Academy', description: 'Building the Engineers Behind Tomorrow.' },
};
export const viewport = { themeColor: '#080B12' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
