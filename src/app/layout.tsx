import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { Provider } from '@/lib/Provider';
import './globals.css';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio: jsalamanc',
  description:
    'Bienvenidos a mi web, donde podras saber mas sobre mi y conocer más sobre temas de programación',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body
        className={`${sora.className} scrollbar scrollbar-thumb-zinc-700 scrollbar-track-zinc-800`}
        style={{ overflowX: 'hidden' }}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
