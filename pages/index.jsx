import React from 'react';
import Head from 'next/head';

import GlobalStyle from '../components/GlobalStyle';
import BattleGround from '../components/BattleGround';

const Home = () => (
  <div>
    <Head>
      <title>Air Fight!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to Air Fight!</h1>
    </div>
    <main>
      <BattleGround size={9} />
    </main>
    <style jsx>{`
      .hero {
        font-family: 'Lexy';
        width: 100%;
        color: #333;
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
