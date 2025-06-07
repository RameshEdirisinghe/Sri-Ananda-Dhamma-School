// app/layout.tsx (Next.js 13+ App Router)
import './globals.css';
import { Poppins, Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'ශ්‍රී ආනන්ද දහම් පාසල',
  description: 'Educate. Enlighten. Empower.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-neutral-background text-neutral font-body">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
