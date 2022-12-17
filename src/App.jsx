import React from 'react';
import Carts from './components/Carts';
import FlexContent from './components/FlexContent';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Sales from './components/Sales';
import Stories from './components/Stories';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data';

function App(props) {
  return (
    <>
      <NavBar />
      <Carts/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=QnykUEqAVoc 2h27m