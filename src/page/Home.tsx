import React from 'react'
import Hero from '../components/header/Hero';
import Benefits from '../components/benefits/Benefits';
import CoinsList from '../components/coins list/CoinsList';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';


const Home = () => {
  return (
    <div>
      <Hero />
      <CoinsList />
      <Benefits />
      <Contact />
    </div>
  );
}

export default Home