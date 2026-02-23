import type {Metadata} from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'World Class Title | Martian Title Search',
  description: 'The Future of Title Is Interplanetary. World Class Title Announces the World’s First Verified Title Search on Mars.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="font-inter bg-white text-black antialiased">{children}</body>
    </html>
  );
}
