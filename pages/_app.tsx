import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../src/styles/index.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className='page-container'>
      <Head>
        <title>Наша Природа — календарь событий</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
