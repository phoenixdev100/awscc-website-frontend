import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedImage from '../components/FeaturedImage';
import Events from '../components/Events';
import Team from '../components/Team';
import SocialLinks from '../components/SocialLinks';
import Support from '../components/Support';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturedImage />
      <Events />
      <Team />
      <SocialLinks />
      <Support />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
