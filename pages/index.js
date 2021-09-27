import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Menu from '../components/menu';
import Hero from '../components/hero';
import Work from '../components/work';

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftGens</title>
        <meta name="description" content="Generated by SoftGens" />
      </Head>
      <Menu />
      <Hero />

      <Work />
    </>
  );
}
