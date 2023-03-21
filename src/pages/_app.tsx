import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import 'prism-themes/themes/prism-nord.min.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
