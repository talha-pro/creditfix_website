import React from 'react';
import Team from '../components/Team';
import Wrapper from '../components/Wrapper';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Locations from '../components/Locations';

const about = () => {
  return (
    <Wrapper>
      <Hero
        headlineOne='Accessible'
        headlineTwo='Credit'
        headlineThree='For Everyone'
        buttonLabel='Download App'
      />
      {/* <AboutUs /> */}
      <Team />
      <Locations />
      <ContactUs contactStatement='TO MAKE SURE YOUR BUSINESS IS IN THE RIGHT DIRECTION' />
      <Footer />
    </Wrapper>
  );
};

export default about;
