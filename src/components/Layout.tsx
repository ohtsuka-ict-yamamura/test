import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-full">
    <Head>
      <title>yamamura.log</title>
      <meta
        name="description"
        content="A personal blog written by Yuki Yamamura"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* TODO: replace favicon with new one*/}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-full flex-col">
      <Header />
      <div className="mx-auto w-full max-w-3xl flex-grow py-14 px-5">
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
