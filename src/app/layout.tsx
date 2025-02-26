import { IndexProps } from '@/lib/types/routes/Index.types';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { Provider } from '@/lib/Provider';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const sora = Sora({ subsets: ['latin'] });

export const revalidate = 200;

export async function generateMetadata() {
  const product: IndexProps = await fetch(
    `${process.env.NEXT_URL_PAGE || ''}/api`
  ).then((res) => res.json());
  const metadata: Metadata = {
    title: product?.metadata?.seo_metadata?.title,
    description: product?.metadata?.seo_metadata?.description,
    keywords: product?.metadata?.seo_metadata?.keywords,
    openGraph: {
      title: product?.metadata?.seo_metadata?.title,
      description: product?.metadata?.seo_metadata?.description,
    },
  };
  return metadata;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body
        className={`${sora.className} scrollbar scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 bg-gray-900`}
        style={{ overflowX: 'hidden' }}
      >
        <GoogleAnalytics gaId='G-HY41YEQBK1' />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
