import React from 'react';
import Head from 'next/head';

import GlobalStyle from '../components/GlobalStyle';
import GameBoard from '../components/GameBoard';

const Home = () => (
  <div>
    <Head>
      <title>Dogfight</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Dogfight</h1>
    </div>
    <main>
      <GameBoard />
    </main>
    <style jsx>{`
      .hero {
        font-family: 'Lexy';
        width: 100%;
        color: rgb(236, 149, 160);
      }

      h1 {
        text-transform: uppercase;
      }

      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
      }

      main {
        max-width: 880px;
        margin: 40px auto;
        padding: 0 80px;
      }
    `}</style>
    <GlobalStyle />
  </div>
);

export default Home;
