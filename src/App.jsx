import React from 'react';
import Hero from './components/Hero';
import { heroapi } from './data/data';

function App(props) {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=QnykUEqAVoc 20m20s