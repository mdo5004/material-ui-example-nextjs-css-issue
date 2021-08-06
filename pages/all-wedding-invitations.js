import React from 'react';
import Head from 'next/head';
import PageContent from '../src/components/PageContent';
import TwoColumnHero from '../src/components/TwoColumnHero';
import OneColumnHero from '../src/components/OneColumnHero';
import Serif from '../src/components/Serif';
import Sans from '../src/components/Sans';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop All Wedding Invitations | Shine Wedding Invitations</title>
      </Head>
      <PageContent>
        <TwoColumnHero>
          <img
            src='https://media.shineweddinginvitations.com/catalog/Shop-All-Enclosure-Poppy-6897.jpg'
            alt='Poppy Letterpress Wedding Invitations'
            size='xl'
          />
          <img
            src='https://media.shineweddinginvitations.com/catalog/Shop-All-Styled-Danielle-3331.jpg'
            alt='Danielle Wedding Invitations'
            size='xl'
          />
        </TwoColumnHero>
        <OneColumnHero>
          <Serif size={30} as='h1' centered>Timeless Invitations for Modern Weddings</Serif>
          <Sans size={14} as='p' centered>
            We only offer clean, simple, and elegant wedding invitations intentionally designed to stand the test of time. Explore our paper options, ink colors, and embellishments that will bring your vision to life.
          </Sans>
        </OneColumnHero>
      </PageContent>
    </>
  );
}
