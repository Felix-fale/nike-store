import React from 'react';
import Hero from './components/Hero';
import Sales from './components/Sales';
import { heroapi, popularsales, toprateslaes } from './data/data';

function App(props) {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=QnykUEqAVoc 1h00m00s