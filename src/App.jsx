import React from 'react';
import FlexContent from './components/FlexContent';
import Hero from './components/Hero';
import Sales from './components/Sales';
import Stories from './components/Stories';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story } from './data/data';

function App(props) {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story} />
      </main>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=QnykUEqAVoc 1h34m00s