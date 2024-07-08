import { Layout } from '@/components';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Layout>
          <>
            <Head>
              <title>I'M JEON</title>
            </Head>
            <Component {...pageProps} />
          </>
        </Layout>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
