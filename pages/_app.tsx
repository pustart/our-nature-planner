import { AppProps } from 'next/dist/shared/lib/router/router';
import '../src/styles/index.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Наша Природа — календарь событий</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp
