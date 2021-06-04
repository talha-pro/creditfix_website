import React from 'react';
import Wrapper from '../components/Wrapper';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const news = () => {
  return (
    <Wrapper>
      <Hero
        headlineOne='Accessible'
        headlineTwo='Credit'
        headlineThree='For Everyone'
        buttonLabel='Download App'
      />

      <ContactUs contactStatement='TO MAKE SURE YOUR BUSINESS IS IN THE RIGHT DIRECTION' />
      <Footer />
    </Wrapper>
  );
};

export default news;
