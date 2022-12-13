import React from 'react';
import FlexContent from './components/FlexContent';
import Hero from './components/Hero';
import Sales from './components/Sales';
import { heroapi, popularsales, toprateslaes, highlight, sneaker } from './data/data';

function App(props) {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
      </main>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=QnykUEqAVoc 1h11m00s